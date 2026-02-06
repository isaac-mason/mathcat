import GUI from 'lil-gui';
import type { Circle, Triangle2 } from 'mathcat';
import { circle, circumcircle } from 'mathcat';

function generateRandomTriangle(): Triangle2 {
    const spread = 150;
    return [
        [(Math.random() - 0.5) * spread, (Math.random() - 0.5) * spread],
        [(Math.random() - 0.5) * spread, (Math.random() - 0.5) * spread],
        [(Math.random() - 0.5) * spread, (Math.random() - 0.5) * spread],
    ];
}

const examples = {
    random: generateRandomTriangle,
    equilateral: (): Triangle2 => {
        const size = 100;
        const h = (size * Math.sqrt(3)) / 2;
        return [
            [0, h / 2],
            [-size / 2, -h / 2],
            [size / 2, -h / 2],
        ];
    },
    rightAngle: (): Triangle2 => [
        [-100, -50],
        [100, -50],
        [-100, 100],
    ],
    acute: (): Triangle2 => [
        [0, 80],
        [-60, -40],
        [70, -30],
    ],
    obtuse: (): Triangle2 => [
        [-120, 0],
        [120, 0],
        [20, 40],
    ],
};

let currentTriangle: Triangle2 = examples.random();
const currentCircumcircle: Circle = circle.create();

// settings
const settings = {
    example: 'random',
};

const pointSize = 6;

// pan and zoom state
let panX = 0;
let panY = 0;
let zoom = 1;

// canvas setup
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d')!;

// style
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.fontFamily = 'monospace';
document.body.style.background = '#333';
document.body.style.overflow = 'hidden';
canvas.style.display = 'block';
canvas.style.background = '#333';

// responsive
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// select example function
function selectExample(name: keyof typeof examples) {
    settings.example = name;
    currentTriangle = examples[name]();
    circumcircle(currentCircumcircle, currentTriangle[0], currentTriangle[1], currentTriangle[2]);
    render();
}

// gui setup
const gui = new GUI();
gui.add(settings, 'example', Object.keys(examples))
    .name('Triangle Type')
    .onChange(() => selectExample(settings.example as keyof typeof examples));

const actions = {
    regenerate: () => selectExample(settings.example as keyof typeof examples),
};

gui.add(actions, 'regenerate').name('🔄 Regenerate');

// pan and zoom
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        panX += dx;
        panY += dy;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        render();
    }
});

canvas.addEventListener('mouseup', () => {
    isDragging = false;
});

canvas.addEventListener('mouseleave', () => {
    isDragging = false;
});

canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    zoom *= zoomFactor;
    render();
});

function toScreenSpace(x: number, y: number): [number, number] {
    return [x * zoom + canvas.width / 2 + panX, y * zoom + canvas.height / 2 + panY];
}

// simple canvas rendering
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const tri = currentTriangle;
    const circ = currentCircumcircle;

    // draw circumcircle
    if (circ.radius > 0) {
        const [cx, cy] = toScreenSpace(circ.center[0], circ.center[1]);
        const scaledRadius = circ.radius * zoom;

        ctx.beginPath();
        ctx.arc(cx, cy, scaledRadius, 0, Math.PI * 2);
        ctx.strokeStyle = '#5555ff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = 'rgba(85, 85, 255, 0.1)';
        ctx.fill();

        // draw center point
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#5555ff';
        ctx.fill();
    }

    // draw triangle
    ctx.beginPath();
    const [x0, y0] = toScreenSpace(tri[0][0], tri[0][1]);
    ctx.moveTo(x0, y0);
    for (let i = 1; i < 3; i++) {
        const [x, y] = toScreenSpace(tri[i][0], tri[i][1]);
        ctx.lineTo(x, y);
    }
    ctx.closePath();

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fill();

    // draw triangle vertices
    for (let i = 0; i < 3; i++) {
        const [x, y] = toScreenSpace(tri[i][0], tri[i][1]);

        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();

        // label vertices
        ctx.fillStyle = '#fff';
        ctx.font = '14px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const labels = ['A', 'B', 'C'];
        ctx.fillText(labels[i], x + pointSize + 15, y);
    }

    // stats
    ctx.fillStyle = '#fff';
    ctx.font = '14px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`Center: (${circ.center[0].toFixed(2)}, ${circ.center[1].toFixed(2)})`, 10, 20);
    ctx.fillText(`Radius: ${circ.radius.toFixed(2)}`, 10, 40);
}

selectExample('random');
