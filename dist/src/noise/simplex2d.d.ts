import { type Permutation } from './permutation.js';
/** A seeded 2D simplex noise generator. Create one with {@link create}. */
export type Simplex2DGenerator = Permutation;
/**
 * Creates a 2D simplex noise generator with the given seed.
 *
 * @param seed The seed value for the noise generator
 * @returns A generator to pass to {@link sample}
 */
export declare function create(seed: number): Simplex2DGenerator;
/**
 * Samples 2D simplex noise, returning a value in the interval [-1, 1].
 *
 * @param generator A generator created with {@link create}
 * @param x X coordinate
 * @param y Y coordinate
 * @returns The noise value at (x, y)
 */
export declare function sample({ perm, gradP }: Simplex2DGenerator, x: number, y: number): number;
