import {
    attribute,
    cameraProjectionMatrix,
    cameraViewMatrix,
    createVertexBuffer,
    d,
    f32,
    Geometry,
    Inspector,
    LineMaterial,
    LineSegments,
    LineSegmentsGeometry,
    Material,
    Mesh,
    modelNormalMatrix,
    modelWorldMatrix,
    mul,
    normalize,
    OrbitControls,
    pass,
    PerspectiveCamera,
    RenderPipeline,
    renderOutput,
    Scene,
    Var,
    varying,
    vec3,
    vec4,
    vec4f,
    WebGLRenderer,
} from 'gpucat';
import { quat, vec3 as v3 } from 'mathcat';
import { quickhull3 } from 'mathcat/geometry';
import { mulberry32 } from 'mathcat/random';

// A random 3D point cloud, its convex hull computed with mathcat's quickhull3.
// gpucat draws the hull as a wireframe around solid point markers; mathcat does
// all the maths — point generation (mulberry32), the hull, per-face normals
// (vec3), and the turntable spin (quat).

const POINT_COUNT = 40;
const CLOUD_RADIUS = 1.5;
const MARKER_RADIUS = 0.045;

/* mathcat: generate a seeded point cloud inside a ball (rejection sampling) */

const rng = mulberry32.create(1337);
const points: number[] = [];
while (points.length < POINT_COUNT * 3) {
    const x = mulberry32.sample(rng) * 2 - 1;
    const y = mulberry32.sample(rng) * 2 - 1;
    const z = mulberry32.sample(rng) * 2 - 1;
    if (x * x + y * y + z * z <= 1) {
        points.push(x * CLOUD_RADIUS, y * CLOUD_RADIUS, z * CLOUD_RADIUS);
    }
}

/* mathcat: compute the convex hull (triangle indices into `points`) */

const hullIndices = quickhull3(points);

/* renderer, scene, camera */

const renderer = new WebGLRenderer({ antialias: true });
await renderer.init();

const canvas = renderer.domElement as HTMLCanvasElement;
document.body.appendChild(canvas);
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new Scene();

const camera = new PerspectiveCamera(
    Math.PI / 4,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
);
camera.position[2] = 5;
scene.add(camera);

const controls = new OrbitControls(camera, canvas);

renderer.setInspector(new Inspector());

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

/* hull wireframe — one line segment per unique hull edge */

const edgeSet = new Set<string>();
const edgePoints: number[] = [];
function addEdge(a: number, b: number) {
    const key = a < b ? `${a}_${b}` : `${b}_${a}`;
    if (edgeSet.has(key)) return;
    edgeSet.add(key);
    edgePoints.push(points[a * 3], points[a * 3 + 1], points[a * 3 + 2]);
    edgePoints.push(points[b * 3], points[b * 3 + 1], points[b * 3 + 2]);
}
for (let i = 0; i < hullIndices.length; i += 3) {
    const [a, b, c] = [hullIndices[i], hullIndices[i + 1], hullIndices[i + 2]];
    addEdge(a, b);
    addEdge(b, c);
    addEdge(c, a);
}

const hullGeometry = new LineSegmentsGeometry(edgePoints);
const hullMaterial = new LineMaterial({ color: vec4f(0.35, 0.85, 1.0, 1.0) as never, lineWidth: 1.5 });
const hull = new LineSegments(hullGeometry, hullMaterial);
scene.add(hull);

/* point markers — a small lit octahedron merged for every point */

const OCTA_VERTS: [number, number, number][] = [
    [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
];
const OCTA_FACES: [number, number, number][] = [
    [4, 0, 2], [4, 2, 1], [4, 1, 3], [4, 3, 0],
    [5, 2, 0], [5, 1, 2], [5, 3, 1], [5, 0, 3],
];

const vertsPerCloud = POINT_COUNT * OCTA_FACES.length * 3;
const markerPositions = new Float32Array(vertsPerCloud * 3);
const markerNormals = new Float32Array(vertsPerCloud * 3);

const a = v3.create();
const b = v3.create();
const cc = v3.create();
const ab = v3.create();
const ac = v3.create();
const nrm = v3.create();
let w = 0;
for (let p = 0; p < POINT_COUNT; p++) {
    const px = points[p * 3];
    const py = points[p * 3 + 1];
    const pz = points[p * 3 + 2];
    for (const [i0, i1, i2] of OCTA_FACES) {
        v3.set(a, px + OCTA_VERTS[i0][0] * MARKER_RADIUS, py + OCTA_VERTS[i0][1] * MARKER_RADIUS, pz + OCTA_VERTS[i0][2] * MARKER_RADIUS);
        v3.set(b, px + OCTA_VERTS[i1][0] * MARKER_RADIUS, py + OCTA_VERTS[i1][1] * MARKER_RADIUS, pz + OCTA_VERTS[i1][2] * MARKER_RADIUS);
        v3.set(cc, px + OCTA_VERTS[i2][0] * MARKER_RADIUS, py + OCTA_VERTS[i2][1] * MARKER_RADIUS, pz + OCTA_VERTS[i2][2] * MARKER_RADIUS);

        // mathcat: flat face normal via edge cross product
        v3.subtract(ab, b, a);
        v3.subtract(ac, cc, a);
        v3.cross(nrm, ab, ac);
        v3.normalize(nrm, nrm);

        for (const vert of [a, b, cc]) {
            markerPositions[w * 3] = vert[0];
            markerPositions[w * 3 + 1] = vert[1];
            markerPositions[w * 3 + 2] = vert[2];
            markerNormals[w * 3] = nrm[0];
            markerNormals[w * 3 + 1] = nrm[1];
            markerNormals[w * 3 + 2] = nrm[2];
            w++;
        }
    }
}

const markerGeometry = new Geometry();
markerGeometry.setBuffer('position', createVertexBuffer(d.vec3f, markerPositions));
markerGeometry.setBuffer('normal', createVertexBuffer(d.vec3f, markerNormals));
markerGeometry.drawRange.count = vertsPerCloud;

// lit shader graph (named intermediates via Var)
const position = attribute('position', d.vec3f);
const normal = attribute('normal', d.vec3f);

const worldPosition = Var('worldPosition', mul(modelWorldMatrix, vec4(position, f32(1))));
const clipPosition = mul(cameraProjectionMatrix, mul(cameraViewMatrix, worldPosition));

const vWorldNormal = varying(normalize(mul(modelNormalMatrix, normal)), 'vNormal');

const lightDirection = vec3(0.6, 1.0, 0.8).normalize();
const diffuse = Var('diffuse', vWorldNormal.dot(lightDirection).max(f32(0)));
const lighting = Var('lighting', f32(0.2).add(diffuse.mul(f32(0.9))));
const markerColor = vec3(1.0, 0.55, 0.2);
const litColor = Var('litColor', markerColor.mul(lighting));

const markerMaterial = new Material({
    vertex: clipPosition,
    fragment: vec4(litColor, f32(1)),
    cullMode: 'none',
});

const markers = new Mesh(markerGeometry, markerMaterial);
scene.add(markers);

scene.updateWorldMatrix();
camera.updateViewMatrix();

/* render loop — mathcat quaternion drives a shared turntable spin */

const scenePass = pass(scene, camera);
const outputNode = renderOutput(scenePass.getTextureNode());
const renderPipeline = new RenderPipeline(renderer, outputNode);

const spinAxis = v3.normalize(v3.create(), v3.fromValues(0.1, 1, 0.05));
let angle = 0;
let prevTime = performance.now() / 1000;

function frame() {
    const now = performance.now() / 1000;
    const dt = now - prevTime;
    prevTime = now;

    angle += dt * 0.4;
    quat.setAxisAngle(markers.quaternion, spinAxis, angle);
    quat.setAxisAngle(hull.quaternion, spinAxis, angle);
    scene.updateWorldMatrix();

    controls.update();
    renderPipeline.render();
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
