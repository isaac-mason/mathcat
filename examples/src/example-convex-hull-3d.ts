import * as g from 'gpucat';
import { mat4, quat, vec3 as v3 } from 'mathcat';
import { quickhull3 } from 'mathcat/geometry';
import { mulberry32 } from 'mathcat/random';

// A seeded 3D point cloud and its convex hull (mathcat's quickhull3), rendered
// with gpucat: a translucent normal-coloured "rainbow" hull shell over instanced
// spheres — blue for points on the hull, grey for points inside it. mathcat does
// the maths: point generation (mulberry32), the hull, and its vertex normals (vec3).

const d = g.d;

const POINT_COUNT = 60;
const CLOUD_RADIUS = 1.5;
const MARKER_RADIUS = 0.05;
const HULL_OPACITY = 0.16;

/* mathcat: seeded point cloud inside a ball (rejection sampling) */

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
const numPoints = points.length / 3;

/* mathcat: convex hull (triangle indices) + the set of on-hull vertices */

const hullIndices = quickhull3(points);
const hullVertices = new Set(hullIndices);

/* mathcat: smooth vertex normals for the hull (area-weighted face normals) */

const hullNormals = new Float32Array(numPoints * 3);
{
    const a = v3.create();
    const b = v3.create();
    const c = v3.create();
    const e1 = v3.create();
    const e2 = v3.create();
    const fn = v3.create();
    for (let i = 0; i < hullIndices.length; i += 3) {
        const ia = hullIndices[i];
        const ib = hullIndices[i + 1];
        const ic = hullIndices[i + 2];
        v3.set(a, points[ia * 3], points[ia * 3 + 1], points[ia * 3 + 2]);
        v3.set(b, points[ib * 3], points[ib * 3 + 1], points[ib * 3 + 2]);
        v3.set(c, points[ic * 3], points[ic * 3 + 1], points[ic * 3 + 2]);
        v3.subtract(e1, b, a);
        v3.subtract(e2, c, a);
        v3.cross(fn, e1, e2); // length ∝ triangle area → area-weighted accumulation
        for (const idx of [ia, ib, ic]) {
            hullNormals[idx * 3] += fn[0];
            hullNormals[idx * 3 + 1] += fn[1];
            hullNormals[idx * 3 + 2] += fn[2];
        }
    }
    for (let i = 0; i < numPoints; i++) {
        const len = Math.hypot(hullNormals[i * 3], hullNormals[i * 3 + 1], hullNormals[i * 3 + 2]) || 1;
        hullNormals[i * 3] /= len;
        hullNormals[i * 3 + 1] /= len;
        hullNormals[i * 3 + 2] /= len;
    }
}

/* renderer, scene, camera */

const renderer = new g.WebGPURenderer({ antialias: true });
await renderer.init();

const canvas = renderer.domElement as HTMLCanvasElement;
document.body.appendChild(canvas);
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new g.Scene();

const camera = new g.PerspectiveCamera(Math.PI / 4, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position[0] = -1.6;
camera.position[1] = 1.8;
camera.position[2] = 3.6;
scene.add(camera);

const controls = new g.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.1;

renderer.setInspector(new g.Inspector());

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

/* instanced spheres — one per point, tinted by hull membership */

const sphere = g.createSphereGeometry(1, 16, 12);

const instanceMatrices = new Float32Array(numPoints * 16);
const instanceColors = new Float32Array(numPoints * 3);
{
    const t = v3.create();
    const s = v3.fromValues(MARKER_RADIUS, MARKER_RADIUS, MARKER_RADIUS);
    const q = quat.create();
    const m = mat4.create();
    for (let i = 0; i < numPoints; i++) {
        v3.set(t, points[i * 3], points[i * 3 + 1], points[i * 3 + 2]);
        mat4.fromRotationTranslationScale(m, q, t, s);
        instanceMatrices.set(m, i * 16);
        const onHull = hullVertices.has(i);
        instanceColors[i * 3] = onHull ? 0.3 : 0.5;
        instanceColors[i * 3 + 1] = onHull ? 0.45 : 0.5;
        instanceColors[i * 3 + 2] = onHull ? 1.0 : 0.55;
    }
}

const stride = 16 * 4;
const col0 = g.attribute(instanceMatrices, d.vec4f, { stride, offset: 0, instanced: true });
const col1 = g.attribute(instanceMatrices, d.vec4f, { stride, offset: 16, instanced: true });
const col2 = g.attribute(instanceMatrices, d.vec4f, { stride, offset: 32, instanced: true });
const col3 = g.attribute(instanceMatrices, d.vec4f, { stride, offset: 48, instanced: true });
const instanceTransform = g.mat4(col0, col1, col2, col3);
const instanceColor = g.attribute(instanceColors, d.vec3f, { stride: 12, offset: 0, instanced: true });

const spherePos = g.attribute('position', d.vec3f);
const sphereNormal = g.attribute('normal', d.vec3f);

const sphereWorld = g.mul(instanceTransform, g.vec4(spherePos, g.f32(1)));
const sphereClip = g.mul(g.cameraProjectionMatrix, g.mul(g.cameraViewMatrix, sphereWorld));

// instances carry only uniform scale + translation, so the object-space normal
// is already the world normal.
const vSphereNormal = g.varying(g.normalize(sphereNormal), 'v_snormal');
const vSphereColor = g.varying(instanceColor, 'v_scolor');

const lightDirection = g.vec3(0.6, 1.0, 0.8).normalize();
const sphereDiffuse = g.Var('sphereDiffuse', vSphereNormal.dot(lightDirection).max(g.f32(0)));
const sphereLight = g.Var('sphereLight', g.f32(0.35).add(sphereDiffuse.mul(g.f32(0.75))));
const sphereLit = g.Var('sphereLit', vSphereColor.mul(sphereLight));

const sphereMaterial = new g.Material({
    vertex: sphereClip,
    fragment: g.vec4(sphereLit, g.f32(1)),
});

const pointsMesh = new g.Mesh(sphere, sphereMaterial);
pointsMesh.count = numPoints;
scene.add(pointsMesh);

/* hull — translucent shell coloured by surface normal (the "rainbow") */

// distinct attribute names so the hull's (small, 60-vertex) buffers can't be
// bound during the instanced sphere draw, which shares 'position'/'normal'.
const hullGeometry = new g.Geometry();
hullGeometry.setBuffer('hullPosition', g.createVertexBuffer(d.vec3f, new Float32Array(points)));
hullGeometry.setBuffer('hullNormal', g.createVertexBuffer(d.vec3f, hullNormals));
hullGeometry.setIndex(g.createIndexBuffer(new Uint32Array(hullIndices)));

const hullPos = g.attribute('hullPosition', d.vec3f);
const hullNormal = g.attribute('hullNormal', d.vec3f);

const hullWorld = g.mul(g.modelWorldMatrix, g.vec4(hullPos, g.f32(1)));
const hullClip = g.mul(g.cameraProjectionMatrix, g.mul(g.cameraViewMatrix, hullWorld));
const vHullNormal = g.varying(g.normalize(g.mul(g.modelNormalMatrix, hullNormal)), 'v_hnormal');

// normal (-1..1) → colour (0..1)
const rainbow = g.Var('rainbow', vHullNormal.mul(g.f32(0.5)).add(g.vec3(0.5, 0.5, 0.5)));

const hullMaterial = new g.Material({
    vertex: hullClip,
    fragment: g.vec4(rainbow, g.f32(HULL_OPACITY)),
    transparent: true,
    cullMode: 'back',
    depthWrite: false,
    depthTest: false,
    blend: {
        color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' },
        alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' },
    },
});

const hullMesh = new g.Mesh(hullGeometry, hullMaterial);
scene.add(hullMesh);

scene.updateWorldMatrix();
camera.updateViewMatrix();

/* render loop */

const scenePass = g.pass(scene, camera);
const outputNode = g.renderOutput(scenePass.getTextureNode());
const renderPipeline = new g.RenderPipeline(renderer, outputNode);

function frame() {
    controls.update();
    renderPipeline.render();
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
