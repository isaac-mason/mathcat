import { quat, vec3 } from 'mathcat';
import * as THREE from 'three';

// starter example: a cube whose orientation is driven by a mathcat quaternion.

const caption = document.getElementById('caption');
if (caption) caption.textContent = 'mathcat';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 4);

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0x6cf }),
);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 3, 4);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.4));

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// drive the cube's orientation with a mathcat quaternion about a fixed axis
const axis = vec3.normalize(vec3.create(), vec3.fromValues(0.3, 1, 0.15));
const orientation = quat.create();
let angle = 0;

renderer.setAnimationLoop(() => {
    angle += 0.01;
    quat.setAxisAngle(orientation, axis, angle);
    cube.quaternion.set(orientation[0], orientation[1], orientation[2], orientation[3]);
    renderer.render(scene, camera);
});
