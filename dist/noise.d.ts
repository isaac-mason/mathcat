export type NoiseGenerator2D = (x: number, y: number) => number;
export type NoiseGenerator3D = (x: number, y: number, z: number) => number;
/**
 * Creates a 2D simplex noise generator with the given seed
 *
 * @param seed The seed value for the noise generator
 * @returns A function that generates 2D simplex noise values
 */
export declare function createSimplex2D(seed: number): NoiseGenerator2D;
/**
 * Creates a 3D simplex noise generator with the given seed
 *
 * @param seed The seed value for the noise generator
 * @returns A function that generates 3D simplex noise values
 */
export declare function createSimplex3D(seed: number): NoiseGenerator3D;
/**
 * Creates a 2D Perlin noise generator with the given seed
 *
 * @param seed The seed value for the noise generator
 * @returns A function that generates 2D Perlin noise values
 */
export declare function createPerlin2D(seed: number): NoiseGenerator2D;
/**
 * Creates a 3D Perlin noise generator with the given seed
 *
 * @param seed The seed value for the noise generator
 * @returns A function that generates 3D Perlin noise values
 */
export declare function createPerlin3D(seed: number): NoiseGenerator3D;
