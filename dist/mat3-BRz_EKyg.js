import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { f as round$1 } from "./scalar-BGTmo5GO.js";
//#region src/core/vec3.ts
var vec3_exports = /* @__PURE__ */ __exportAll({
	add: () => add$2,
	addScalar: () => addScalar,
	angle: () => angle,
	bezier: () => bezier,
	ceil: () => ceil,
	clone: () => clone$2,
	copy: () => copy$2,
	create: () => create$2,
	cross: () => cross,
	dist: () => dist,
	distance: () => distance,
	div: () => div,
	divide: () => divide,
	dot: () => dot,
	equals: () => equals$2,
	exactEquals: () => exactEquals$2,
	finite: () => finite,
	floor: () => floor,
	fromBuffer: () => fromBuffer,
	fromValues: () => fromValues$2,
	hermite: () => hermite,
	inverse: () => inverse,
	isScaleInsideOut: () => isScaleInsideOut,
	len: () => len,
	length: () => length,
	lerp: () => lerp,
	max: () => max,
	min: () => min,
	mul: () => mul$2,
	multiply: () => multiply$2,
	negate: () => negate,
	normalize: () => normalize,
	perpendicular: () => perpendicular,
	rotateX: () => rotateX$1,
	rotateY: () => rotateY$1,
	rotateZ: () => rotateZ$1,
	round: () => round,
	scale: () => scale$2,
	scaleAndAdd: () => scaleAndAdd,
	set: () => set$2,
	setScalar: () => setScalar,
	slerp: () => slerp,
	sqrDist: () => sqrDist,
	sqrLen: () => sqrLen,
	squaredDistance: () => squaredDistance,
	squaredLength: () => squaredLength,
	str: () => str$2,
	sub: () => sub$2,
	subtract: () => subtract$2,
	subtractScalar: () => subtractScalar,
	toBuffer: () => toBuffer,
	transformMat3: () => transformMat3,
	transformMat4: () => transformMat4,
	transformQuat: () => transformQuat,
	zero: () => zero$2
});
/**
* Creates a new, empty vec3
*
* @returns a new 3D vector
*/
function create$2() {
	return [
		0,
		0,
		0
	];
}
/**
* Creates a new vec3 initialized with values from an existing vector
*
* @param a vector to clone
* @returns a new 3D vector
*/
function clone$2(a) {
	const out = [
		0,
		0,
		0
	];
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	return out;
}
/**
* Calculates the length of a vec3
*
* @param a vector to calculate length of
* @returns length of a
*/
function length(a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	return Math.sqrt(x * x + y * y + z * z);
}
/**
* Creates a new vec3 initialized with the given values
*
* @param x X component
* @param y Y component
* @param z Z component
* @returns a new 3D vector
*/
function fromValues$2(x, y, z) {
	const out = [
		0,
		0,
		0
	];
	out[0] = x;
	out[1] = y;
	out[2] = z;
	return out;
}
/**
* Copy the values from one vec3 to another
*
* @param out the receiving vector
* @param a the source vector
* @returns out
*/
function copy$2(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	return out;
}
/**
* Set the components of a vec3 to the given values
*
* @param out the receiving vector
* @param x X component
* @param y Y component
* @param z Z component
* @returns out
*/
function set$2(out, x, y, z) {
	out[0] = x;
	out[1] = y;
	out[2] = z;
	return out;
}
/**
* Sets all components of a vec3 to the given scalar value
*
* @param out the receiving vector
* @param s scalar value to set
* @returns out
*/
function setScalar(out, s) {
	out[0] = s;
	out[1] = s;
	out[2] = s;
	return out;
}
/**
* Sets the components of a vec3 from a buffer
* @param out the receiving vector
* @param buffer the source buffer
* @param startIndex the starting index in the buffer
* @returns out
*/
function fromBuffer(out, buffer, startIndex) {
	out[0] = buffer[startIndex];
	out[1] = buffer[startIndex + 1];
	out[2] = buffer[startIndex + 2];
	return out;
}
/**
* Writes the components of a vec3 to a buffer
* @param outBuffer The output buffer
* @param vec The source vector
* @param startIndex The starting index in the buffer
* @returns The output buffer
*/
function toBuffer(outBuffer, vec, startIndex) {
	outBuffer[startIndex] = vec[0];
	outBuffer[startIndex + 1] = vec[1];
	outBuffer[startIndex + 2] = vec[2];
	return outBuffer;
}
/**
* Adds two vec3's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function add$2(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	return out;
}
/**
* Adds a scalar value to all components of a vec3
*
* @param out the receiving vector
* @param a the source vector
* @param b the scalar value to add
* @returns out
*/
function addScalar(out, a, b) {
	out[0] = a[0] + b;
	out[1] = a[1] + b;
	out[2] = a[2] + b;
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
function subtract$2(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	return out;
}
/**
* Subtracts a scalar value from all components of a vec3
*
* @param out the receiving vector
* @param a the source vector
* @param b the scalar value to subtract
* @returns out
*/
function subtractScalar(out, a, b) {
	out[0] = a[0] - b;
	out[1] = a[1] - b;
	out[2] = a[2] - b;
	return out;
}
/**
* Multiplies two vec3's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply$2(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	out[2] = a[2] * b[2];
	return out;
}
/**
* Divides two vec3's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function divide(out, a, b) {
	out[0] = a[0] / b[0];
	out[1] = a[1] / b[1];
	out[2] = a[2] / b[2];
	return out;
}
/**
* Math.ceil the components of a vec3
*
* @param out the receiving vector
* @param a vector to ceil
* @returns out
*/
function ceil(out, a) {
	out[0] = Math.ceil(a[0]);
	out[1] = Math.ceil(a[1]);
	out[2] = Math.ceil(a[2]);
	return out;
}
/**
* Math.floor the components of a vec3
*
* @param out the receiving vector
* @param a vector to floor
* @returns out
*/
function floor(out, a) {
	out[0] = Math.floor(a[0]);
	out[1] = Math.floor(a[1]);
	out[2] = Math.floor(a[2]);
	return out;
}
/**
* Returns the minimum of two vec3's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function min(out, a, b) {
	out[0] = Math.min(a[0], b[0]);
	out[1] = Math.min(a[1], b[1]);
	out[2] = Math.min(a[2], b[2]);
	return out;
}
/**
* Returns the maximum of two vec3's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function max(out, a, b) {
	out[0] = Math.max(a[0], b[0]);
	out[1] = Math.max(a[1], b[1]);
	out[2] = Math.max(a[2], b[2]);
	return out;
}
/**
* symmetric round the components of a vec3
*
* @param out the receiving vector
* @param a vector to round
* @returns out
*/
function round(out, a) {
	out[0] = round$1(a[0]);
	out[1] = round$1(a[1]);
	out[2] = round$1(a[2]);
	return out;
}
/**
* Scales a vec3 by a scalar number
*
* @param out the receiving vector
* @param a the vector to scale
* @param b amount to scale the vector by
* @returns out
*/
function scale$2(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	return out;
}
/**
* Adds two vec3's after scaling the second operand by a scalar value
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
	out[2] = a[2] + b[2] * scale;
	return out;
}
/**
* Calculates the euclidian distance between two vec3's
*
* @param a the first operand
* @param b the second operand
* @returns distance between a and b
*/
function distance(a, b) {
	const x = b[0] - a[0];
	const y = b[1] - a[1];
	const z = b[2] - a[2];
	return Math.sqrt(x * x + y * y + z * z);
}
/**
* Calculates the squared euclidian distance between two vec3's
*
* @param a the first operand
* @param b the second operand
* @returns squared distance between a and b
*/
function squaredDistance(a, b) {
	const x = b[0] - a[0];
	const y = b[1] - a[1];
	const z = b[2] - a[2];
	return x * x + y * y + z * z;
}
/**
* Calculates the squared length of a vec3
*
* @param a vector to calculate squared length of
* @returns squared length of a
*/
function squaredLength(a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	return x * x + y * y + z * z;
}
/**
* Negates the components of a vec3
*
* @param out the receiving vector
* @param a vector to negate
* @returns out
*/
function negate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	return out;
}
/**
* Returns the inverse of the components of a vec3
*
* @param out the receiving vector
* @param a vector to invert
* @returns out
*/
function inverse(out, a) {
	out[0] = 1 / a[0];
	out[1] = 1 / a[1];
	out[2] = 1 / a[2];
	return out;
}
/**
* Normalize a vec3
*
* @param out the receiving vector
* @param a vector to normalize
* @returns out
*/
function normalize(out, a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	let len = x * x + y * y + z * z;
	if (len > 0) len = 1 / Math.sqrt(len);
	out[0] = a[0] * len;
	out[1] = a[1] * len;
	out[2] = a[2] * len;
	return out;
}
/**
* Calculates the dot product of two vec3's
*
* @param a the first operand
* @param b the second operand
* @returns dot product of a and b
*/
function dot(a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
* Computes the cross product of two vec3's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function cross(out, a, b) {
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const bx = b[0];
	const by = b[1];
	const bz = b[2];
	out[0] = ay * bz - az * by;
	out[1] = az * bx - ax * bz;
	out[2] = ax * by - ay * bx;
	return out;
}
/**
* Calculates a normalized perpendicular vector to the given vector.
* Useful for finding an arbitrary orthogonal basis vector.
*
* @param out the receiving vector
* @param a the source vector
* @returns the out vector
*/
function perpendicular(out, a) {
	if (Math.abs(a[0]) > Math.abs(a[1])) {
		const invLen = 1 / Math.sqrt(a[0] * a[0] + a[2] * a[2]);
		out[0] = a[2] * invLen;
		out[1] = 0;
		out[2] = -a[0] * invLen;
	} else {
		const invLen = 1 / Math.sqrt(a[1] * a[1] + a[2] * a[2]);
		out[0] = 0;
		out[1] = a[2] * invLen;
		out[2] = -a[1] * invLen;
	}
	return out;
}
/**
* Performs a linear interpolation between two vec3's
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
	const az = a[2];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	out[2] = az + t * (b[2] - az);
	return out;
}
/**
* Performs a spherical linear interpolation between two vec3's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
function slerp(out, a, b, t) {
	const angle = Math.acos(Math.min(Math.max(dot(a, b), -1), 1));
	const sinTotal = Math.sin(angle);
	const ratioA = Math.sin((1 - t) * angle) / sinTotal;
	const ratioB = Math.sin(t * angle) / sinTotal;
	out[0] = ratioA * a[0] + ratioB * b[0];
	out[1] = ratioA * a[1] + ratioB * b[1];
	out[2] = ratioA * a[2] + ratioB * b[2];
	return out;
}
/**
* Performs a hermite interpolation with two control points
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @param c the third operand
* @param d the fourth operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
function hermite(out, a, b, c, d, t) {
	const factorTimes2 = t * t;
	const factor1 = factorTimes2 * (2 * t - 3) + 1;
	const factor2 = factorTimes2 * (t - 2) + t;
	const factor3 = factorTimes2 * (t - 1);
	const factor4 = factorTimes2 * (3 - 2 * t);
	out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	return out;
}
/**
* Performs a bezier interpolation with two control points
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @param c the third operand
* @param d the fourth operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
function bezier(out, a, b, c, d, t) {
	const inverseFactor = 1 - t;
	const inverseFactorTimesTwo = inverseFactor * inverseFactor;
	const factorTimes2 = t * t;
	const factor1 = inverseFactorTimesTwo * inverseFactor;
	const factor2 = 3 * t * inverseFactorTimesTwo;
	const factor3 = 3 * factorTimes2 * inverseFactor;
	const factor4 = factorTimes2 * t;
	out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	return out;
}
/**
* Transforms the vec3 with a mat4.
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
	const z = a[2];
	let w = m[3] * x + m[7] * y + m[11] * z + m[15];
	w = w || 1;
	out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	return out;
}
/**
* Transforms the vec3 with a mat3.
*
* @param out the receiving vector
* @param a the vector to transform
* @param m the 3x3 matrix to transform with
* @returns out
*/
function transformMat3(out, a, m) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	out[0] = x * m[0] + y * m[3] + z * m[6];
	out[1] = x * m[1] + y * m[4] + z * m[7];
	out[2] = x * m[2] + y * m[5] + z * m[8];
	return out;
}
/**
* Transforms the vec3 with a quat
* Can also be used for dual quaternions. (Multiply it with the real part)
*
* @param out the receiving vector
* @param a the vector to transform
* @param q quaternion to transform with
* @returns out
*/
function transformQuat(out, a, q) {
	const qx = q[0];
	const qy = q[1];
	const qz = q[2];
	const qw = q[3];
	const x = a[0];
	const y = a[1];
	const z = a[2];
	let uvx = qy * z - qz * y;
	let uvy = qz * x - qx * z;
	let uvz = qx * y - qy * x;
	let uuvx = qy * uvz - qz * uvy;
	let uuvy = qz * uvx - qx * uvz;
	let uuvz = qx * uvy - qy * uvx;
	const w2 = qw * 2;
	uvx *= w2;
	uvy *= w2;
	uvz *= w2;
	uuvx *= 2;
	uuvy *= 2;
	uuvz *= 2;
	out[0] = x + uvx + uuvx;
	out[1] = y + uvy + uuvy;
	out[2] = z + uvz + uuvz;
	return out;
}
/**
* Rotate a 3D vector around the x-axis
* @param out The receiving vec3
* @param a The vec3 point to rotate
* @param b The origin of the rotation
* @param rad The angle of rotation in radians
* @returns out
*/
function rotateX$1(out, a, b, rad) {
	const p = [];
	const r = [];
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2];
	r[0] = p[0];
	r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
	r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];
	return out;
}
/**
* Rotate a 3D vector around the y-axis
* @param out The receiving vec3
* @param a The vec3 point to rotate
* @param b The origin of the rotation
* @param rad The angle of rotation in radians
* @returns out
*/
function rotateY$1(out, a, b, rad) {
	const p = [];
	const r = [];
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2];
	r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
	r[1] = p[1];
	r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];
	return out;
}
/**
* Rotate a 3D vector around the z-axis
* @param out The receiving vec3
* @param a The vec3 point to rotate
* @param b The origin of the rotation
* @param rad The angle of rotation in radians
* @returns out
*/
function rotateZ$1(out, a, b, rad) {
	const p = [];
	const r = [];
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2];
	r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
	r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
	r[2] = p[2];
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];
	return out;
}
/**
* Get the angle between two 3D vectors
* @param a The first operand
* @param b The second operand
* @returns The angle in radians
*/
function angle(a, b) {
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const bx = b[0];
	const by = b[1];
	const bz = b[2];
	const mag = Math.sqrt((ax * ax + ay * ay + az * az) * (bx * bx + by * by + bz * bz));
	const cosine = mag && dot(a, b) / mag;
	return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
* Set the components of a vec3 to zero
*
* @param out the receiving vector
* @returns out
*/
function zero$2(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	return out;
}
/**
* Returns a string representation of a vector
*
* @param a vector to represent as a string
* @returns string representation of the vector
*/
function str$2(a) {
	return `vec3(${a[0]}, ${a[1]}, ${a[2]})`;
}
/**
* Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
*
* @param a The first vector.
* @param b The second vector.
* @returns True if the vectors are equal, false otherwise.
*/
function exactEquals$2(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
* Returns whether or not the vectors have approximately the same elements in the same position.
*
* @param a The first vector.
* @param b The second vector.
* @returns True if the vectors are equal, false otherwise.
*/
function equals$2(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2));
}
/**
* Returns whether or not the vector is finite
* @param a vector to test
* @returns whether or not the vector is finite
*/
function finite(a) {
	return Number.isFinite(a[0]) && Number.isFinite(a[1]) && Number.isFinite(a[2]);
}
/**
* Determines if a scale vector represents an inside-out transformation (reflection)
* Returns true if an odd number of scale components are negative
*
* @param scale The scale vector to test
* @returns true if the scale represents a reflection (odd number of negative components)
*/
function isScaleInsideOut(scale) {
	const mask = (scale[0] < 0 ? 1 : 0) | (scale[1] < 0 ? 2 : 0) | (scale[2] < 0 ? 4 : 0);
	let count = 0;
	let m = mask;
	while (m) {
		count += m & 1;
		m >>= 1;
	}
	return (count & 1) !== 0;
}
/**
* Alias for {@link subtract}
*/
const sub$2 = subtract$2;
/**
* Alias for {@link multiply}
*/
const mul$2 = multiply$2;
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
* Alias for {@link length}
*/
const len = length;
/**
* Alias for {@link squaredLength}
*/
const sqrLen = squaredLength;
//#endregion
//#region src/core/mat4.ts
var mat4_exports = /* @__PURE__ */ __exportAll({
	add: () => add$1,
	adjoint: () => adjoint$1,
	clone: () => clone$1,
	copy: () => copy$1,
	create: () => create$1,
	crossProductMatrix: () => crossProductMatrix,
	decompose: () => decompose,
	determinant: () => determinant$1,
	equals: () => equals$1,
	exactEquals: () => exactEquals$1,
	frob: () => frob$1,
	fromQuat: () => fromQuat$1,
	fromQuat2: () => fromQuat2,
	fromRotation: () => fromRotation$1,
	fromRotationTranslation: () => fromRotationTranslation,
	fromRotationTranslationScale: () => fromRotationTranslationScale,
	fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
	fromScaling: () => fromScaling$1,
	fromTranslation: () => fromTranslation$1,
	fromValues: () => fromValues$1,
	fromXRotation: () => fromXRotation,
	fromYRotation: () => fromYRotation,
	fromZRotation: () => fromZRotation,
	frustumNO: () => frustumNO,
	frustumZO: () => frustumZO,
	getRotation: () => getRotation,
	getScaling: () => getScaling,
	getTranslation: () => getTranslation,
	identity: () => identity$1,
	invert: () => invert$1,
	invert3x3: () => invert3x3,
	lookAt: () => lookAt,
	mul: () => mul$1,
	multiply: () => multiply$1,
	multiply3x3: () => multiply3x3,
	multiply3x3RightTransposed: () => multiply3x3RightTransposed,
	multiply3x3TransposedVec: () => multiply3x3TransposedVec,
	multiply3x3Vec: () => multiply3x3Vec,
	multiplyScalar: () => multiplyScalar$1,
	multiplyScalarAndAdd: () => multiplyScalarAndAdd$1,
	orthoNO: () => orthoNO,
	orthoZO: () => orthoZO,
	perspectiveFromFieldOfViewNO: () => perspectiveFromFieldOfViewNO,
	perspectiveFromFieldOfViewZO: () => perspectiveFromFieldOfViewZO,
	perspectiveNO: () => perspectiveNO,
	perspectiveZO: () => perspectiveZO,
	rotate: () => rotate$1,
	rotateX: () => rotateX,
	rotateY: () => rotateY,
	rotateZ: () => rotateZ,
	scale: () => scale$1,
	set: () => set$1,
	str: () => str$1,
	sub: () => sub$1,
	subtract: () => subtract$1,
	targetTo: () => targetTo,
	translate: () => translate$1,
	transpose: () => transpose$1,
	zero: () => zero$1
});
/**
* Creates a new identity mat4
*
* @returns a new 4x4 matrix
*/
function create$1() {
	return [
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		1
	];
}
/**
* Creates a new mat4 initialized with values from an existing matrix
*
* @param a matrix to clone
* @returns a new 4x4 matrix
*/
function clone$1(a) {
	const out = create$1();
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	out[9] = a[9];
	out[10] = a[10];
	out[11] = a[11];
	out[12] = a[12];
	out[13] = a[13];
	out[14] = a[14];
	out[15] = a[15];
	return out;
}
/**
* Copy the values from one mat4 to another
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function copy$1(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	out[9] = a[9];
	out[10] = a[10];
	out[11] = a[11];
	out[12] = a[12];
	out[13] = a[13];
	out[14] = a[14];
	out[15] = a[15];
	return out;
}
/**
* Create a new mat4 with the given values
*
* @param m00 Component in column 0, row 0 position (index 0)
* @param m01 Component in column 0, row 1 position (index 1)
* @param m02 Component in column 0, row 2 position (index 2)
* @param m03 Component in column 0, row 3 position (index 3)
* @param m10 Component in column 1, row 0 position (index 4)
* @param m11 Component in column 1, row 1 position (index 5)
* @param m12 Component in column 1, row 2 position (index 6)
* @param m13 Component in column 1, row 3 position (index 7)
* @param m20 Component in column 2, row 0 position (index 8)
* @param m21 Component in column 2, row 1 position (index 9)
* @param m22 Component in column 2, row 2 position (index 10)
* @param m23 Component in column 2, row 3 position (index 11)
* @param m30 Component in column 3, row 0 position (index 12)
* @param m31 Component in column 3, row 1 position (index 13)
* @param m32 Component in column 3, row 2 position (index 14)
* @param m33 Component in column 3, row 3 position (index 15)
* @returns A new mat4
*/
function fromValues$1(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	const out = create$1();
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m03;
	out[4] = m10;
	out[5] = m11;
	out[6] = m12;
	out[7] = m13;
	out[8] = m20;
	out[9] = m21;
	out[10] = m22;
	out[11] = m23;
	out[12] = m30;
	out[13] = m31;
	out[14] = m32;
	out[15] = m33;
	return out;
}
/**
* Set the components of a mat4 to the given values
*
* @param out the receiving matrix
* @param m00 Component in column 0, row 0 position (index 0)
* @param m01 Component in column 0, row 1 position (index 1)
* @param m02 Component in column 0, row 2 position (index 2)
* @param m03 Component in column 0, row 3 position (index 3)
* @param m10 Component in column 1, row 0 position (index 4)
* @param m11 Component in column 1, row 1 position (index 5)
* @param m12 Component in column 1, row 2 position (index 6)
* @param m13 Component in column 1, row 3 position (index 7)
* @param m20 Component in column 2, row 0 position (index 8)
* @param m21 Component in column 2, row 1 position (index 9)
* @param m22 Component in column 2, row 2 position (index 10)
* @param m23 Component in column 2, row 3 position (index 11)
* @param m30 Component in column 3, row 0 position (index 12)
* @param m31 Component in column 3, row 1 position (index 13)
* @param m32 Component in column 3, row 2 position (index 14)
* @param m33 Component in column 3, row 3 position (index 15)
* @returns out
*/
function set$1(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m03;
	out[4] = m10;
	out[5] = m11;
	out[6] = m12;
	out[7] = m13;
	out[8] = m20;
	out[9] = m21;
	out[10] = m22;
	out[11] = m23;
	out[12] = m30;
	out[13] = m31;
	out[14] = m32;
	out[15] = m33;
	return out;
}
/**
* Set a mat4 to the identity matrix
*
* @param out the receiving matrix
* @returns out
*/
function identity$1(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Set a mat4 to the zero matrix
*
* @param out the receiving matrix
* @returns out
*/
function zero$1(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 0;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 0;
	return out;
}
/**
* Transpose the values of a mat4
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function transpose$1(out, a) {
	if (out === a) {
		const a01 = a[1];
		const a02 = a[2];
		const a03 = a[3];
		const a12 = a[6];
		const a13 = a[7];
		const a23 = a[11];
		out[1] = a[4];
		out[2] = a[8];
		out[3] = a[12];
		out[4] = a01;
		out[6] = a[9];
		out[7] = a[13];
		out[8] = a02;
		out[9] = a12;
		out[11] = a[14];
		out[12] = a03;
		out[13] = a13;
		out[14] = a23;
	} else {
		out[0] = a[0];
		out[1] = a[4];
		out[2] = a[8];
		out[3] = a[12];
		out[4] = a[1];
		out[5] = a[5];
		out[6] = a[9];
		out[7] = a[13];
		out[8] = a[2];
		out[9] = a[6];
		out[10] = a[10];
		out[11] = a[14];
		out[12] = a[3];
		out[13] = a[7];
		out[14] = a[11];
		out[15] = a[15];
	}
	return out;
}
/**
* Inverts a mat4
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out, or null if source matrix is not invertible
*/
function invert$1(out, a) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	const a30 = a[12];
	const a31 = a[13];
	const a32 = a[14];
	const a33 = a[15];
	const b00 = a00 * a11 - a01 * a10;
	const b01 = a00 * a12 - a02 * a10;
	const b02 = a00 * a13 - a03 * a10;
	const b03 = a01 * a12 - a02 * a11;
	const b04 = a01 * a13 - a03 * a11;
	const b05 = a02 * a13 - a03 * a12;
	const b06 = a20 * a31 - a21 * a30;
	const b07 = a20 * a32 - a22 * a30;
	const b08 = a20 * a33 - a23 * a30;
	const b09 = a21 * a32 - a22 * a31;
	const b10 = a21 * a33 - a23 * a31;
	const b11 = a22 * a33 - a23 * a32;
	let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) return null;
	det = 1 / det;
	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	return out;
}
/**
* Inverts only the 3x3 rotation part of a mat4.
* Sets the translation column and bottom row to [0, 0, 0, 1].
* Equivalent to Jolt's Mat44::Inversed3x3()
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out, or null if the 3x3 part is not invertible
*/
function invert3x3(out, a) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const b01 = a22 * a11 - a12 * a21;
	const b11 = -a22 * a10 + a12 * a20;
	const b21 = a21 * a10 - a11 * a20;
	let det = a00 * b01 + a01 * b11 + a02 * b21;
	if (!det) return null;
	det = 1 / det;
	out[0] = b01 * det;
	out[1] = (-a22 * a01 + a02 * a21) * det;
	out[2] = (a12 * a01 - a02 * a11) * det;
	out[3] = 0;
	out[4] = b11 * det;
	out[5] = (a22 * a00 - a02 * a20) * det;
	out[6] = (-a12 * a00 + a02 * a10) * det;
	out[7] = 0;
	out[8] = b21 * det;
	out[9] = (-a21 * a00 + a01 * a20) * det;
	out[10] = (a11 * a00 - a01 * a10) * det;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Calculates the adjugate of a mat4
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function adjoint$1(out, a) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	const a30 = a[12];
	const a31 = a[13];
	const a32 = a[14];
	const a33 = a[15];
	const b00 = a00 * a11 - a01 * a10;
	const b01 = a00 * a12 - a02 * a10;
	const b02 = a00 * a13 - a03 * a10;
	const b03 = a01 * a12 - a02 * a11;
	const b04 = a01 * a13 - a03 * a11;
	const b05 = a02 * a13 - a03 * a12;
	const b06 = a20 * a31 - a21 * a30;
	const b07 = a20 * a32 - a22 * a30;
	const b08 = a20 * a33 - a23 * a30;
	const b09 = a21 * a32 - a22 * a31;
	const b10 = a21 * a33 - a23 * a31;
	const b11 = a22 * a33 - a23 * a32;
	out[0] = a11 * b11 - a12 * b10 + a13 * b09;
	out[1] = a02 * b10 - a01 * b11 - a03 * b09;
	out[2] = a31 * b05 - a32 * b04 + a33 * b03;
	out[3] = a22 * b04 - a21 * b05 - a23 * b03;
	out[4] = a12 * b08 - a10 * b11 - a13 * b07;
	out[5] = a00 * b11 - a02 * b08 + a03 * b07;
	out[6] = a32 * b02 - a30 * b05 - a33 * b01;
	out[7] = a20 * b05 - a22 * b02 + a23 * b01;
	out[8] = a10 * b10 - a11 * b08 + a13 * b06;
	out[9] = a01 * b08 - a00 * b10 - a03 * b06;
	out[10] = a30 * b04 - a31 * b02 + a33 * b00;
	out[11] = a21 * b02 - a20 * b04 - a23 * b00;
	out[12] = a11 * b07 - a10 * b09 - a12 * b06;
	out[13] = a00 * b09 - a01 * b07 + a02 * b06;
	out[14] = a31 * b01 - a30 * b03 - a32 * b00;
	out[15] = a20 * b03 - a21 * b01 + a22 * b00;
	return out;
}
/**
* Calculates the determinant of a mat4
*
* @param a the source matrix
* @returns determinant of a
*/
function determinant$1(a) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	const a30 = a[12];
	const a31 = a[13];
	const a32 = a[14];
	const a33 = a[15];
	const b0 = a00 * a11 - a01 * a10;
	const b1 = a00 * a12 - a02 * a10;
	const b2 = a01 * a12 - a02 * a11;
	const b3 = a20 * a31 - a21 * a30;
	const b4 = a20 * a32 - a22 * a30;
	const b5 = a21 * a32 - a22 * a31;
	const b6 = a00 * b5 - a01 * b4 + a02 * b3;
	const b7 = a10 * b5 - a11 * b4 + a12 * b3;
	const b8 = a20 * b2 - a21 * b1 + a22 * b0;
	const b9 = a30 * b2 - a31 * b1 + a32 * b0;
	return a13 * b6 - a03 * b7 + a33 * b8 - a23 * b9;
}
/**
* Multiplies two mat4s
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply$1(out, a, b) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	const a30 = a[12];
	const a31 = a[13];
	const a32 = a[14];
	const a33 = a[15];
	let b0 = b[0];
	let b1 = b[1];
	let b2 = b[2];
	let b3 = b[3];
	out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[4];
	b1 = b[5];
	b2 = b[6];
	b3 = b[7];
	out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[8];
	b1 = b[9];
	b2 = b[10];
	b3 = b[11];
	out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[12];
	b1 = b[13];
	b2 = b[14];
	b3 = b[15];
	out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	return out;
}
/**
* Multiplies two mat4s treating them as 3x3 rotation matrices.
* Only computes the upper-left 3x3 portion, sets the 4th column to [0,0,0,1].
* More efficient than full mat4.multiply when working with pure rotations.
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply3x3(out, a, b) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	let b0 = b[0];
	let b1 = b[1];
	let b2 = b[2];
	out[0] = b0 * a00 + b1 * a10 + b2 * a20;
	out[1] = b0 * a01 + b1 * a11 + b2 * a21;
	out[2] = b0 * a02 + b1 * a12 + b2 * a22;
	out[3] = 0;
	b0 = b[4];
	b1 = b[5];
	b2 = b[6];
	out[4] = b0 * a00 + b1 * a10 + b2 * a20;
	out[5] = b0 * a01 + b1 * a11 + b2 * a21;
	out[6] = b0 * a02 + b1 * a12 + b2 * a22;
	out[7] = 0;
	b0 = b[8];
	b1 = b[9];
	b2 = b[10];
	out[8] = b0 * a00 + b1 * a10 + b2 * a20;
	out[9] = b0 * a01 + b1 * a11 + b2 * a21;
	out[10] = b0 * a02 + b1 * a12 + b2 * a22;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Multiplies a mat4 by the transpose of another mat4,
* treating both as 3x3 rotation matrices.
* Computes: out = a * transpose(b) (3x3 only)
* Sets the 4th column to [0,0,0,1].
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand (will be transposed)
* @returns out
*/
function multiply3x3RightTransposed(out, a, b) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	let bt0 = b[0];
	let bt1 = b[4];
	let bt2 = b[8];
	out[0] = bt0 * a00 + bt1 * a10 + bt2 * a20;
	out[1] = bt0 * a01 + bt1 * a11 + bt2 * a21;
	out[2] = bt0 * a02 + bt1 * a12 + bt2 * a22;
	out[3] = 0;
	bt0 = b[1];
	bt1 = b[5];
	bt2 = b[9];
	out[4] = bt0 * a00 + bt1 * a10 + bt2 * a20;
	out[5] = bt0 * a01 + bt1 * a11 + bt2 * a21;
	out[6] = bt0 * a02 + bt1 * a12 + bt2 * a22;
	out[7] = 0;
	bt0 = b[2];
	bt1 = b[6];
	bt2 = b[10];
	out[8] = bt0 * a00 + bt1 * a10 + bt2 * a20;
	out[9] = bt0 * a01 + bt1 * a11 + bt2 * a21;
	out[10] = bt0 * a02 + bt1 * a12 + bt2 * a22;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Transform a Vec3 by the transpose of the 3x3 rotation part.
*
* @param out the receiving vector
* @param mat the matrix to transform with
* @param vec the vector to transform
* @returns out
*/
function multiply3x3TransposedVec(out, mat, vec) {
	const x = vec[0];
	const y = vec[1];
	const z = vec[2];
	out[0] = mat[0] * x + mat[1] * y + mat[2] * z;
	out[1] = mat[4] * x + mat[5] * y + mat[6] * z;
	out[2] = mat[8] * x + mat[9] * y + mat[10] * z;
	return out;
}
/**
* Transform a Vec3 by only the 3x3 rotation part of a Mat4.
*
* @param out the receiving vector
* @param mat the matrix to transform with
* @param vec the vector to transform
* @returns out
*/
function multiply3x3Vec(out, mat, vec) {
	const x = vec[0];
	const y = vec[1];
	const z = vec[2];
	out[0] = mat[0] * x + mat[4] * y + mat[8] * z;
	out[1] = mat[1] * x + mat[5] * y + mat[9] * z;
	out[2] = mat[2] * x + mat[6] * y + mat[10] * z;
	return out;
}
/**
* Cross product matrix (skew-symmetric matrix).
* Equivalent to Jolt's Mat44::sCrossProduct(Vec3Arg)
*
* @param out the receiving matrix
* @param v the vector to create the cross product matrix from
* @returns out
*/
function crossProductMatrix(out, v) {
	const x = v[0];
	const y = v[1];
	const z = v[2];
	return set$1(out, 0, z, -y, 0, -z, 0, x, 0, y, -x, 0, 0, 0, 0, 0, 1);
}
/**
* Translate a mat4 by the given vector
*
* @param out the receiving matrix
* @param a the matrix to translate
* @param v vector to translate by
* @returns out
*/
function translate$1(out, a, v) {
	const x = v[0];
	const y = v[1];
	const z = v[2];
	let a00;
	let a01;
	let a02;
	let a03;
	let a10;
	let a11;
	let a12;
	let a13;
	let a20;
	let a21;
	let a22;
	let a23;
	if (a === out) {
		out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
		out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
		out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
		out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	} else {
		a00 = a[0];
		a01 = a[1];
		a02 = a[2];
		a03 = a[3];
		a10 = a[4];
		a11 = a[5];
		a12 = a[6];
		a13 = a[7];
		a20 = a[8];
		a21 = a[9];
		a22 = a[10];
		a23 = a[11];
		out[0] = a00;
		out[1] = a01;
		out[2] = a02;
		out[3] = a03;
		out[4] = a10;
		out[5] = a11;
		out[6] = a12;
		out[7] = a13;
		out[8] = a20;
		out[9] = a21;
		out[10] = a22;
		out[11] = a23;
		out[12] = a00 * x + a10 * y + a20 * z + a[12];
		out[13] = a01 * x + a11 * y + a21 * z + a[13];
		out[14] = a02 * x + a12 * y + a22 * z + a[14];
		out[15] = a03 * x + a13 * y + a23 * z + a[15];
	}
	return out;
}
/**
* Scales the mat4 by the dimensions in the given vec3 not using vectorization
*
* @param out the receiving matrix
* @param a the matrix to scale
* @param v the vec3 to scale the matrix by
* @returns out
**/
function scale$1(out, a, v) {
	const x = v[0];
	const y = v[1];
	const z = v[2];
	out[0] = a[0] * x;
	out[1] = a[1] * x;
	out[2] = a[2] * x;
	out[3] = a[3] * x;
	out[4] = a[4] * y;
	out[5] = a[5] * y;
	out[6] = a[6] * y;
	out[7] = a[7] * y;
	out[8] = a[8] * z;
	out[9] = a[9] * z;
	out[10] = a[10] * z;
	out[11] = a[11] * z;
	out[12] = a[12];
	out[13] = a[13];
	out[14] = a[14];
	out[15] = a[15];
	return out;
}
/**
* Rotates a mat4 by the given angle around the given axis
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param rad the angle to rotate the matrix by
* @param axis the axis to rotate around
* @returns out
*/
function rotate$1(out, a, rad, axis) {
	let x = axis[0];
	let y = axis[1];
	let z = axis[2];
	let len = Math.sqrt(x * x + y * y + z * z);
	if (len < 1e-6) return null;
	len = 1 / len;
	x *= len;
	y *= len;
	z *= len;
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	const t = 1 - c;
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	const b00 = x * x * t + c;
	const b01 = y * x * t + z * s;
	const b02 = z * x * t - y * s;
	const b10 = x * y * t - z * s;
	const b11 = y * y * t + c;
	const b12 = z * y * t + x * s;
	const b20 = x * z * t + y * s;
	const b21 = y * z * t - x * s;
	const b22 = z * z * t + c;
	out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	if (a !== out) {
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	}
	return out;
}
/**
* Rotates a matrix by the given angle around the X axis
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param rad the angle to rotate the matrix by
* @returns out
*/
function rotateX(out, a, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	if (a !== out) {
		out[0] = a[0];
		out[1] = a[1];
		out[2] = a[2];
		out[3] = a[3];
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	}
	out[4] = a10 * c + a20 * s;
	out[5] = a11 * c + a21 * s;
	out[6] = a12 * c + a22 * s;
	out[7] = a13 * c + a23 * s;
	out[8] = a20 * c - a10 * s;
	out[9] = a21 * c - a11 * s;
	out[10] = a22 * c - a12 * s;
	out[11] = a23 * c - a13 * s;
	return out;
}
/**
* Rotates a matrix by the given angle around the Y axis
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param rad the angle to rotate the matrix by
* @returns out
*/
function rotateY(out, a, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	if (a !== out) {
		out[4] = a[4];
		out[5] = a[5];
		out[6] = a[6];
		out[7] = a[7];
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	}
	out[0] = a00 * c - a20 * s;
	out[1] = a01 * c - a21 * s;
	out[2] = a02 * c - a22 * s;
	out[3] = a03 * c - a23 * s;
	out[8] = a00 * s + a20 * c;
	out[9] = a01 * s + a21 * c;
	out[10] = a02 * s + a22 * c;
	out[11] = a03 * s + a23 * c;
	return out;
}
/**
* Rotates a matrix by the given angle around the Z axis
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param rad the angle to rotate the matrix by
* @returns out
*/
function rotateZ(out, a, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	if (a !== out) {
		out[8] = a[8];
		out[9] = a[9];
		out[10] = a[10];
		out[11] = a[11];
		out[12] = a[12];
		out[13] = a[13];
		out[14] = a[14];
		out[15] = a[15];
	}
	out[0] = a00 * c + a10 * s;
	out[1] = a01 * c + a11 * s;
	out[2] = a02 * c + a12 * s;
	out[3] = a03 * c + a13 * s;
	out[4] = a10 * c - a00 * s;
	out[5] = a11 * c - a01 * s;
	out[6] = a12 * c - a02 * s;
	out[7] = a13 * c - a03 * s;
	return out;
}
/**
* Creates a matrix from a vector translation
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.translate(dest, dest, vec);
*
* @param out mat4 receiving operation result
* @param v Translation vector
* @returns out
*/
function fromTranslation$1(out, v) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1;
	return out;
}
/**
* Creates a matrix from a vector scaling
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.scale(dest, dest, vec);
*
* @param out mat4 receiving operation result
* @param v Scaling vector
* @returns out
*/
function fromScaling$1(out, v) {
	out[0] = v[0];
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = v[1];
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = v[2];
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Creates a matrix from a given angle around a given axis
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.rotate(dest, dest, rad, axis);
*
* @param out mat4 receiving operation result
* @param rad the angle to rotate the matrix by
* @param axis the axis to rotate around
* @returns out
*/
function fromRotation$1(out, rad, axis) {
	let x = axis[0];
	let y = axis[1];
	let z = axis[2];
	let len = Math.sqrt(x * x + y * y + z * z);
	if (len < 1e-6) return null;
	len = 1 / len;
	x *= len;
	y *= len;
	z *= len;
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	const t = 1 - c;
	out[0] = x * x * t + c;
	out[1] = y * x * t + z * s;
	out[2] = z * x * t - y * s;
	out[3] = 0;
	out[4] = x * y * t - z * s;
	out[5] = y * y * t + c;
	out[6] = z * y * t + x * s;
	out[7] = 0;
	out[8] = x * z * t + y * s;
	out[9] = y * z * t - x * s;
	out[10] = z * z * t + c;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Creates a matrix from the given angle around the X axis
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.rotateX(dest, dest, rad);
*
* @param out mat4 receiving operation result
* @param rad the angle to rotate the matrix by
* @returns out
*/
function fromXRotation(out, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = c;
	out[6] = s;
	out[7] = 0;
	out[8] = 0;
	out[9] = -s;
	out[10] = c;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Creates a matrix from the given angle around the Y axis
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.rotateY(dest, dest, rad);
*
* @param out mat4 receiving operation result
* @param rad the angle to rotate the matrix by
* @returns out
*/
function fromYRotation(out, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = c;
	out[1] = 0;
	out[2] = -s;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = s;
	out[9] = 0;
	out[10] = c;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Creates a matrix from the given angle around the Z axis
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.rotateZ(dest, dest, rad);
*
* @param out mat4 receiving operation result
* @param rad the angle to rotate the matrix by
* @returns out
*/
function fromZRotation(out, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = c;
	out[1] = s;
	out[2] = 0;
	out[3] = 0;
	out[4] = -s;
	out[5] = c;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Creates a matrix from a quaternion rotation and vector translation
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.translate(dest, dest, vec);
*     let quatMat = mat4.create();
*     mat4.fromQuat(quatMat, quat);
*     mat4.multiply(dest, dest, quatMat);
*
* @param out mat4 receiving operation result
* @param q Rotation quaternion
* @param v Translation vector
* @returns out
*/
function fromRotationTranslation(out, q, v) {
	const x = q[0];
	const y = q[1];
	const z = q[2];
	const w = q[3];
	const x2 = x + x;
	const y2 = y + y;
	const z2 = z + z;
	const xx = x * x2;
	const xy = x * y2;
	const xz = x * z2;
	const yy = y * y2;
	const yz = y * z2;
	const zz = z * z2;
	const wx = w * x2;
	const wy = w * y2;
	const wz = w * z2;
	out[0] = 1 - (yy + zz);
	out[1] = xy + wz;
	out[2] = xz - wy;
	out[3] = 0;
	out[4] = xy - wz;
	out[5] = 1 - (xx + zz);
	out[6] = yz + wx;
	out[7] = 0;
	out[8] = xz + wy;
	out[9] = yz - wx;
	out[10] = 1 - (xx + yy);
	out[11] = 0;
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1;
	return out;
}
/**
* Creates a new mat4 from a dual quat.
*
* @param out Matrix
* @param a Dual Quaternion
* @returns mat4 receiving operation result
*/
function fromQuat2(out, a) {
	const translation = [
		0,
		0,
		0
	];
	const bx = -a[0];
	const by = -a[1];
	const bz = -a[2];
	const bw = a[3];
	const ax = a[4];
	const ay = a[5];
	const az = a[6];
	const aw = a[7];
	const magnitude = bx * bx + by * by + bz * bz + bw * bw;
	if (magnitude > 0) {
		translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
		translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
		translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
	} else {
		translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
		translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
		translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
	}
	fromRotationTranslation(out, a, translation);
	return out;
}
/**
* Returns the translation vector component of a transformation
*  matrix. If a matrix is built with fromRotationTranslation,
*  the returned vector will be the same as the translation vector
*  originally supplied.
* @param out Vector to receive translation component
* @param mat Matrix to be decomposed (input)
* @return out
*/
function getTranslation(out, mat) {
	out[0] = mat[12];
	out[1] = mat[13];
	out[2] = mat[14];
	return out;
}
/**
* Returns the scaling factor component of a transformation
*  matrix. If a matrix is built with fromRotationTranslationScale
*  with a normalized Quaternion parameter, the returned vector will be
*  the same as the scaling vector
*  originally supplied.
* @param out Vector to receive scaling factor component
* @param mat Matrix to be decomposed (input)
* @return out
*/
function getScaling(out, mat) {
	const m11 = mat[0];
	const m12 = mat[1];
	const m13 = mat[2];
	const m21 = mat[4];
	const m22 = mat[5];
	const m23 = mat[6];
	const m31 = mat[8];
	const m32 = mat[9];
	const m33 = mat[10];
	out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
	out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
	out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
	return out;
}
/**
* Returns a quaternion representing the rotational component
*  of a transformation matrix. If a matrix is built with
*  fromRotationTranslation, the returned quaternion will be the
*  same as the quaternion originally supplied.
* @param out Quaternion to receive the rotation component
* @param mat Matrix to be decomposed (input)
* @return out
*/
function getRotation(out, mat) {
	const scaling = [
		0,
		0,
		0
	];
	getScaling(scaling, mat);
	const is1 = 1 / scaling[0];
	const is2 = 1 / scaling[1];
	const is3 = 1 / scaling[2];
	const sm11 = mat[0] * is1;
	const sm12 = mat[1] * is2;
	const sm13 = mat[2] * is3;
	const sm21 = mat[4] * is1;
	const sm22 = mat[5] * is2;
	const sm23 = mat[6] * is3;
	const sm31 = mat[8] * is1;
	const sm32 = mat[9] * is2;
	const sm33 = mat[10] * is3;
	const trace = sm11 + sm22 + sm33;
	let S = 0;
	if (trace > 0) {
		S = Math.sqrt(trace + 1) * 2;
		out[3] = .25 * S;
		out[0] = (sm23 - sm32) / S;
		out[1] = (sm31 - sm13) / S;
		out[2] = (sm12 - sm21) / S;
	} else if (sm11 > sm22 && sm11 > sm33) {
		S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
		out[3] = (sm23 - sm32) / S;
		out[0] = .25 * S;
		out[1] = (sm12 + sm21) / S;
		out[2] = (sm31 + sm13) / S;
	} else if (sm22 > sm33) {
		S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
		out[3] = (sm31 - sm13) / S;
		out[0] = (sm12 + sm21) / S;
		out[1] = .25 * S;
		out[2] = (sm23 + sm32) / S;
	} else {
		S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
		out[3] = (sm12 - sm21) / S;
		out[0] = (sm31 + sm13) / S;
		out[1] = (sm23 + sm32) / S;
		out[2] = .25 * S;
	}
	return out;
}
/**
* Decomposes a transformation matrix into its rotation, translation
* and scale components. Returns only the rotation component
* @param out_r Quaternion to receive the rotation component
* @param out_t Vector to receive the translation vector
* @param out_s Vector to receive the scaling factor
* @param mat Matrix to be decomposed (input)
* @returns out_r
*/
function decompose(out_r, out_t, out_s, mat) {
	out_t[0] = mat[12];
	out_t[1] = mat[13];
	out_t[2] = mat[14];
	const m11 = mat[0];
	const m12 = mat[1];
	const m13 = mat[2];
	const m21 = mat[4];
	const m22 = mat[5];
	const m23 = mat[6];
	const m31 = mat[8];
	const m32 = mat[9];
	const m33 = mat[10];
	out_s[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
	out_s[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
	out_s[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
	const is1 = 1 / out_s[0];
	const is2 = 1 / out_s[1];
	const is3 = 1 / out_s[2];
	const sm11 = m11 * is1;
	const sm12 = m12 * is2;
	const sm13 = m13 * is3;
	const sm21 = m21 * is1;
	const sm22 = m22 * is2;
	const sm23 = m23 * is3;
	const sm31 = m31 * is1;
	const sm32 = m32 * is2;
	const sm33 = m33 * is3;
	const trace = sm11 + sm22 + sm33;
	let S = 0;
	if (trace > 0) {
		S = Math.sqrt(trace + 1) * 2;
		out_r[3] = .25 * S;
		out_r[0] = (sm23 - sm32) / S;
		out_r[1] = (sm31 - sm13) / S;
		out_r[2] = (sm12 - sm21) / S;
	} else if (sm11 > sm22 && sm11 > sm33) {
		S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
		out_r[3] = (sm23 - sm32) / S;
		out_r[0] = .25 * S;
		out_r[1] = (sm12 + sm21) / S;
		out_r[2] = (sm31 + sm13) / S;
	} else if (sm22 > sm33) {
		S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
		out_r[3] = (sm31 - sm13) / S;
		out_r[0] = (sm12 + sm21) / S;
		out_r[1] = .25 * S;
		out_r[2] = (sm23 + sm32) / S;
	} else {
		S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
		out_r[3] = (sm12 - sm21) / S;
		out_r[0] = (sm31 + sm13) / S;
		out_r[1] = (sm23 + sm32) / S;
		out_r[2] = .25 * S;
	}
	return out_r;
}
/**
* Creates a matrix from a quaternion rotation, vector translation and vector scale
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.translate(dest, dest, vec);
*     let quatMat = mat4.create();
*     mat4.fromQuat(quatMat, quat);
*     mat4.multiply(dest, dest, quatMat);
*     mat4.scale(dest, dest, scale)
*
* @param out mat4 receiving operation result
* @param q Rotation quaternion
* @param v Translation vector
* @param s Scaling vector
* @returns out
*/
function fromRotationTranslationScale(out, q, v, s) {
	const x = q[0];
	const y = q[1];
	const z = q[2];
	const w = q[3];
	const x2 = x + x;
	const y2 = y + y;
	const z2 = z + z;
	const xx = x * x2;
	const xy = x * y2;
	const xz = x * z2;
	const yy = y * y2;
	const yz = y * z2;
	const zz = z * z2;
	const wx = w * x2;
	const wy = w * y2;
	const wz = w * z2;
	const sx = s[0];
	const sy = s[1];
	const sz = s[2];
	out[0] = (1 - (yy + zz)) * sx;
	out[1] = (xy + wz) * sx;
	out[2] = (xz - wy) * sx;
	out[3] = 0;
	out[4] = (xy - wz) * sy;
	out[5] = (1 - (xx + zz)) * sy;
	out[6] = (yz + wx) * sy;
	out[7] = 0;
	out[8] = (xz + wy) * sz;
	out[9] = (yz - wx) * sz;
	out[10] = (1 - (xx + yy)) * sz;
	out[11] = 0;
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1;
	return out;
}
/**
* Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.translate(dest, dest, vec);
*     mat4.translate(dest, dest, origin);
*     let quatMat = mat4.create();
*     mat4.fromQuat(quatMat, quat);
*     mat4.multiply(dest, dest, quatMat);
*     mat4.scale(dest, dest, scale)
*     mat4.translate(dest, dest, negativeOrigin);
*
* @param out mat4 receiving operation result
* @param q Rotation quaternion
* @param v Translation vector
* @param s Scaling vector
* @param o The origin vector around which to scale and rotate
* @returns out
*/
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
	const x = q[0];
	const y = q[1];
	const z = q[2];
	const w = q[3];
	const x2 = x + x;
	const y2 = y + y;
	const z2 = z + z;
	const xx = x * x2;
	const xy = x * y2;
	const xz = x * z2;
	const yy = y * y2;
	const yz = y * z2;
	const zz = z * z2;
	const wx = w * x2;
	const wy = w * y2;
	const wz = w * z2;
	const sx = s[0];
	const sy = s[1];
	const sz = s[2];
	const ox = o[0];
	const oy = o[1];
	const oz = o[2];
	const out0 = (1 - (yy + zz)) * sx;
	const out1 = (xy + wz) * sx;
	const out2 = (xz - wy) * sx;
	const out4 = (xy - wz) * sy;
	const out5 = (1 - (xx + zz)) * sy;
	const out6 = (yz + wx) * sy;
	const out8 = (xz + wy) * sz;
	const out9 = (yz - wx) * sz;
	const out10 = (1 - (xx + yy)) * sz;
	out[0] = out0;
	out[1] = out1;
	out[2] = out2;
	out[3] = 0;
	out[4] = out4;
	out[5] = out5;
	out[6] = out6;
	out[7] = 0;
	out[8] = out8;
	out[9] = out9;
	out[10] = out10;
	out[11] = 0;
	out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
	out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
	out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
	out[15] = 1;
	return out;
}
/**
* Calculates a 4x4 matrix from the given quaternion
*
* @param out mat4 receiving operation result
* @param q Quaternion to create matrix from
*
* @returns out
*/
function fromQuat$1(out, q) {
	const x = q[0];
	const y = q[1];
	const z = q[2];
	const w = q[3];
	const x2 = x + x;
	const y2 = y + y;
	const z2 = z + z;
	const xx = x * x2;
	const yx = y * x2;
	const yy = y * y2;
	const zx = z * x2;
	const zy = z * y2;
	const zz = z * z2;
	const wx = w * x2;
	const wy = w * y2;
	const wz = w * z2;
	out[0] = 1 - yy - zz;
	out[1] = yx + wz;
	out[2] = zx - wy;
	out[3] = 0;
	out[4] = yx - wz;
	out[5] = 1 - xx - zz;
	out[6] = zy + wx;
	out[7] = 0;
	out[8] = zx + wy;
	out[9] = zy - wx;
	out[10] = 1 - xx - yy;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Generates a frustum matrix with the given bounds.
* The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
* which matches WebGL/OpenGL's clip volume.
*
* @param out mat4 frustum matrix will be written into
* @param left Left bound of the frustum
* @param right Right bound of the frustum
* @param bottom Bottom bound of the frustum
* @param top Top bound of the frustum
* @param near Near bound of the frustum
* @param far Far bound of the frustum
* @returns out
*/
function frustumNO(out, left, right, bottom, top, near, far) {
	const rl = 1 / (right - left);
	const tb = 1 / (top - bottom);
	const nf = 1 / (near - far);
	out[0] = near * 2 * rl;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = near * 2 * tb;
	out[6] = 0;
	out[7] = 0;
	out[8] = (right + left) * rl;
	out[9] = (top + bottom) * tb;
	out[10] = (far + near) * nf;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[14] = far * near * 2 * nf;
	out[15] = 0;
	return out;
}
/**
* Generates a frustum matrix with the given bounds, suitable for WebGPU.
* The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
* which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
*
* @param out mat4 frustum matrix will be written into
* @param left Left bound of the frustum
* @param right Right bound of the frustum
* @param bottom Bottom bound of the frustum
* @param top Top bound of the frustum
* @param near Near bound of the frustum
* @param far Far bound of the frustum
* @returns out
*/
function frustumZO(out, left, right, bottom, top, near, far) {
	const rl = 1 / (right - left);
	const tb = 1 / (top - bottom);
	const nf = 1 / (near - far);
	out[0] = near * 2 * rl;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = near * 2 * tb;
	out[6] = 0;
	out[7] = 0;
	out[8] = (right + left) * rl;
	out[9] = (top + bottom) * tb;
	out[10] = far * nf;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[14] = far * near * nf;
	out[15] = 0;
	return out;
}
/**
* Generates a perspective projection matrix with the given bounds.
* The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
* which matches WebGL/OpenGL's clip volume.
* Passing null/undefined/no value for far will generate infinite projection matrix.
*
* @param out mat4 frustum matrix will be written into
* @param fovy Vertical field of view in radians
* @param aspect Aspect ratio. typically viewport width/height
* @param near Near bound of the frustum
* @param far Far bound of the frustum, can be null or Infinity
* @returns out
*/
function perspectiveNO(out, fovy, aspect, near, far) {
	const f = 1 / Math.tan(fovy / 2);
	out[0] = f / aspect;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = f;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[15] = 0;
	if (far != null && far !== Number.POSITIVE_INFINITY) {
		const nf = 1 / (near - far);
		out[10] = (far + near) * nf;
		out[14] = 2 * far * near * nf;
	} else {
		out[10] = -1;
		out[14] = -2 * near;
	}
	return out;
}
/**
* Generates a perspective projection matrix suitable for WebGPU with the given bounds.
* The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
* which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
* Passing null/undefined/no value for far will generate infinite projection matrix.
*
* @param out mat4 frustum matrix will be written into
* @param fovy Vertical field of view in radians
* @param aspect Aspect ratio. typically viewport width/height
* @param near Near bound of the frustum
* @param far Far bound of the frustum, can be null or Infinity
* @returns out
*/
function perspectiveZO(out, fovy, aspect, near, far) {
	const f = 1 / Math.tan(fovy / 2);
	out[0] = f / aspect;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = f;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[15] = 0;
	if (far != null && far !== Number.POSITIVE_INFINITY) {
		const nf = 1 / (near - far);
		out[10] = far * nf;
		out[14] = far * near * nf;
	} else {
		out[10] = -1;
		out[14] = -near;
	}
	return out;
}
/**
* Generates a perspective projection matrix with the given field of view.
* This is primarily useful for generating projection matrices to be used
* with the still experimental WebVR API.
* The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
* which matches WebGL/OpenGL's clip volume.
*
* @param out mat4 frustum matrix will be written into
* @param fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
* @param near Near bound of the frustum
* @param far Far bound of the frustum
* @returns out
*/
function perspectiveFromFieldOfViewNO(out, fov, near, far) {
	const upTan = Math.tan(fov.upDegrees * Math.PI / 180);
	const downTan = Math.tan(fov.downDegrees * Math.PI / 180);
	const leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
	const rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
	const xScale = 2 / (leftTan + rightTan);
	const yScale = 2 / (upTan + downTan);
	const nf = 1 / (near - far);
	out[0] = xScale;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = yScale;
	out[6] = 0;
	out[7] = 0;
	out[8] = -((leftTan - rightTan) * xScale * .5);
	out[9] = (upTan - downTan) * yScale * .5;
	out[10] = (far + near) * nf;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[14] = 2 * far * near * nf;
	out[15] = 0;
	return out;
}
/**
* Generates a perspective projection matrix with the given field of view, suitable for WebGPU.
* This is primarily useful for generating projection matrices to be used
* with the still experimental WebVR API.
* The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
* which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
*
* @param out mat4 frustum matrix will be written into
* @param fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
* @param near Near bound of the frustum
* @param far Far bound of the frustum
* @returns out
*/
function perspectiveFromFieldOfViewZO(out, fov, near, far) {
	const upTan = Math.tan(fov.upDegrees * Math.PI / 180);
	const downTan = Math.tan(fov.downDegrees * Math.PI / 180);
	const leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
	const rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
	const xScale = 2 / (leftTan + rightTan);
	const yScale = 2 / (upTan + downTan);
	out[0] = xScale;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = yScale;
	out[6] = 0;
	out[7] = 0;
	out[8] = -((leftTan - rightTan) * xScale * .5);
	out[9] = (upTan - downTan) * yScale * .5;
	out[10] = far / (near - far);
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[14] = far * near / (near - far);
	out[15] = 0;
	return out;
}
/**
* Generates a orthogonal projection matrix with the given bounds.
* The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
* which matches WebGL/OpenGL's clip volume.
*
* @param out mat4 frustum matrix will be written into
* @param left Left bound of the frustum
* @param right Right bound of the frustum
* @param bottom Bottom bound of the frustum
* @param top Top bound of the frustum
* @param near Near bound of the frustum
* @param far Far bound of the frustum
* @returns out
*/
function orthoNO(out, left, right, bottom, top, near, far) {
	const lr = 1 / (left - right);
	const bt = 1 / (bottom - top);
	const nf = 1 / (near - far);
	out[0] = -2 * lr;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = -2 * bt;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 2 * nf;
	out[11] = 0;
	out[12] = (left + right) * lr;
	out[13] = (top + bottom) * bt;
	out[14] = (far + near) * nf;
	out[15] = 1;
	return out;
}
/**
* Generates a orthogonal projection matrix with the given bounds.
* The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
* which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
*
* @param out mat4 frustum matrix will be written into
* @param left Left bound of the frustum
* @param right Right bound of the frustum
* @param bottom Bottom bound of the frustum
* @param top Top bound of the frustum
* @param near Near bound of the frustum
* @param far Far bound of the frustum
* @returns out
*/
function orthoZO(out, left, right, bottom, top, near, far) {
	const lr = 1 / (left - right);
	const bt = 1 / (bottom - top);
	const nf = 1 / (near - far);
	out[0] = -2 * lr;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = -2 * bt;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = nf;
	out[11] = 0;
	out[12] = (left + right) * lr;
	out[13] = (top + bottom) * bt;
	out[14] = near * nf;
	out[15] = 1;
	return out;
}
/**
* Generates a look-at matrix with the given eye position, focal point, and up axis.
* If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
*
* @param out mat4 frustum matrix will be written into
* @param eye Position of the viewer
* @param center Point the viewer is looking at
* @param up vec3 pointing up
* @returns out
*/
function lookAt(out, eye, center, up) {
	let x0;
	let x1;
	let x2;
	let y0;
	let y1;
	let y2;
	let z0;
	let z1;
	let z2;
	let len;
	const eyex = eye[0];
	const eyey = eye[1];
	const eyez = eye[2];
	const upx = up[0];
	const upy = up[1];
	const upz = up[2];
	const centerx = center[0];
	const centery = center[1];
	const centerz = center[2];
	if (Math.abs(eyex - centerx) < 1e-6 && Math.abs(eyey - centery) < 1e-6 && Math.abs(eyez - centerz) < 1e-6) return identity$1(out);
	z0 = eyex - centerx;
	z1 = eyey - centery;
	z2 = eyez - centerz;
	len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	z0 *= len;
	z1 *= len;
	z2 *= len;
	x0 = upy * z2 - upz * z1;
	x1 = upz * z0 - upx * z2;
	x2 = upx * z1 - upy * z0;
	len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	if (!len) {
		x0 = 0;
		x1 = 0;
		x2 = 0;
	} else {
		len = 1 / len;
		x0 *= len;
		x1 *= len;
		x2 *= len;
	}
	y0 = z1 * x2 - z2 * x1;
	y1 = z2 * x0 - z0 * x2;
	y2 = z0 * x1 - z1 * x0;
	len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	if (!len) {
		y0 = 0;
		y1 = 0;
		y2 = 0;
	} else {
		len = 1 / len;
		y0 *= len;
		y1 *= len;
		y2 *= len;
	}
	out[0] = x0;
	out[1] = y0;
	out[2] = z0;
	out[3] = 0;
	out[4] = x1;
	out[5] = y1;
	out[6] = z1;
	out[7] = 0;
	out[8] = x2;
	out[9] = y2;
	out[10] = z2;
	out[11] = 0;
	out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	out[15] = 1;
	return out;
}
/**
* Generates a matrix that makes something look at something else.
*
* @param out mat4 frustum matrix will be written into
* @param eye Position of the viewer
* @param target Point the viewer is looking at
* @param up vec3 pointing up
* @returns out
*/
function targetTo(out, eye, target, up) {
	const eyex = eye[0];
	const eyey = eye[1];
	const eyez = eye[2];
	const upx = up[0];
	const upy = up[1];
	const upz = up[2];
	let z0 = eyex - target[0];
	let z1 = eyey - target[1];
	let z2 = eyez - target[2];
	let len = z0 * z0 + z1 * z1 + z2 * z2;
	if (len > 0) {
		len = 1 / Math.sqrt(len);
		z0 *= len;
		z1 *= len;
		z2 *= len;
	}
	let x0 = upy * z2 - upz * z1;
	let x1 = upz * z0 - upx * z2;
	let x2 = upx * z1 - upy * z0;
	len = x0 * x0 + x1 * x1 + x2 * x2;
	if (len > 0) {
		len = 1 / Math.sqrt(len);
		x0 *= len;
		x1 *= len;
		x2 *= len;
	}
	out[0] = x0;
	out[1] = x1;
	out[2] = x2;
	out[3] = 0;
	out[4] = z1 * x2 - z2 * x1;
	out[5] = z2 * x0 - z0 * x2;
	out[6] = z0 * x1 - z1 * x0;
	out[7] = 0;
	out[8] = z0;
	out[9] = z1;
	out[10] = z2;
	out[11] = 0;
	out[12] = eyex;
	out[13] = eyey;
	out[14] = eyez;
	out[15] = 1;
	return out;
}
/**
* Returns a string representation of a mat4
*
* @param a matrix to represent as a string
* @returns {String} string representation of the matrix
*/
function str$1(a) {
	return `mat4(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}, ${a[4]}, ${a[5]}, ${a[6]}, ${a[7]}, ${a[8]}, ${a[9]}, ${a[10]}, ${a[11]}, ${a[12]}, ${a[13]}, ${a[14]}, ${a[15]})`;
}
/**
* Returns Frobenius norm of a mat4
*
* @param a the matrix to calculate Frobenius norm of
* @returns Frobenius norm
*/
function frob$1(a) {
	return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + a[6] * a[6] + a[7] * a[7] + a[8] * a[8] + a[9] * a[9] + a[10] * a[10] + a[11] * a[11] + a[12] * a[12] + a[13] * a[13] + a[14] * a[14] + a[15] * a[15]);
}
/**
* Adds two mat4's
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function add$1(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	out[4] = a[4] + b[4];
	out[5] = a[5] + b[5];
	out[6] = a[6] + b[6];
	out[7] = a[7] + b[7];
	out[8] = a[8] + b[8];
	out[9] = a[9] + b[9];
	out[10] = a[10] + b[10];
	out[11] = a[11] + b[11];
	out[12] = a[12] + b[12];
	out[13] = a[13] + b[13];
	out[14] = a[14] + b[14];
	out[15] = a[15] + b[15];
	return out;
}
/**
* Subtracts matrix b from matrix a
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function subtract$1(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	out[3] = a[3] - b[3];
	out[4] = a[4] - b[4];
	out[5] = a[5] - b[5];
	out[6] = a[6] - b[6];
	out[7] = a[7] - b[7];
	out[8] = a[8] - b[8];
	out[9] = a[9] - b[9];
	out[10] = a[10] - b[10];
	out[11] = a[11] - b[11];
	out[12] = a[12] - b[12];
	out[13] = a[13] - b[13];
	out[14] = a[14] - b[14];
	out[15] = a[15] - b[15];
	return out;
}
/**
* Multiply each element of the matrix by a scalar.
*
* @param out the receiving matrix
* @param a the matrix to scale
* @param b amount to scale the matrix's elements by
* @returns out
*/
function multiplyScalar$1(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	out[4] = a[4] * b;
	out[5] = a[5] * b;
	out[6] = a[6] * b;
	out[7] = a[7] * b;
	out[8] = a[8] * b;
	out[9] = a[9] * b;
	out[10] = a[10] * b;
	out[11] = a[11] * b;
	out[12] = a[12] * b;
	out[13] = a[13] * b;
	out[14] = a[14] * b;
	out[15] = a[15] * b;
	return out;
}
/**
* Adds two mat4's after multiplying each element of the second operand by a scalar value.
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @param scale the amount to scale b's elements by before adding
* @returns out
*/
function multiplyScalarAndAdd$1(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	out[2] = a[2] + b[2] * scale;
	out[3] = a[3] + b[3] * scale;
	out[4] = a[4] + b[4] * scale;
	out[5] = a[5] + b[5] * scale;
	out[6] = a[6] + b[6] * scale;
	out[7] = a[7] + b[7] * scale;
	out[8] = a[8] + b[8] * scale;
	out[9] = a[9] + b[9] * scale;
	out[10] = a[10] + b[10] * scale;
	out[11] = a[11] + b[11] * scale;
	out[12] = a[12] + b[12] * scale;
	out[13] = a[13] + b[13] * scale;
	out[14] = a[14] + b[14] * scale;
	out[15] = a[15] + b[15] * scale;
	return out;
}
/**
* Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
*
* @param a The first matrix.
* @param b The second matrix.
* @returns {Boolean} True if the matrices are equal, false otherwise.
*/
function exactEquals$1(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
* Returns whether or not the matrices have approximately the same elements in the same position.
*
* @param a The first matrix.
* @param b The second matrix.
* @returns {Boolean} True if the matrices are equal, false otherwise.
*/
function equals$1(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const a6 = a[6];
	const a7 = a[7];
	const a8 = a[8];
	const a9 = a[9];
	const a10 = a[10];
	const a11 = a[11];
	const a12 = a[12];
	const a13 = a[13];
	const a14 = a[14];
	const a15 = a[15];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	const b4 = b[4];
	const b5 = b[5];
	const b6 = b[6];
	const b7 = b[7];
	const b8 = b[8];
	const b9 = b[9];
	const b10 = b[10];
	const b11 = b[11];
	const b12 = b[12];
	const b13 = b[13];
	const b14 = b[14];
	const b15 = b[15];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= 1e-6 * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= 1e-6 * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= 1e-6 * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= 1e-6 * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= 1e-6 * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= 1e-6 * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= 1e-6 * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= 1e-6 * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= 1e-6 * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= 1e-6 * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= 1e-6 * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= 1e-6 * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= 1e-6 * Math.max(1, Math.abs(a15), Math.abs(b15));
}
/**
* Alias for {@link mat4.multiply}
* @function
*/
const mul$1 = multiply$1;
/**
* Alias for {@link mat4.subtract}
* @function
*/
const sub$1 = subtract$1;
//#endregion
//#region src/core/mat3.ts
var mat3_exports = /* @__PURE__ */ __exportAll({
	add: () => add,
	adjoint: () => adjoint,
	clone: () => clone,
	copy: () => copy,
	create: () => create,
	determinant: () => determinant,
	equals: () => equals,
	exactEquals: () => exactEquals,
	frob: () => frob,
	fromMat2d: () => fromMat2d,
	fromMat4: () => fromMat4,
	fromQuat: () => fromQuat,
	fromRotation: () => fromRotation,
	fromScaling: () => fromScaling,
	fromTranslation: () => fromTranslation,
	fromValues: () => fromValues,
	identity: () => identity,
	invert: () => invert,
	mul: () => mul,
	multiply: () => multiply,
	multiplyScalar: () => multiplyScalar,
	multiplyScalarAndAdd: () => multiplyScalarAndAdd,
	normalFromMat4: () => normalFromMat4,
	projection: () => projection,
	rotate: () => rotate,
	scale: () => scale,
	set: () => set,
	str: () => str,
	sub: () => sub,
	subtract: () => subtract,
	translate: () => translate,
	transpose: () => transpose,
	zero: () => zero
});
/**
* Creates a new identity mat3
*
* @returns a new 3x3 matrix
*/
function create() {
	return [
		1,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		1
	];
}
/**
* Copies the upper-left 3x3 values into the given mat3.
*
* @param out the receiving 3x3 matrix
* @param a   the source 4x4 matrix
* @returns out
*/
function fromMat4(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[4];
	out[4] = a[5];
	out[5] = a[6];
	out[6] = a[8];
	out[7] = a[9];
	out[8] = a[10];
	return out;
}
/**
* Creates a new mat3 initialized with values from an existing matrix
*
* @param a matrix to clone
* @returns a new 3x3 matrix
*/
function clone(a) {
	const out = create();
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	return out;
}
/**
* Copy the values from one mat3 to another
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	return out;
}
/**
* Create a new mat3 with the given values
*
* @param m00 Component in column 0, row 0 position (index 0)
* @param m01 Component in column 0, row 1 position (index 1)
* @param m02 Component in column 0, row 2 position (index 2)
* @param m10 Component in column 1, row 0 position (index 3)
* @param m11 Component in column 1, row 1 position (index 4)
* @param m12 Component in column 1, row 2 position (index 5)
* @param m20 Component in column 2, row 0 position (index 6)
* @param m21 Component in column 2, row 1 position (index 7)
* @param m22 Component in column 2, row 2 position (index 8)
* @returns A new mat3
*/
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	const out = create();
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m10;
	out[4] = m11;
	out[5] = m12;
	out[6] = m20;
	out[7] = m21;
	out[8] = m22;
	return out;
}
/**
* Set the components of a mat3 to the given values
*
* @param out the receiving matrix
* @param m00 Component in column 0, row 0 position (index 0)
* @param m01 Component in column 0, row 1 position (index 1)
* @param m02 Component in column 0, row 2 position (index 2)
* @param m10 Component in column 1, row 0 position (index 3)
* @param m11 Component in column 1, row 1 position (index 4)
* @param m12 Component in column 1, row 2 position (index 5)
* @param m20 Component in column 2, row 0 position (index 6)
* @param m21 Component in column 2, row 1 position (index 7)
* @param m22 Component in column 2, row 2 position (index 8)
* @returns out
*/
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m10;
	out[4] = m11;
	out[5] = m12;
	out[6] = m20;
	out[7] = m21;
	out[8] = m22;
	return out;
}
/**
* Set a mat3 to the identity matrix
*
* @param out the receiving matrix
* @returns out
*/
function identity(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 1;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 1;
	return out;
}
/**
* Set a mat3 to the zero matrix
*
* @param out the receiving matrix
* @returns out
*/
function zero(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	return out;
}
/**
* Transpose the values of a mat3
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function transpose(out, a) {
	if (out === a) {
		const a01 = a[1];
		const a02 = a[2];
		const a12 = a[5];
		out[1] = a[3];
		out[2] = a[6];
		out[3] = a01;
		out[5] = a[7];
		out[6] = a02;
		out[7] = a12;
	} else {
		out[0] = a[0];
		out[1] = a[3];
		out[2] = a[6];
		out[3] = a[1];
		out[4] = a[4];
		out[5] = a[7];
		out[6] = a[2];
		out[7] = a[5];
		out[8] = a[8];
	}
	return out;
}
/**
* Inverts a mat3
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function invert(out, a) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[3];
	const a11 = a[4];
	const a12 = a[5];
	const a20 = a[6];
	const a21 = a[7];
	const a22 = a[8];
	const b01 = a22 * a11 - a12 * a21;
	const b11 = -a22 * a10 + a12 * a20;
	const b21 = a21 * a10 - a11 * a20;
	let det = a00 * b01 + a01 * b11 + a02 * b21;
	if (!det) return null;
	det = 1 / det;
	out[0] = b01 * det;
	out[1] = (-a22 * a01 + a02 * a21) * det;
	out[2] = (a12 * a01 - a02 * a11) * det;
	out[3] = b11 * det;
	out[4] = (a22 * a00 - a02 * a20) * det;
	out[5] = (-a12 * a00 + a02 * a10) * det;
	out[6] = b21 * det;
	out[7] = (-a21 * a00 + a01 * a20) * det;
	out[8] = (a11 * a00 - a01 * a10) * det;
	return out;
}
/**
* Calculates the adjugate of a mat3
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function adjoint(out, a) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[3];
	const a11 = a[4];
	const a12 = a[5];
	const a20 = a[6];
	const a21 = a[7];
	const a22 = a[8];
	out[0] = a11 * a22 - a12 * a21;
	out[1] = a02 * a21 - a01 * a22;
	out[2] = a01 * a12 - a02 * a11;
	out[3] = a12 * a20 - a10 * a22;
	out[4] = a00 * a22 - a02 * a20;
	out[5] = a02 * a10 - a00 * a12;
	out[6] = a10 * a21 - a11 * a20;
	out[7] = a01 * a20 - a00 * a21;
	out[8] = a00 * a11 - a01 * a10;
	return out;
}
/**
* Calculates the determinant of a mat3
*
* @param a the source matrix
* @returns determinant of a
*/
function determinant(a) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[3];
	const a11 = a[4];
	const a12 = a[5];
	const a20 = a[6];
	const a21 = a[7];
	const a22 = a[8];
	return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
* Multiplies two mat3's
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply(out, a, b) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[3];
	const a11 = a[4];
	const a12 = a[5];
	const a20 = a[6];
	const a21 = a[7];
	const a22 = a[8];
	const b00 = b[0];
	const b01 = b[1];
	const b02 = b[2];
	const b10 = b[3];
	const b11 = b[4];
	const b12 = b[5];
	const b20 = b[6];
	const b21 = b[7];
	const b22 = b[8];
	out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	out[2] = b00 * a02 + b01 * a12 + b02 * a22;
	out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	out[5] = b10 * a02 + b11 * a12 + b12 * a22;
	out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	return out;
}
/**
* Translate a mat3 by the given vector
*
* @param out the receiving matrix
* @param a the matrix to translate
* @param v vector to translate by
* @returns out
*/
function translate(out, a, v) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[3];
	const a11 = a[4];
	const a12 = a[5];
	const a20 = a[6];
	const a21 = a[7];
	const a22 = a[8];
	const x = v[0];
	const y = v[1];
	out[0] = a00;
	out[1] = a01;
	out[2] = a02;
	out[3] = a10;
	out[4] = a11;
	out[5] = a12;
	out[6] = x * a00 + y * a10 + a20;
	out[7] = x * a01 + y * a11 + a21;
	out[8] = x * a02 + y * a12 + a22;
	return out;
}
/**
* Rotates a mat3 by the given angle
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param rad the angle to rotate the matrix by
* @returns out
*/
function rotate(out, a, rad) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a10 = a[3];
	const a11 = a[4];
	const a12 = a[5];
	const a20 = a[6];
	const a21 = a[7];
	const a22 = a[8];
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = c * a00 + s * a10;
	out[1] = c * a01 + s * a11;
	out[2] = c * a02 + s * a12;
	out[3] = c * a10 - s * a00;
	out[4] = c * a11 - s * a01;
	out[5] = c * a12 - s * a02;
	out[6] = a20;
	out[7] = a21;
	out[8] = a22;
	return out;
}
/**
* Scales the mat3 by the dimensions in the given vec2
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param v the vec2 to scale the matrix by
* @returns out
**/
function scale(out, a, v) {
	const x = v[0];
	const y = v[1];
	out[0] = x * a[0];
	out[1] = x * a[1];
	out[2] = x * a[2];
	out[3] = y * a[3];
	out[4] = y * a[4];
	out[5] = y * a[5];
	out[6] = a[6];
	out[7] = a[7];
	out[8] = a[8];
	return out;
}
/**
* Creates a matrix from a vector translation
* This is equivalent to (but much faster than):
*
*     mat3.identity(dest);
*     mat3.translate(dest, dest, vec);
*
* @param out mat3 receiving operation result
* @param v Translation vector
* @returns out
*/
function fromTranslation(out, v) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 1;
	out[5] = 0;
	out[6] = v[0];
	out[7] = v[1];
	out[8] = 1;
	return out;
}
/**
* Creates a matrix from a given angle
* This is equivalent to (but much faster than):
*
*     mat3.identity(dest);
*     mat3.rotate(dest, dest, rad);
*
* @param out mat3 receiving operation result
* @param rad the angle to rotate the matrix by
* @returns out
*/
function fromRotation(out, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = c;
	out[1] = s;
	out[2] = 0;
	out[3] = -s;
	out[4] = c;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 1;
	return out;
}
/**
* Creates a matrix from a vector scaling
* This is equivalent to (but much faster than):
*
*     mat3.identity(dest);
*     mat3.scale(dest, dest, vec);
*
* @param out mat3 receiving operation result
* @param v Scaling vector
* @returns out
*/
function fromScaling(out, v) {
	out[0] = v[0];
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = v[1];
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	out[8] = 1;
	return out;
}
/**
* Copies the values from a mat2d into a mat3
*
* @param out the receiving matrix
* @param a the matrix to copy
* @returns out
**/
function fromMat2d(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = 0;
	out[3] = a[2];
	out[4] = a[3];
	out[5] = 0;
	out[6] = a[4];
	out[7] = a[5];
	out[8] = 1;
	return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param out mat3 receiving operation result
* @param q Quaternion to create matrix from
*
* @returns out
*/
function fromQuat(out, q) {
	const x = q[0];
	const y = q[1];
	const z = q[2];
	const w = q[3];
	const x2 = x + x;
	const y2 = y + y;
	const z2 = z + z;
	const xx = x * x2;
	const yx = y * x2;
	const yy = y * y2;
	const zx = z * x2;
	const zy = z * y2;
	const zz = z * z2;
	const wx = w * x2;
	const wy = w * y2;
	const wz = w * z2;
	out[0] = 1 - yy - zz;
	out[3] = yx - wz;
	out[6] = zx + wy;
	out[1] = yx + wz;
	out[4] = 1 - xx - zz;
	out[7] = zy - wx;
	out[2] = zx - wy;
	out[5] = zy + wx;
	out[8] = 1 - xx - yy;
	return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param out mat3 receiving operation result
* @param a Mat4 to derive the normal matrix from
*
* @returns out
*/
function normalFromMat4(out, a) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	const a30 = a[12];
	const a31 = a[13];
	const a32 = a[14];
	const a33 = a[15];
	const b00 = a00 * a11 - a01 * a10;
	const b01 = a00 * a12 - a02 * a10;
	const b02 = a00 * a13 - a03 * a10;
	const b03 = a01 * a12 - a02 * a11;
	const b04 = a01 * a13 - a03 * a11;
	const b05 = a02 * a13 - a03 * a12;
	const b06 = a20 * a31 - a21 * a30;
	const b07 = a20 * a32 - a22 * a30;
	const b08 = a20 * a33 - a23 * a30;
	const b09 = a21 * a32 - a22 * a31;
	const b10 = a21 * a33 - a23 * a31;
	const b11 = a22 * a33 - a23 * a32;
	let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) return null;
	det = 1 / det;
	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	return out;
}
/**
* Generates a 2D projection matrix with the given bounds
*
* @param out mat3 frustum matrix will be written into
* @param width Width of your gl context
* @param height Height of gl context
* @returns out
*/
function projection(out, width, height) {
	out[0] = 2 / width;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = -2 / height;
	out[5] = 0;
	out[6] = -1;
	out[7] = 1;
	out[8] = 1;
	return out;
}
/**
* Returns a string representation of a mat3
*
* @param a matrix to represent as a string
* @returns string representation of the matrix
*/
function str(a) {
	return `mat3(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}, ${a[4]}, ${a[5]}, ${a[6]}, ${a[7]}, ${a[8]})`;
}
/**
* Returns Frobenius norm of a mat3
*
* @param a the matrix to calculate Frobenius norm of
* @returns Frobenius norm
*/
function frob(a) {
	return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + a[6] * a[6] + a[7] * a[7] + a[8] * a[8]);
}
/**
* Adds two mat3's
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	out[4] = a[4] + b[4];
	out[5] = a[5] + b[5];
	out[6] = a[6] + b[6];
	out[7] = a[7] + b[7];
	out[8] = a[8] + b[8];
	return out;
}
/**
* Subtracts matrix b from matrix a
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	out[3] = a[3] - b[3];
	out[4] = a[4] - b[4];
	out[5] = a[5] - b[5];
	out[6] = a[6] - b[6];
	out[7] = a[7] - b[7];
	out[8] = a[8] - b[8];
	return out;
}
/**
* Multiply each element of the matrix by a scalar.
*
* @param out the receiving matrix
* @param a the matrix to scale
* @param b amount to scale the matrix's elements by
* @returns out
*/
function multiplyScalar(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	out[4] = a[4] * b;
	out[5] = a[5] * b;
	out[6] = a[6] * b;
	out[7] = a[7] * b;
	out[8] = a[8] * b;
	return out;
}
/**
* Adds two mat3's after multiplying each element of the second operand by a scalar value.
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @param scale the amount to scale b's elements by before adding
* @returns out
*/
function multiplyScalarAndAdd(out, a, b, scale) {
	out[0] = a[0] + b[0] * scale;
	out[1] = a[1] + b[1] * scale;
	out[2] = a[2] + b[2] * scale;
	out[3] = a[3] + b[3] * scale;
	out[4] = a[4] + b[4] * scale;
	out[5] = a[5] + b[5] * scale;
	out[6] = a[6] + b[6] * scale;
	out[7] = a[7] + b[7] * scale;
	out[8] = a[8] + b[8] * scale;
	return out;
}
/**
* Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
*
* @param a The first matrix.
* @param b The second matrix.
* @returns True if the matrices are equal, false otherwise.
*/
function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
* Returns whether or not the matrices have approximately the same elements in the same position.
*
* @param a The first matrix.
* @param b The second matrix.
* @returns True if the matrices are equal, false otherwise.
*/
function equals(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const a6 = a[6];
	const a7 = a[7];
	const a8 = a[8];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	const b4 = b[4];
	const b5 = b[5];
	const b6 = b[6];
	const b7 = b[7];
	const b8 = b[8];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= 1e-6 * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= 1e-6 * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= 1e-6 * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= 1e-6 * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= 1e-6 * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= 1e-6 * Math.max(1, Math.abs(a8), Math.abs(b8));
}
/**
* Alias for {@link mat3.multiply}
* @function
*/
const mul = multiply;
/**
* Alias for {@link mat3.subtract}
* @function
*/
const sub = subtract;
//#endregion
export { vec3_exports as A, length as C, scaleAndAdd as D, scale$2 as E, sub$2 as O, fromValues$2 as S, normalize as T, create$2 as _, identity as a, equals$2 as b, create$1 as c, getRotation as d, getTranslation as f, copy$2 as g, clone$2 as h, fromQuat as i, transformMat4 as k, determinant$1 as l, add$2 as m, create as n, mat3_exports as o, mat4_exports as p, fromMat4 as r, multiply as s, clone as t, fromQuat$1 as u, cross as v, negate as w, exactEquals$2 as x, dot as y };

//# sourceMappingURL=mat3-BRz_EKyg.js.map