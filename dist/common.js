const EPSILON = 0.000001;
/**
 * Symmetric round
 * see https://www.npmjs.com/package/round-half-up-symmetric#user-content-detailed-background
 *
 * @param a value to round
 */
function round(a) {
    if (a >= 0)
        return Math.round(a);
    return a % 0.5 === 0 ? Math.floor(a) : Math.round(a);
}
const DEGREES_TO_RADIANS = Math.PI / 180;
const RADIANS_TO_DEGREES = 180 / Math.PI;
/**
 * Converts Degrees To Radians
 *
 * @param a Angle in Degrees
 */
function degreesToRadians(degrees) {
    return degrees * DEGREES_TO_RADIANS;
}
/**
 * Converts Radians To Degrees
 *
 * @param a Angle in Radians
 */
function radiansToDegrees(radians) {
    return radians * RADIANS_TO_DEGREES;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param a The first number to test.
 * @param b The second number to test.
 * @returns True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b, epsilon = EPSILON) {
    return Math.abs(a - b) <= epsilon * Math.max(1.0, Math.abs(a), Math.abs(b));
}
/**
 * Ease-in-out, goes to -Infinite before 0 and Infinite after 1
 *
 * https://www.desmos.com/calculator/vsnmlaljdu
 *
 * @param t
 * @returns
 */
function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}
/**
 *
 * Returns the result of linearly interpolating between input A and input B by input T.
 *
 * @param v0
 * @param v1
 * @param t
 * @returns
 */
function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}
/**
 * Clamp a value between min and max
 */
const clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
};
/**
 * Remaps a number from one range to another.
 */
function remap(number, inLow, inHigh, outLow, outHigh) {
    const scale = (number - inLow) / (inHigh - inLow);
    return outLow + scale * (outHigh - outLow);
}
/**
 * Remaps a number from one range to another, clamping the result to the output range.
 */
function remapClamp(value, inLow, inHigh, outLow, outHigh) {
    const scale = (value - inLow) / (inHigh - inLow);
    const remapped = outLow + scale * (outHigh - outLow);
    return Math.max(outLow, Math.min(outHigh, remapped));
}

export { EPSILON, clamp, degreesToRadians, equals, fade, lerp, radiansToDegrees, remap, remapClamp, round };
//# sourceMappingURL=common.js.map
