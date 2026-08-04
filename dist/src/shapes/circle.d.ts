import type { Vec2 } from '../core/vec2.js';
/** A circle in 2D space */
export type Circle = {
    center: Vec2;
    radius: number;
};
export declare function create(): Circle;
