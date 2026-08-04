import {
    attribute,
    cameraProjectionMatrix,
    cameraViewMatrix,
    createSphereGeometry,
    d,
    f32,
    Inspector,
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
    WebGLRenderer,
} from 'gpucat';
import { quat } from 'mathcat';

// A lit sphere rendered with gpucat (WebGL2), spun by a mathcat quaternion.
// gpucat's transforms (mesh.quaternion, camera.position, ...) are mathcat
// data structures, so mathcat drives the scene directly.

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
camera.position[2] = 4;
scene.add(camera);

const controls = new OrbitControls(camera, canvas);

renderer.setInspector(new Inspector());

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

/* lit sphere */

const geometry = createSphereGeometry(1, 32, 16);

// vertex
const position = attribute('position', d.vec3f);
const normal = attribute('normal', d.vec3f);

const worldPosition = Var('worldPosition', mul(modelWorldMatrix, vec4(position, f32(1))));
const clipPosition = mul(cameraProjectionMatrix, mul(cameraViewMatrix, worldPosition));

const vWorldNormal = varying(normalize(mul(modelNormalMatrix, normal)), 'vNormal');

// fragment
const lightDirection = vec3(0.6, 1.0, 0.8).normalize();
const ambient = f32(0.15);
const diffuse = Var('diffuse', vWorldNormal.dot(lightDirection).max(f32(0)));
const lighting = Var('lighting', ambient.add(diffuse));

const baseColor = vec3(0.4, 0.7, 1.0);
const litColor = Var('litColor', baseColor.mul(lighting));

const material = new Material({
    vertex: clipPosition,
    fragment: vec4(litColor, f32(1)),
});

const mesh = new Mesh(geometry, material);
scene.add(mesh);

scene.updateWorldMatrix();
camera.updateViewMatrix();

/* render loop */

const scenePass = pass(scene, camera);
const outputNode = renderOutput(scenePass.getTextureNode());
const renderPipeline = new RenderPipeline(renderer, outputNode);

let angle = 0;
let prevTime = performance.now() / 1000;

function frame() {
    const now = performance.now() / 1000;
    const dt = now - prevTime;
    prevTime = now;

    // mathcat: build the mesh's orientation from Euler angles
    angle += dt * 0.6;
    quat.fromEuler(mesh.quaternion, [angle * 0.5, angle, 0, 'xyz']);
    mesh.updateWorldMatrix();

    controls.update();
    renderPipeline.render();
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
