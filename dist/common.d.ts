export declare const EPSILON = 0.000001;
/**
 * Symmetric round
 * see https://www.npmjs.com/package/round-half-up-symmetric#user-content-detailed-background
 *
 * @param a value to round
 */
export declare function round(a: number): number;
/**
 * Converts Degrees To Radians
 *
 * @param a Angle in Degrees
 */
export declare function degreesToRadians(degrees: number): number;
/**
 * Converts Radians To Degrees
 *
 * @param a Angle in Radians
 */
export declare function radiansToDegrees(radians: number): number;
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param a The first number to test.
 * @param b The second number to test.
 * @returns True if the numbers are approximately equal, false otherwise.
 */
export declare function equals(a: number, b: number, epsilon?: number): boolean;
/**
 * Ease-in-out, goes to -Infinite before 0 and Infinite after 1
 *
 * https://www.desmos.com/calculator/vsnmlaljdu
 *
 * @param t
 * @returns
 */
export declare function fade(t: number): number;
/**
 *
 * Returns the result of linearly interpolating between input A and input B by input T.
 *
 * @param v0
 * @param v1
 * @param t
 * @returns
 */
export declare function lerp(v0: number, v1: number, t: number): number;
/**
 * Clamp a value between min and max
 */
export declare const clamp: (value: number, min: number, max: number) => number;
/**
 * Remaps a number from one range to another.
 */
export declare function remap(number: number, inLow: number, inHigh: number, outLow: number, outHigh: number): number;
/**
 * Remaps a number from one range to another, clamping the result to the output range.
 */
export declare function remapClamp(value: number, inLow: number, inHigh: number, outLow: number, outHigh: number): number;
