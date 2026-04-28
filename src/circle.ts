import type { Circle } from './types.js';

export function create(): Circle {
    return { center: [0, 0], radius: 0 };
}
