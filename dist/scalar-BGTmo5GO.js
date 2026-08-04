//#region src/core/scalar.ts
const EPSILON = 1e-6;
/**
* Symmetric round
* see https://www.npmjs.com/package/round-half-up-symmetric#user-content-detailed-background
*
* @param a value to round
*/
function round(a) {
	if (a >= 0) return Math.round(a);
	return a % .5 === 0 ? Math.floor(a) : Math.round(a);
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
	return Math.abs(a - b) <= epsilon * Math.max(1, Math.abs(a), Math.abs(b));
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
* Loops `t` so that it is never larger than `length` and never smaller than 0.
*/
function repeat(t, length) {
	return clamp(t - Math.floor(t / length) * length, 0, length);
}
/**
* Calculates the shortest signed difference between two angles (in radians).
*/
function deltaAngle(current, target) {
	let delta = repeat(target - current, Math.PI * 2);
	if (delta > Math.PI) delta -= Math.PI * 2;
	return delta;
}
/**
* Remaps a number from one range to another.
*/
function remap(number, inLow, inHigh, outLow, outHigh) {
	return outLow + (number - inLow) / (inHigh - inLow) * (outHigh - outLow);
}
/**
* Remaps a number from one range to another, clamping the result to the output range.
*/
function remapClamp(value, inLow, inHigh, outLow, outHigh) {
	const remapped = outLow + (value - inLow) / (inHigh - inLow) * (outHigh - outLow);
	return Math.max(outLow, Math.min(outHigh, remapped));
}
//#endregion
export { equals as a, radiansToDegrees as c, repeat as d, round as f, deltaAngle as i, remap as l, clamp as n, fade as o, degreesToRadians as r, lerp as s, EPSILON as t, remapClamp as u };

//# sourceMappingURL=scalar-BGTmo5GO.js.map