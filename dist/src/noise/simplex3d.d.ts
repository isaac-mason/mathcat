import { type Permutation } from './permutation.js';
/** A seeded 3D simplex noise generator. Create one with {@link create}. */
export type Simplex3DGenerator = Permutation;
/**
 * Creates a 3D simplex noise generator with the given seed.
 *
 * @param seed The seed value for the noise generator
 * @returns A generator to pass to {@link sample}
 */
export declare function create(seed: number): Simplex3DGenerator;
/**
 * Samples 3D simplex noise, returning a value in the interval [-1, 1].
 *
 * @param generator A generator created with {@link create}
 * @param x X coordinate
 * @param y Y coordinate
 * @param z Z coordinate
 * @returns The noise value at (x, y, z)
 */
export declare function sample({ perm, gradP }: Simplex3DGenerator, x: number, y: number, z: number): number;
