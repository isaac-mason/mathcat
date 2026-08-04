import * as g from 'gpucat';
import { type Vec2, vec2 } from 'mathcat';
import { circumcircle } from 'mathcat/geometry';
import { circle } from 'mathcat/shapes';
import { easing } from 'mathcat/time';
import { rainbowLineColor, time } from './common/rainbow';

// A triangle that morphs between shapes, with its circumcircle (mathcat's
// circumcircle) recomputed every frame. As the triangle flattens toward
// degenerate the circumcircle balloons — watch the circumradius readout. The
// ring is drawn with the flowing brand rainbow (see common/rainbow).

const d = g.d;

/* ------------------------------------------------------------------ shapes */

type Tri = [Vec2, Vec2, Vec2];
const SHAPES: { name: string; tri: Tri }[] = [
    { name: 'equilateral', tri: [[0, 1.15], [-1, -0.58], [1, -0.58]] },
    { name: 'right', tri: [[-1, -0.7], [1, -0.7], [1, 1]] },
    { name: 'obtuse', tri: [[-1.2, -0.35], [1.2, -0.35], [0.35, 0.15]] },
    { name: 'sliver', tri: [[-1.25, -0.12], [1.25, -0.16], [0.1, 0.06]] },
    { name: 'scalene', tri: [[-0.95, -0.75], [1.05, -0.45], [0.05, 1.05]] },
];
const SHAPE_DURATION = 2.6; // seconds per morph

/* ------------------------------------------------------------------ renderer */

const renderer = new g.WebGPURenderer({ antialias: true });
await renderer.init();

const canvas = renderer.domElement as HTMLCanvasElement;
document.body.appendChild(canvas);
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new g.Scene();

const camera = new g.PerspectiveCamera(Math.PI / 4, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position[2] = 6;
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

// morphing triangle outline (neutral) and its circumcircle (rainbow ring)
const triPoints = new Float32Array(9);
const triGeometry = new g.LineGeometry(triPoints, true, 3);
const triangle = new g.Line(triGeometry, new g.LineMaterial({ color: g.vec4f(0.85, 0.88, 0.95, 1), lineWidth: 2 }));
scene.add(triangle);

const CIRCLE_SEGMENTS = 128;
const circlePoints = new Float32Array(CIRCLE_SEGMENTS * 3);
const circleGeometry = new g.LineGeometry(circlePoints, true, CIRCLE_SEGMENTS);
const circleLine = new g.Line(circleGeometry, new g.LineMaterial({ color: rainbowLineColor(1, 2), lineWidth: 3 }));
scene.add(circleLine);

// dots: 3 triangle vertices + the circumcenter
const dotGeometry = g.createSphereGeometry(0.05, 16, 12);
function makeDot(rgb: [number, number, number]): g.Mesh {
    const pos = g.attribute('position', d.vec3f);
    const clip = g.mul(g.cameraProjectionMatrix, g.mul(g.cameraViewMatrix, g.mul(g.modelWorldMatrix, g.vec4(pos, g.f32(1)))));
    const material = new g.Material({ vertex: clip, fragment: g.vec4f(rgb[0], rgb[1], rgb[2], 1) });
    const mesh = new g.Mesh(dotGeometry, material);
    scene.add(mesh);
    return mesh;
}
const vertexDots = [makeDot([0.95, 0.96, 1]), makeDot([0.95, 0.96, 1]), makeDot([0.95, 0.96, 1])];
const centerDot = makeDot([1.0, 0.243, 0.647]);

/* ------------------------------------------------------------------ label */

const label = document.createElement('div');
label.style.cssText = 'position:absolute;top:12px;left:12px;color:#fff;font:13px/1.6 monospace;pointer-events:none;text-shadow:0 1px 2px #000';
document.body.appendChild(label);

/* ------------------------------------------------------------------ render */

const a = vec2.create();
const b = vec2.create();
const c = vec2.create();
const circ = circle.create();

const scenePass = g.pass(scene, camera);
const outputNode = g.renderOutput(scenePass.getTextureNode());
const renderPipeline = new g.RenderPipeline(renderer, outputNode);

function setDot(dot: g.Mesh, x: number, y: number) {
    dot.position[0] = x;
    dot.position[1] = y;
    dot.position[2] = 0;
}

function frame(tms: number) {
    const t = tms / 1000;
    time.value = t;

    // morph between shapes with an eased blend
    const tt = t / SHAPE_DURATION;
    const idx = Math.floor(tt) % SHAPES.length;
    const next = (idx + 1) % SHAPES.length;
    const local = easing.cubicInOut(tt - Math.floor(tt));
    vec2.lerp(a, SHAPES[idx].tri[0], SHAPES[next].tri[0], local);
    vec2.lerp(b, SHAPES[idx].tri[1], SHAPES[next].tri[1], local);
    vec2.lerp(c, SHAPES[idx].tri[2], SHAPES[next].tri[2], local);

    // mathcat: circumcircle of the current triangle
    circumcircle(circ, a, b, c);

    // triangle outline
    triPoints[0] = a[0]; triPoints[1] = a[1];
    triPoints[3] = b[0]; triPoints[4] = b[1];
    triPoints[6] = c[0]; triPoints[7] = c[1];
    triGeometry.update(triPoints, true);

    // circumcircle ring
    for (let i = 0; i < CIRCLE_SEGMENTS; i++) {
        const ang = (i / CIRCLE_SEGMENTS) * Math.PI * 2;
        circlePoints[i * 3] = circ.center[0] + Math.cos(ang) * circ.radius;
        circlePoints[i * 3 + 1] = circ.center[1] + Math.sin(ang) * circ.radius;
    }
    circleGeometry.update(circlePoints, true);

    setDot(vertexDots[0], a[0], a[1]);
    setDot(vertexDots[1], b[0], b[1]);
    setDot(vertexDots[2], c[0], c[1]);
    setDot(centerDot, circ.center[0], circ.center[1]);

    label.textContent = `${SHAPES[idx].name} → ${SHAPES[next].name}\ncircumradius: ${circ.radius.toFixed(2)}`;

    scene.updateWorldMatrix();
    camera.updateViewMatrix();
    controls.update();
    renderPipeline.render();
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
