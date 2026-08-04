import type { Vec3 } from '../core/vec3.js';
/**
 * Seeded permutation and gradient tables that back a noise generator.
 *
 * All noise variants (simplex/perlin, 2D/3D) share this same table shape, so
 * each generator type is a structural alias of this.
 */
export type Permutation = {
    perm: number[];
    gradP: Vec3[];
};
export declare const dot2: (grad: Vec3, x: number, y: number) => number;
export declare const dot3: (grad: Vec3, x: number, y: number, z: number) => number;
/**
 * Creates the seeded permutation and gradient tables for a noise generator.
 *
 * @param seed The seed value for the noise generator
 * @returns The permutation tables derived from the seed
 */
export declare function createPermutation(seed: number): Permutation;
