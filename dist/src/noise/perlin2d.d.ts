import { type Permutation } from './permutation.js';
/** A seeded 2D Perlin noise generator. Create one with {@link create}. */
export type Perlin2DGenerator = Permutation;
/**
 * Creates a 2D Perlin noise generator with the given seed.
 *
 * @param seed The seed value for the noise generator
 * @returns A generator to pass to {@link sample}
 */
export declare function create(seed: number): Perlin2DGenerator;
/**
 * Samples 2D Perlin noise.
 *
 * @param generator A generator created with {@link create}
 * @param x X coordinate
 * @param y Y coordinate
 * @returns The noise value at (x, y)
 */
export declare function sample({ perm, gradP }: Perlin2DGenerator, x: number, y: number): number;
