import type { Vec3 } from '../core/vec3.js';
/** A sphere in 3D space */
export type Sphere = {
    center: Vec3;
    radius: number;
};
/**
 * Creates a new sphere with a default center 0,0,0 and radius 1
 * @returns A new sphere.
 */
export declare function create(): Sphere;
