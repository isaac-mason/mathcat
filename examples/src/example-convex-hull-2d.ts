import * as g from 'gpucat';
import { d } from 'gpucat';
import { quickhull2 } from 'mathcat/geometry';
import { mulberry32 } from 'mathcat/random';
import { rainbowLineColor, rainbowRGB, time } from './common/rainbow';

// A drifting 2D point cloud with its convex hull (mathcat's quickhull2)
// recomputed every frame. As points wander in and out of the boundary the hull
// polygon morphs and points light up when they join it. The outline and the
// hull-vertex markers use the flowing brand rainbow (see common/rainbow).

const POINT_COUNT = 16;

/* ------------------------------------------------------------------ drifters */

// each point = base position + a slow sinusoidal wobble (seeded for determinism)
type Drifter = { bx: number; by: number; ax: number; ay: number; fx: number; fy: number; px: number; py: number };
const rng = mulberry32.create(7);
const drifters: Drifter[] = [];
for (let i = 0; i < POINT_COUNT; i++) {
    const br = Math.sqrt(mulberry32.sample(rng)) * 1.3;
    const ba = mulberry32.sample(rng) * Math.PI * 2;
    drifters.push({
        bx: Math.cos(ba) * br,
        by: Math.sin(ba) * br,
        ax: 0.2 + mulberry32.sample(rng) * 0.45,
        ay: 0.2 + mulberry32.sample(rng) * 0.45,
        fx: 0.25 + mulberry32.sample(rng) * 0.6,
        fy: 0.25 + mulberry32.sample(rng) * 0.6,
        px: mulberry32.sample(rng) * Math.PI * 2,
        py: mulberry32.sample(rng) * Math.PI * 2,
    });
}

/* ------------------------------------------------------------------ renderer */

const renderer = new g.WebGPURenderer({ antialias: true });
await renderer.init();

const canvas = renderer.domElement as HTMLCanvasElement;
document.body.appendChild(canvas);
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new g.Scene();

const camera = new g.PerspectiveCamera(Math.PI / 4, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position[2] = 5.5;
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

/* ------------------------------------------------------------------ objects */

// hull outline (rainbow, closed) — allocated for the worst case (all points on hull)
const hullPoints = new Float32Array(POINT_COUNT * 3);
const hullGeometry = new g.LineGeometry(hullPoints, true, POINT_COUNT);
const hullLine = new g.Line(hullGeometry, new g.LineMaterial({ color: rainbowLineColor(1, 2.5), lineWidth: 3 }));
scene.add(hullLine);

// two shared materials: grey for interior points, rainbow for hull vertices
function unlitMaterial(fragment: g.Node<typeof d.vec4f>): g.Material {
    const pos = g.attribute('position', d.vec3f);
    const world = g.mul(g.modelWorldMatrix, g.vec4(pos, g.f32(1)));
    const clip = g.mul(g.cameraProjectionMatrix, g.mul(g.cameraViewMatrix, world));
    return new g.Material({ vertex: clip, fragment });
}
const greyMaterial = unlitMaterial(g.vec4f(0.42, 0.42, 0.48, 1));

const rainbowPos = g.attribute('position', d.vec3f);
const rainbowWorld = g.mul(g.modelWorldMatrix, g.vec4(rainbowPos, g.f32(1)));
const rainbowClip = g.mul(g.cameraProjectionMatrix, g.mul(g.cameraViewMatrix, rainbowWorld));
const rainbowVWorld = g.varying(rainbowWorld.xyz, 'v_mworld');
const markerMaterial = new g.Material({ vertex: rainbowClip, fragment: g.vec4(rainbowRGB(rainbowVWorld, 2.5), g.f32(1)) });

const dotGeometry = g.createSphereGeometry(0.04, 16, 12);
const markerGeometry = g.createSphereGeometry(0.07, 16, 12);

const pointDots: g.Mesh[] = [];
const hullMarkers: g.Mesh[] = [];
for (let i = 0; i < POINT_COUNT; i++) {
    const dot = new g.Mesh(dotGeometry, greyMaterial);
    scene.add(dot);
    pointDots.push(dot);
    const marker = new g.Mesh(markerGeometry, markerMaterial);
    marker.visible = false;
    scene.add(marker);
    hullMarkers.push(marker);
}

/* ------------------------------------------------------------------ readout */

const readout = document.createElement('div');
readout.style.cssText = 'position:absolute;left:16px;top:14px;color:#cfd8dc;font:13px/1.6 monospace;pointer-events:none;text-shadow:0 1px 2px #000';
document.body.appendChild(readout);

/* ------------------------------------------------------------------ render */

const points: number[] = new Array(POINT_COUNT * 2);

const scenePass = g.pass(scene, camera);
const outputNode = g.fxaa(scenePass.getTextureNode());
const renderPipeline = new g.RenderPipeline(renderer, outputNode);

function frame(tms: number) {
    const t = tms / 1000;
    time.value = t;

    // advance the drifting points
    for (let i = 0; i < POINT_COUNT; i++) {
        const dr = drifters[i];
        const x = dr.bx + dr.ax * Math.sin(t * dr.fx + dr.px);
        const y = dr.by + dr.ay * Math.sin(t * dr.fy + dr.py);
        points[i * 2] = x;
        points[i * 2 + 1] = y;
        pointDots[i].position[0] = x;
        pointDots[i].position[1] = y;
    }

    // mathcat: convex hull, indices in ccw order
    const t0 = performance.now();
    const hull = quickhull2(points);
    const hullMs = performance.now() - t0;

    // hull outline (only the K hull vertices, closed)
    for (let j = 0; j < hull.length; j++) {
        hullPoints[j * 3] = points[hull[j] * 2];
        hullPoints[j * 3 + 1] = points[hull[j] * 2 + 1];
        hullPoints[j * 3 + 2] = 0;
    }
    hullGeometry.update(hullPoints.subarray(0, hull.length * 3), true);

    // rainbow markers on the current hull vertices; hide the rest
    for (let j = 0; j < POINT_COUNT; j++) {
        const marker = hullMarkers[j];
        if (j < hull.length) {
            marker.position[0] = points[hull[j] * 2];
            marker.position[1] = points[hull[j] * 2 + 1];
            marker.visible = true;
        } else {
            marker.visible = false;
        }
    }

    readout.textContent = `points: ${POINT_COUNT}   hull vertices: ${hull.length}   quickhull2: ${hullMs.toFixed(2)}ms`;

    scene.updateWorldMatrix();
    camera.updateViewMatrix();
    controls.update();
    renderPipeline.render();
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
