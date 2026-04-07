import type { Quat, Vec2, Vec3, Vec4 } from './types';
/**
 * Creates a Mulberry32 seeded pseudo-random number generator.
 * Mulberry32 is a simple, fast, and effective PRNG that passes statistical tests
 * and has good distribution properties.
 *
 * @param seed The seed value (32-bit integer)
 * @returns A function that generates random numbers between 0 and 1
 */
export declare function createMulberry32Generator(seed: number): () => number;
/**
 * Generates a random seed value.
 * This is a 32-bit unsigned integer, suitable for use with the Mulberry32 PRNG.
 */
export declare function generateMulberry32Seed(): number;
/**
 * Generates a random integer between min and max (inclusive).
 * @param min the minimum value (inclusive)
 * @param max the maximum value (inclusive)
 * @param randomFloat01 the random float in the range [0, 1) to use for randomness. Defaults to Math.random().
 * @returns A random integer between min and max (inclusive).
 */
export declare function randomInt(min: number, max: number, randomFloat01?: number): number;
/**
 * Generates a random float between min and max.
 * @param min the minimum value (inclusive)
 * @param max the maximum value (inclusive)
 * @param randomFloat01 the random float in the range [0, 1) to use for randomness. Defaults to Math.random().
 * @returns A random float between min and max.
 */
export declare function randomFloat(min: number, max: number, randomFloat01?: number): number;
/**
 * Generates a random boolean with a given chance of being true.
 * @param chance The probability of returning true (between 0 and 1). Defaults to 0.5.
 * @param randomFloat01 the random float in the range [0, 1) to use for randomness. Defaults to Math.random().
 * @returns A boolean value based on the chance.
 */
export declare function randomBool(chance?: number, randomFloat01?: number): boolean;
/**
 * Generates a random sign, either 1 or -1, based on a given chance.
 * @param plusChance The probability of returning 1 (between 0 and 1). Defaults to 0.5.
 * @param randomFloat01 the random float in the range [0, 1) to use for randomness. Defaults to Math.random().
 * @returns A random sign, either 1 or -1.
 */
export declare function randomSign(plusChance?: number, randomFloat01?: number): 1 | -1;
/**
 * Chooses a random item from an array.
 * @param items The array of items to choose from.
 * @param randomFloat01 the random float in the range [0, 1) to use for randomness. Defaults to Math.random().
 * @returns A randomly chosen item from the array.
 * @throws Error if the array is empty.
 */
export declare function randomChoice<T>(items: T[], randomFloat01?: number): T;
/**
 * Generates a random Vec2 with a scale of 1
 *
 * @param out the receiving vector
 * @param randomFn Function to generate random numbers, defaults to Math.random
 * @returns out
 */
export declare function randomVec2(out?: Vec2, randomFn?: () => number): Vec2;
/**
 * Generates a random Vec3 with a scale of 1
 *
 * @param out the receiving vector
 * @param randomFn Function to generate random numbers, defaults to Math.random
 * @returns out
 */
export declare function randomVec3(out?: Vec3, randomFn?: () => number): Vec3;
/**
 * Generates a random Vec4 with a scale of 1
 *
 * @param out the receiving vector
 * @param randomFn Function to generate random numbers, defaults to Math.random
 * @returns out
 */
export declare function randomVec4(out?: Vec4, randomFn?: () => number): Vec4;
/**
 * Generates a random unit quaternion
 *
 * @param out the receiving quaternion
 * @returns out
 */
export declare function randomQuat(out?: Quat, randomFn?: () => number): Quat;
