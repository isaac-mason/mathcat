import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { f as round$1 } from "./scalar-BGTmo5GO.js";
//#region src/core/vec2.ts
var vec2_exports = /* @__PURE__ */ __exportAll({
	add: () => add,
	addScalar: () => addScalar,
	angle: () => angle,
	ceil: () => ceil,
	clone: () => clone,
	copy: () => copy,
	create: () => create,
	cross: () => cross,
	dist: () => dist,
	distance: () => distance,
	div: () => div,
	divide: () => divide,
	dot: () => dot,
	equals: () => equals,
	exactEquals: () => exactEquals,
	finite: () => finite,
	floor: () => floor,
	fromBuffer: () => fromBuffer,
	fromValues: () => fromValues,
	inverse: () => inverse,
	len: () => len,
	length: () => length,
	lerp: () => lerp,
	max: () => max,
	min: () => min,
	mul: () => mul,
	multiply: () => multiply,
	negate: () => negate,
	normalize: () => normalize,
	rotate: () => rotate,
	round: () => round,
	scale: () => scale,
	scaleAndAdd: () => scaleAndAdd,
	set: () => set,
	sqrDist: () => sqrDist,
	sqrLen: () => sqrLen,
	squaredDistance: () => squaredDistance,
	squaredLength: () => squaredLength,
	str: () => str,
	sub: () => sub,
	subtract: () => subtract,
	subtractScalar: () => subtractScalar,
	toBuffer: () => toBuffer,
	transformMat2: () => transformMat2,
	transformMat2d: () => transformMat2d,
	transformMat3: () => transformMat3,
	transformMat4: () => transformMat4,
	zero: () => zero
});
/**
* Creates a new, empty vec2
*
* @returns a new 2D vector
*/
function create() {
	return [0, 0];
}
/**
* Creates a new vec2 initialized with values from an existing vector
*
* @param a vector to clone
* @returns a new 2D vector
*/
function clone(a) {
	return [a[0], a[1]];
}
/**
* Creates a new vec2 initialized with the given values
*
* @param x X component
* @param y Y component
* @returns a new 2D vector
*/
function fromValues(x, y) {
	return [x, y];
}
/**
* Copy the values from one vec2 to another
*
* @param out the receiving vector
* @param a the source vector
* @returns out
*/
function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	return out;
}
/**
* Set the components of a vec2 to the given values
*
* @param out the receiving vector
* @param x X component
* @param y Y component
* @returns out
*/
function set(out, x, y) {
	out[0] = x;
	out[1] = y;
	return out;
}
/**
* Sets the components of a vec2 from a buffer
* @param out the receiving vector
* @param buffer the source buffer
* @param startIndex the starting index in the buffer
* @returns out
*/
function fromBuffer(out, buffer, startIndex) {
	out[0] = buffer[startIndex];
	out[1] = buffer[startIndex + 1];
	return out;
}
/**
* Writes the components of a vec2 to a buffer
* @param outBuffer The output buffer
* @param vec The source vector
* @param startIndex The starting index in the buffer
* @returns The output buffer
*/
function toBuffer(outBuffer, vec, startIndex) {
	outBuffer[startIndex] = vec[0];
	outBuffer[startIndex + 1] = vec[1];
	return outBuffer;
}
/**
* Adds two vec2's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	return out;
}
/**
* Adds a scalar value to all components of a vec2
*
* @param out the receiving vector
* @param a the source vector
* @param b the scalar value to add
* @returns out
*/
function addScalar(out, a, b) {
	out[0] = a[0] + b;
	out[1] = a[1] + b;
	return out;
}
/**
* Subtracts vector b from vector a
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	return out;
}
/**
* Subtracts a scalar value from all components of a vec2
*
* @param out the receiving vector
* @param a the source vector
* @param b the scalar value to subtract
* @returns out
*/
function subtractScalar(out, a, b) {
	out[0] = a[0] - b;
	out[1] = a[1] - b;
	return out;
}
/**
* Multiplies two vec2's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	return out;
}
/**
* Divides two vec2's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function divide(out, a, b) {
	out[0] = a[0] / b[0];
	out[1] = a[1] / b[1];
	return out;
}
/**
* Math.ceil the components of a vec2
*
* @param out the receiving vector
* @param a vector to ceil
* @returns out
*/
function ceil(out, a) {
	out[0] = Math.ceil(a[0]);
	out[1] = Math.ceil(a[1]);
	return out;
}
/**
* Math.floor the components of a vec2
*
* @param out the receiving vector
* @param a vector to floor
* @returns out
*/
function floor(out, a) {
	out[0] = Math.floor(a[0]);
	out[1] = Math.floor(a[1]);
	return out;
}
/**
* Returns the minimum of two vec2's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function min(out, a, b) {
	out[0] = Math.min(a[0], b[0]);
	out[1] = Math.min(a[1], b[1]);
	return out;
}
/**
* Returns the maximum of two vec2's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function max(out, a, b) {
	out[0] = Math.max(a[0], b[0]);
	out[1] = Math.max(a[1], b[1]);
	return out;
}
/**
* symmetric round the components of a vec2
*
* @param out the receiving vector
* @param a vector to round
* @returns out
*/
function round(out, a) {
	out[0] = round$1(a[0]);
	out[1] = round$1(a[1]);
	return out;
}
/**
* Scales a vec2 by a scalar number
*
* @param out the receiving vector
* @param a the vector to scale
* @param b amount to scale the vector by
* @returns out
*/
function scale(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	return out;
}
/**
* Adds two vec2's after scaling the second operand by a scalar value
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @param scale the amount to scale b by before adding
* @returns out
*/
function scaleAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	return out;
}
/**
* Calculates the euclidian distance between two vec2's
*
* @param a the first operand
* @param b the second operand
* @returns distance between a and b
*/
function distance(a, b) {
	const x = b[0] - a[0];
	const y = b[1] - a[1];
	return Math.sqrt(x * x + y * y);
}
/**
* Calculates the squared euclidian distance between two vec2's
*
* @param a the first operand
* @param b the second operand
* @returns squared distance between a and b
*/
function squaredDistance(a, b) {
	const x = b[0] - a[0];
	const y = b[1] - a[1];
	return x * x + y * y;
}
/**
* Calculates the length of a vec2
*
* @param a vector to calculate length of
* @returns length of a
*/
function length(a) {
	const x = a[0];
	const y = a[1];
	return Math.sqrt(x * x + y * y);
}
/**
* Calculates the squared length of a vec2
*
* @param a vector to calculate squared length of
* @returns squared length of a
*/
function squaredLength(a) {
	const x = a[0];
	const y = a[1];
	return x * x + y * y;
}
/**
* Negates the components of a vec2
*
* @param out the receiving vector
* @param a vector to negate
* @returns out
*/
function negate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	return out;
}
/**
* Returns the inverse of the components of a vec2
*
* @param out the receiving vector
* @param a vector to invert
* @returns out
*/
function inverse(out, a) {
	out[0] = 1 / a[0];
	out[1] = 1 / a[1];
	return out;
}
/**
* Normalize a vec2
*
* @param out the receiving vector
* @param a vector to normalize
* @returns out
*/
function normalize(out, a) {
	const x = a[0];
	const y = a[1];
	let len = x * x + y * y;
	if (len > 0) len = 1 / Math.sqrt(len);
	out[0] = a[0] * len;
	out[1] = a[1] * len;
	return out;
}
/**
* Calculates the dot product of two vec2's
*
* @param a the first operand
* @param b the second operand
* @returns dot product of a and b
*/
function dot(a, b) {
	return a[0] * b[0] + a[1] * b[1];
}
/**
* Computes the cross product of two vec2's
* Note that the cross product must by definition produce a 3D vector
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function cross(out, a, b) {
	const z = a[0] * b[1] - a[1] * b[0];
	out[0] = out[1] = 0;
	out[2] = z;
	return out;
}
/**
* Performs a linear interpolation between two vec2's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
function lerp(out, a, b, t) {
	const ax = a[0];
	const ay = a[1];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	return out;
}
/**
* Transforms the vec2 with a mat2
*
* @param out the receiving vector
* @param a the vector to transform
* @param m matrix to transform with
* @returns out
*/
function transformMat2(out, a, m) {
	const x = a[0];
	const y = a[1];
	out[0] = m[0] * x + m[2] * y;
	out[1] = m[1] * x + m[3] * y;
	return out;
}
/**
* Transforms the vec2 with a mat2d
*
* @param out the receiving vector
* @param a the vector to transform
* @param m matrix to transform with
* @returns out
*/
function transformMat2d(out, a, m) {
	const x = a[0];
	const y = a[1];
	out[0] = m[0] * x + m[2] * y + m[4];
	out[1] = m[1] * x + m[3] * y + m[5];
	return out;
}
/**
* Transforms the vec2 with a mat3
* 3rd vector component is implicitly '1'
*
* @param out the receiving vector
* @param a the vector to transform
* @param m matrix to transform with
* @returns out
*/
function transformMat3(out, a, m) {
	const x = a[0];
	const y = a[1];
	out[0] = m[0] * x + m[3] * y + m[6];
	out[1] = m[1] * x + m[4] * y + m[7];
	return out;
}
/**
* Transforms the vec2 with a mat4
* 3rd vector component is implicitly '0'
* 4th vector component is implicitly '1'
*
* @param out the receiving vector
* @param a the vector to transform
* @param m matrix to transform with
* @returns out
*/
function transformMat4(out, a, m) {
	const x = a[0];
	const y = a[1];
	out[0] = m[0] * x + m[4] * y + m[12];
	out[1] = m[1] * x + m[5] * y + m[13];
	return out;
}
/**
* Rotate a 2D vector
* @param out The receiving vec2
* @param a The vec2 point to rotate
* @param b The origin of the rotation
* @param rad The angle of rotation in radians
* @returns out
*/
function rotate(out, a, b, rad) {
	const p0 = a[0] - b[0];
	const p1 = a[1] - b[1];
	const sinC = Math.sin(rad);
	const cosC = Math.cos(rad);
	out[0] = p0 * cosC - p1 * sinC + b[0];
	out[1] = p0 * sinC + p1 * cosC + b[1];
	return out;
}
/**
* Get the angle between two 2D vectors
* @param a The first operand
* @param b The second operand
* @returns The angle in radians
*/
function angle(a, b) {
	const x1 = a[0];
	const y1 = a[1];
	const x2 = b[0];
	const y2 = b[1];
	const mag = Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2));
	const cosine = mag && (x1 * x2 + y1 * y2) / mag;
	return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
* Set the components of a vec2 to zero
*
* @param out the receiving vector
* @returns out
*/
function zero(out) {
	out[0] = 0;
	out[1] = 0;
	return out;
}
/**
* Returns a string representation of a vector
*
* @param a vector to represent as a string
* @returns string representation of the vector
*/
function str(a) {
	return `vec2(${a[0]}, ${a[1]})`;
}
/**
* Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
*
* @param a The first vector.
* @param b The second vector.
* @returns True if the vectors are equal, false otherwise.
*/
function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1];
}
/**
* Returns whether or not the vectors have approximately the same elements in the same position.
*
* @param a The first vector.
* @param b The second vector.
* @returns True if the vectors are equal, false otherwise.
*/
function equals(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const b0 = b[0];
	const b1 = b[1];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1));
}
/**
* Returns whether or not the vector is finite
* @param a vector to test
* @returns whether or not the vector is finite
*/
function finite(a) {
	return Number.isFinite(a[0]) && Number.isFinite(a[1]);
}
/**
* Alias for {@link length}
*/
const len = length;
/**
* Alias for {@link subtract}
*/
const sub = subtract;
/**
* Alias for {@link multiply}
*/
const mul = multiply;
/**
* Alias for {@link divide}
*/
const div = divide;
/**
* Alias for {@link distance}
*/
const dist = distance;
/**
* Alias for {@link squaredDistance}
*/
const sqrDist = squaredDistance;
/**
* Alias for {@link squaredLength}
*/
const sqrLen = squaredLength;
//#endregion
export { dot as a, vec2_exports as c, distance as i, copy as n, set as o, create as r, subtract as s, add as t };

//# sourceMappingURL=vec2-DrUkSXim.js.map