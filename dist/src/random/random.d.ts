import type { Quat } from '../core/quat.js';
import type { Vec2 } from '../core/vec2.js';
import type { Vec3 } from '../core/vec3.js';
import type { Vec4 } from '../core/vec4.js';
/** A function that returns a random number in the range [0, 1). */
export type RandomGenerator = () => number;
/**
 * Returns a random float in the range [min, max).
 * @param random the random generator to use
 * @param min the minimum value (inclusive)
 * @param max the maximum value (exclusive)
 */
export declare function float(random: RandomGenerator, min: number, max: number): number;
/**
 * Returns a random integer in the range [min, max] (inclusive).
 * @param random the random generator to use
 * @param min the minimum value (inclusive)
 * @param max the maximum value (inclusive)
 */
export declare function int(random: RandomGenerator, min: number, max: number): number;
/**
 * Returns a random boolean.
 * @param random the random generator to use
 * @param chance the probability of returning true, in the range [0, 1]. Defaults to 0.5.
 */
export declare function bool(random: RandomGenerator, chance?: number): boolean;
/**
 * Returns a random sign, either 1 or -1.
 * @param random the random generator to use
 * @param plusChance the probability of returning 1, in the range [0, 1]. Defaults to 0.5.
 */
export declare function sign(random: RandomGenerator, plusChance?: number): number;
/**
 * Returns a random item from an array.
 * @param random the random generator to use
 * @param items the array to choose from
 * @throws if the array is empty
 */
export declare function choice<T>(random: RandomGenerator, items: T[]): T;
/**
 * Writes a random unit-length Vec2 into out.
 * @param out the receiving vector
 * @param random the random generator to use
 * @returns out
 */
export declare function vec2(out: Vec2, random: RandomGenerator): Vec2;
/**
 * Writes a random unit-length Vec3 into out.
 * @param out the receiving vector
 * @param random the random generator to use
 * @returns out
 */
export declare function vec3(out: Vec3, random: RandomGenerator): Vec3;
/**
 * Writes a random unit-length Vec4 into out.
 * @param out the receiving vector
 * @param random the random generator to use
 * @returns out
 */
export declare function vec4(out: Vec4, random: RandomGenerator): Vec4;
/**
 * Writes a random unit quaternion into out.
 * @param out the receiving quaternion
 * @param random the random generator to use
 * @returns out
 */
export declare function quat(out: Quat, random: RandomGenerator): Quat;
