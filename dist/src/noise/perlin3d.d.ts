import { type Permutation } from './permutation.js';
/** A seeded 3D Perlin noise generator. Create one with {@link create}. */
export type Perlin3DGenerator = Permutation;
/**
 * Creates a 3D Perlin noise generator with the given seed.
 *
 * @param seed The seed value for the noise generator
 * @returns A generator to pass to {@link sample}
 */
export declare function create(seed: number): Perlin3DGenerator;
/**
 * Samples 3D Perlin noise.
 *
 * @param generator A generator created with {@link create}
 * @param x X coordinate
 * @param y Y coordinate
 * @param z Z coordinate
 * @returns The noise value at (x, y, z)
 */
export declare function sample({ perm, gradP }: Perlin3DGenerator, x: number, y: number, z: number): number;
