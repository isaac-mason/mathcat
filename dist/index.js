import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { a as equals, c as radiansToDegrees, d as repeat, f as round, i as deltaAngle, l as remap, n as clamp, o as fade, r as degreesToRadians, s as lerp, t as EPSILON, u as remapClamp } from "./scalar-BGTmo5GO.js";
import { c as vec2_exports } from "./vec2-DrUkSXim.js";
import { A as vec3_exports, C as length$3, S as fromValues$7, T as normalize$4, _ as create$8, c as create$9, d as getRotation, f as getTranslation$1, n as create$7, o as mat3_exports, p as mat4_exports, r as fromMat4$2, u as fromQuat$1, v as cross$1, y as dot$3 } from "./mat3-BRz_EKyg.js";
//#region src/core/vec4.ts
var vec4_exports = /* @__PURE__ */ __exportAll({
	add: () => add$4,
	ceil: () => ceil,
	clone: () => clone$5,
	copy: () => copy$5,
	create: () => create$6,
	cross: () => cross,
	dist: () => dist,
	distance: () => distance,
	div: () => div,
	divide: () => divide,
	dot: () => dot$2,
	equals: () => equals$7,
	exactEquals: () => exactEquals$6,
	finite: () => finite,
	floor: () => floor,
	fromBuffer: () => fromBuffer$1,
	fromValues: () => fromValues$6,
	inverse: () => inverse,
	len: () => len$2,
	length: () => length$2,
	lerp: () => lerp$4,
	max: () => max,
	min: () => min,
	mul: () => mul$4,
	multiply: () => multiply$4,
	negate: () => negate,
	normalize: () => normalize$3,
	round: () => round$1,
	scale: () => scale$5,
	scaleAndAdd: () => scaleAndAdd,
	set: () => set$6,
	sqrDist: () => sqrDist,
	sqrLen: () => sqrLen$2,
	squaredDistance: () => squaredDistance,
	squaredLength: () => squaredLength$2,
	str: () => str$5,
	sub: () => sub$2,
	subtract: () => subtract$2,
	toBuffer: () => toBuffer$1,
	transformMat4: () => transformMat4,
	transformQuat: () => transformQuat,
	zero: () => zero
});
/**
* Creates a new, empty vec4
*
* @returns a new 4D vector
*/
function create$6() {
	return [
		0,
		0,
		0,
		0
	];
}
/**
* Creates a new vec4 initialized with values from an existing vector
*
* @param a vector to clone
* @returns a new 4D vector
*/
function clone$5(a) {
	const out = create$6();
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}
/**
* Creates a new vec4 initialized with the given values
*
* @param x X component
* @param y Y component
* @param z Z component
* @param w W component
* @returns a new 4D vector
*/
function fromValues$6(x, y, z, w) {
	const out = create$6();
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = w;
	return out;
}
/**
* Copy the values from one vec4 to another
*
* @param out the receiving vector
* @param a the source vector
* @returns out
*/
function copy$5(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}
/**
* Set the components of a vec4 to the given values
*
* @param out the receiving vector
* @param x X component
* @param y Y component
* @param z Z component
* @param w W component
* @returns out
*/
function set$6(out, x, y, z, w) {
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = w;
	return out;
}
/**
* Sets the components of a vec4 from a buffer
* @param out the receiving vector
* @param buffer the source buffer
* @param startIndex the starting index in the buffer
* @returns out
*/
function fromBuffer$1(out, buffer, startIndex) {
	out[0] = buffer[startIndex];
	out[1] = buffer[startIndex + 1];
	out[2] = buffer[startIndex + 2];
	out[3] = buffer[startIndex + 3];
	return out;
}
/**
* Writes the components of a vec4 to a buffer
* @param outBuffer The output buffer
* @param vec The source vector
* @param startIndex The starting index in the buffer
* @returns The output buffer
*/
function toBuffer$1(outBuffer, vec, startIndex) {
	outBuffer[startIndex] = vec[0];
	outBuffer[startIndex + 1] = vec[1];
	outBuffer[startIndex + 2] = vec[2];
	outBuffer[startIndex + 3] = vec[3];
	return outBuffer;
}
/**
* Adds two vec4's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function add$4(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
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
	out[3] = a[3] - b[3];
	return out;
}
/**
* Multiplies two vec4's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply$4(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	out[2] = a[2] * b[2];
	out[3] = a[3] * b[3];
	return out;
}
/**
* Divides two vec4's
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
	out[3] = a[3] / b[3];
	return out;
}
/**
* Math.ceil the components of a vec4
*
* @param out the receiving vector
* @param a vector to ceil
* @returns out
*/
function ceil(out, a) {
	out[0] = Math.ceil(a[0]);
	out[1] = Math.ceil(a[1]);
	out[2] = Math.ceil(a[2]);
	out[3] = Math.ceil(a[3]);
	return out;
}
/**
* Math.floor the components of a vec4
*
* @param out the receiving vector
* @param a vector to floor
* @returns out
*/
function floor(out, a) {
	out[0] = Math.floor(a[0]);
	out[1] = Math.floor(a[1]);
	out[2] = Math.floor(a[2]);
	out[3] = Math.floor(a[3]);
	return out;
}
/**
* Returns the minimum of two vec4's
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
	out[3] = Math.min(a[3], b[3]);
	return out;
}
/**
* Returns the maximum of two vec4's
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
	out[3] = Math.max(a[3], b[3]);
	return out;
}
/**
* symmetric round the components of a vec4
*
* @param out the receiving vector
* @param a vector to round
* @returns out
*/
function round$1(out, a) {
	out[0] = round(a[0]);
	out[1] = round(a[1]);
	out[2] = round(a[2]);
	out[3] = round(a[3]);
	return out;
}
/**
* Scales a vec4 by a scalar number
*
* @param out the receiving vector
* @param a the vector to scale
* @param b amount to scale the vector by
* @returns out
*/
function scale$5(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	return out;
}
/**
* Adds two vec4's after scaling the second operand by a scalar value
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
	out[3] = a[3] + b[3] * scale;
	return out;
}
/**
* Calculates the euclidian distance between two vec4's
*
* @param a the first operand
* @param b the second operand
* @returns distance between a and b
*/
function distance(a, b) {
	const x = b[0] - a[0];
	const y = b[1] - a[1];
	const z = b[2] - a[2];
	const w = b[3] - a[3];
	return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
* Calculates the squared euclidian distance between two vec4's
*
* @param a the first operand
* @param b the second operand
* @returns squared distance between a and b
*/
function squaredDistance(a, b) {
	const x = b[0] - a[0];
	const y = b[1] - a[1];
	const z = b[2] - a[2];
	const w = b[3] - a[3];
	return x * x + y * y + z * z + w * w;
}
/**
* Calculates the length of a vec4
*
* @param a vector to calculate length of
* @returns length of a
*/
function length$2(a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	const w = a[3];
	return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
* Calculates the squared length of a vec4
*
* @param a vector to calculate squared length of
* @returns squared length of a
*/
function squaredLength$2(a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	const w = a[3];
	return x * x + y * y + z * z + w * w;
}
/**
* Negates the components of a vec4
*
* @param out the receiving vector
* @param a vector to negate
* @returns out
*/
function negate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = -a[3];
	return out;
}
/**
* Returns the inverse of the components of a vec4
*
* @param out the receiving vector
* @param a vector to invert
* @returns out
*/
function inverse(out, a) {
	out[0] = 1 / a[0];
	out[1] = 1 / a[1];
	out[2] = 1 / a[2];
	out[3] = 1 / a[3];
	return out;
}
/**
* Normalize a vec4
*
* @param out the receiving vector
* @param a vector to normalize
* @returns out
*/
function normalize$3(out, a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	const w = a[3];
	let len = x * x + y * y + z * z + w * w;
	if (len > 0) len = 1 / Math.sqrt(len);
	out[0] = x * len;
	out[1] = y * len;
	out[2] = z * len;
	out[3] = w * len;
	return out;
}
/**
* Calculates the dot product of two vec4's
*
* @param a the first operand
* @param b the second operand
* @returns dot product of a and b
*/
function dot$2(a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
* Returns the cross-product of three vectors in a 4-dimensional space
*
* @param out the receiving vector
* @param u the first vector
* @param v the second vector
* @param w the third vector
* @returns result
*/
function cross(out, u, v, w) {
	const A = v[0] * w[1] - v[1] * w[0];
	const B = v[0] * w[2] - v[2] * w[0];
	const C = v[0] * w[3] - v[3] * w[0];
	const D = v[1] * w[2] - v[2] * w[1];
	const E = v[1] * w[3] - v[3] * w[1];
	const F = v[2] * w[3] - v[3] * w[2];
	const G = u[0];
	const H = u[1];
	const I = u[2];
	const J = u[3];
	out[0] = H * F - I * E + J * D;
	out[1] = -(G * F) + I * C - J * B;
	out[2] = G * E - H * C + J * A;
	out[3] = -(G * D) + H * B - I * A;
	return out;
}
/**
* Performs a linear interpolation between two vec4's
*
* @param out the receiving vector
* @param a the first operand
* @param b the second operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
function lerp$4(out, a, b, t) {
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const aw = a[3];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	out[2] = az + t * (b[2] - az);
	out[3] = aw + t * (b[3] - aw);
	return out;
}
/**
* Transforms the vec4 with a mat4.
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
	const w = a[3];
	out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	return out;
}
/**
* Transforms the vec4 with a quat
*
* @param out the receiving vector
* @param a the vector to transform
* @param q quaternion to transform with
* @returns out
*/
function transformQuat(out, a, q) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	const qx = q[0];
	const qy = q[1];
	const qz = q[2];
	const qw = q[3];
	const ix = qw * x + qy * z - qz * y;
	const iy = qw * y + qz * x - qx * z;
	const iz = qw * z + qx * y - qy * x;
	const iw = -qx * x - qy * y - qz * z;
	out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	out[3] = a[3];
	return out;
}
/**
* Set the components of a vec4 to zero
*
* @param out the receiving vector
* @returns out
*/
function zero(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	return out;
}
/**
* Returns a string representation of a vector
*
* @param a vector to represent as a string
* @returns string representation of the vector
*/
function str$5(a) {
	return `vec4(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
}
/**
* Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
*
* @param a The first vector.
* @param b The second vector.
* @returns True if the vectors are equal, false otherwise.
*/
function exactEquals$6(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
* Returns whether or not the vectors have approximately the same elements in the same position.
*
* @param a The first vector.
* @param b The second vector.
* @returns True if the vectors are equal, false otherwise.
*/
function equals$7(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= 1e-6 * Math.max(1, Math.abs(a3), Math.abs(b3));
}
/**
* Returns whether or not the vector is finite
* @param a vector to test
* @returns whether or not the vector is finite
*/
function finite(a) {
	return Number.isFinite(a[0]) && Number.isFinite(a[1]) && Number.isFinite(a[2]) && Number.isFinite(a[3]);
}
/**
* Alias for {@link subtract}
*/
const sub$2 = subtract$2;
/**
* Alias for {@link multiply}
*/
const mul$4 = multiply$4;
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
const len$2 = length$2;
/**
* Alias for {@link squaredLength}
*/
const sqrLen$2 = squaredLength$2;
//#endregion
//#region src/core/quat.ts
var quat_exports = /* @__PURE__ */ __exportAll({
	add: () => add$3,
	calculateW: () => calculateW,
	clone: () => clone$4,
	conjugate: () => conjugate$1,
	copy: () => copy$4,
	create: () => create$5,
	dot: () => dot$1,
	equals: () => equals$6,
	exactEquals: () => exactEquals$5,
	exp: () => exp,
	fromBuffer: () => fromBuffer,
	fromDegrees: () => fromDegrees$1,
	fromEuler: () => fromEuler,
	fromMat3: () => fromMat3,
	fromMat4: () => fromMat4$1,
	fromValues: () => fromValues$5,
	getAngle: () => getAngle,
	getAxisAngle: () => getAxisAngle,
	identity: () => identity$3,
	invert: () => invert$3,
	len: () => len$1,
	length: () => length$1,
	lerp: () => lerp$3,
	ln: () => ln,
	mul: () => mul$3,
	multiply: () => multiply$3,
	normalize: () => normalize$2,
	pow: () => pow,
	rotateX: () => rotateX$1,
	rotateY: () => rotateY$1,
	rotateZ: () => rotateZ$1,
	rotationTo: () => rotationTo,
	scale: () => scale$4,
	set: () => set$5,
	setAxes: () => setAxes,
	setAxisAngle: () => setAxisAngle,
	slerp: () => slerp,
	sqlerp: () => sqlerp,
	sqrLen: () => sqrLen$1,
	squaredLength: () => squaredLength$1,
	str: () => str$4,
	toBuffer: () => toBuffer
});
/**
* Creates a new identity quat
*
* @returns a new quaternion
*/
function create$5() {
	return [
		0,
		0,
		0,
		1
	];
}
/**
* Sets the components of a quat from a buffer
* @param out the receiving quaternion
* @param buffer the source buffer
* @param startIndex the starting index in the buffer
* @returns out
*/
function fromBuffer(out, buffer, startIndex) {
	out[0] = buffer[startIndex];
	out[1] = buffer[startIndex + 1];
	out[2] = buffer[startIndex + 2];
	out[3] = buffer[startIndex + 3];
	return out;
}
/**
* Writes the components of a quat to a buffer
* @param outBuffer The output buffer
* @param q The source quaternion
* @param startIndex The starting index in the buffer
* @returns The output buffer
*/
function toBuffer(outBuffer, q, startIndex) {
	outBuffer[startIndex] = q[0];
	outBuffer[startIndex + 1] = q[1];
	outBuffer[startIndex + 2] = q[2];
	outBuffer[startIndex + 3] = q[3];
	return outBuffer;
}
/**
* Set a quat to the identity quaternion
*
* @param out the receiving quaternion
* @returns out
*/
function identity$3(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	return out;
}
/**
* Sets a quat from the given angle and rotation axis,
* then returns it.
*
* @param out the receiving quaternion
* @param axis the axis around which to rotate
* @param rad the angle in radians
* @returns out
**/
function setAxisAngle(out, axis, rad) {
	rad *= .5;
	const s = Math.sin(rad);
	out[0] = s * axis[0];
	out[1] = s * axis[1];
	out[2] = s * axis[2];
	out[3] = Math.cos(rad);
	return out;
}
/**
* Gets the rotation axis and angle for a given
*  quaternion. If a quaternion is created with
*  setAxisAngle, this method will return the same
*  values as providied in the original parameter list
*  OR functionally equivalent values.
* Example: The quaternion formed by axis [0, 0, 1] and
*  angle -90 is the same as the quaternion formed by
*  [0, 0, 1] and 270. This method favors the latter.
* @param  out_axis  Vector receiving the axis of rotation
* @param  q     Quaternion to be decomposed
* @return     Angle, in radians, of the rotation
*/
function getAxisAngle(out_axis, q) {
	const rad = Math.acos(q[3]) * 2;
	const s = Math.sin(rad / 2);
	if (s > 1e-6) {
		out_axis[0] = q[0] / s;
		out_axis[1] = q[1] / s;
		out_axis[2] = q[2] / s;
	} else {
		out_axis[0] = 1;
		out_axis[1] = 0;
		out_axis[2] = 0;
	}
	return rad;
}
/**
* Gets the angular distance between two unit quaternions
*
* @param  a     Origin unit quaternion
* @param  b     Destination unit quaternion
* @return     Angle, in radians, between the two quaternions
*/
function getAngle(a, b) {
	const dotproduct = dot$1(a, b);
	return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
* Multiplies two quat's
*
* @param out the receiving quaternion
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply$3(out, a, b) {
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const aw = a[3];
	const bx = b[0];
	const by = b[1];
	const bz = b[2];
	const bw = b[3];
	out[0] = ax * bw + aw * bx + ay * bz - az * by;
	out[1] = ay * bw + aw * by + az * bx - ax * bz;
	out[2] = az * bw + aw * bz + ax * by - ay * bx;
	out[3] = aw * bw - ax * bx - ay * by - az * bz;
	return out;
}
/**
* Rotates a quaternion by the given angle about the X axis
*
* @param out quat receiving operation result
* @param a quat to rotate
* @param rad angle (in radians) to rotate
* @returns out
*/
function rotateX$1(out, a, rad) {
	rad *= .5;
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const aw = a[3];
	const bx = Math.sin(rad);
	const bw = Math.cos(rad);
	out[0] = ax * bw + aw * bx;
	out[1] = ay * bw + az * bx;
	out[2] = az * bw - ay * bx;
	out[3] = aw * bw - ax * bx;
	return out;
}
/**
* Rotates a quaternion by the given angle about the Y axis
*
* @param out quat receiving operation result
* @param a quat to rotate
* @param rad angle (in radians) to rotate
* @returns out
*/
function rotateY$1(out, a, rad) {
	rad *= .5;
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const aw = a[3];
	const by = Math.sin(rad);
	const bw = Math.cos(rad);
	out[0] = ax * bw - az * by;
	out[1] = ay * bw + aw * by;
	out[2] = az * bw + ax * by;
	out[3] = aw * bw - ay * by;
	return out;
}
/**
* Rotates a quaternion by the given angle about the Z axis
*
* @param out quat receiving operation result
* @param a quat to rotate
* @param rad angle (in radians) to rotate
* @returns out
*/
function rotateZ$1(out, a, rad) {
	rad *= .5;
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const aw = a[3];
	const bz = Math.sin(rad);
	const bw = Math.cos(rad);
	out[0] = ax * bw + ay * bz;
	out[1] = ay * bw - ax * bz;
	out[2] = az * bw + aw * bz;
	out[3] = aw * bw - az * bz;
	return out;
}
/**
* Calculates the W component of a quat from the X, Y, and Z components.
* Assumes that quaternion is 1 unit in length.
* Any existing W component will be ignored.
*
* @param out the receiving quaternion
* @param a quat to calculate W component of
* @returns out
*/
function calculateW(out, a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
	return out;
}
/**
* Calculate the exponential of a unit quaternion.
*
* @param out the receiving quaternion
* @param a quat to calculate the exponential of
* @returns out
*/
function exp(out, a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	const w = a[3];
	const r = Math.sqrt(x * x + y * y + z * z);
	const et = Math.exp(w);
	const s = r > 0 ? et * Math.sin(r) / r : 0;
	out[0] = x * s;
	out[1] = y * s;
	out[2] = z * s;
	out[3] = et * Math.cos(r);
	return out;
}
/**
* Calculate the natural logarithm of a unit quaternion.
*
* @param out the receiving quaternion
* @param a quat to calculate the exponential of
* @returns out
*/
function ln(out, a) {
	const x = a[0];
	const y = a[1];
	const z = a[2];
	const w = a[3];
	const r = Math.sqrt(x * x + y * y + z * z);
	const t = r > 0 ? Math.atan2(r, w) / r : 0;
	out[0] = x * t;
	out[1] = y * t;
	out[2] = z * t;
	out[3] = .5 * Math.log(x * x + y * y + z * z + w * w);
	return out;
}
/**
* Calculate the scalar power of a unit quaternion.
*
* @param out the receiving quaternion
* @param a quat to calculate the exponential of
* @param b amount to scale the quaternion by
* @returns out
*/
function pow(out, a, b) {
	ln(out, a);
	scale$4(out, out, b);
	exp(out, out);
	return out;
}
/**
* Performs a spherical linear interpolation between two quat
*
* @param out the receiving quaternion
* @param a the first operand
* @param b the second operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
function slerp(out, a, b, t) {
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const aw = a[3];
	let bx = b[0];
	let by = b[1];
	let bz = b[2];
	let bw = b[3];
	let omega;
	let cosom;
	let sinom;
	let scale0;
	let scale1;
	cosom = ax * bx + ay * by + az * bz + aw * bw;
	if (cosom < 0) {
		cosom = -cosom;
		bx = -bx;
		by = -by;
		bz = -bz;
		bw = -bw;
	}
	if (1 - cosom > 1e-6) {
		omega = Math.acos(cosom);
		sinom = Math.sin(omega);
		scale0 = Math.sin((1 - t) * omega) / sinom;
		scale1 = Math.sin(t * omega) / sinom;
	} else {
		scale0 = 1 - t;
		scale1 = t;
	}
	out[0] = scale0 * ax + scale1 * bx;
	out[1] = scale0 * ay + scale1 * by;
	out[2] = scale0 * az + scale1 * bz;
	out[3] = scale0 * aw + scale1 * bw;
	return out;
}
/**
* Calculates the inverse of a quat
*
* @param out the receiving quaternion
* @param a quat to calculate inverse of
* @returns out
*/
function invert$3(out, a) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
	const invDot = dot ? 1 / dot : 0;
	out[0] = -a0 * invDot;
	out[1] = -a1 * invDot;
	out[2] = -a2 * invDot;
	out[3] = a3 * invDot;
	return out;
}
/**
* Calculates the conjugate of a quat
* If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
*
* @param out the receiving quaternion
* @param a quat to calculate conjugate of
* @returns out
*/
function conjugate$1(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = a[3];
	return out;
}
/**
* Creates a quaternion from the given 3x3 rotation matrix.
*
* NOTE: The resultant quaternion is not normalized, so you should be sure
* to renormalize the quaternion yourself where necessary.
*
* @param out the receiving quaternion
* @param m rotation matrix
* @returns out
*/
function fromMat3(out, m) {
	const fTrace = m[0] + m[4] + m[8];
	let fRoot;
	if (fTrace > 0) {
		fRoot = Math.sqrt(fTrace + 1);
		out[3] = .5 * fRoot;
		fRoot = .5 / fRoot;
		out[0] = (m[5] - m[7]) * fRoot;
		out[1] = (m[6] - m[2]) * fRoot;
		out[2] = (m[1] - m[3]) * fRoot;
	} else {
		let i = 0;
		if (m[4] > m[0]) i = 1;
		if (m[8] > m[i * 3 + i]) i = 2;
		const j = (i + 1) % 3;
		const k = (i + 2) % 3;
		fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
		out[i] = .5 * fRoot;
		fRoot = .5 / fRoot;
		out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
		out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
		out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
	}
	return out;
}
/**
* Calculates a quaternion from a 4x4 rotation matrix
* Extracts the 3x3 rotation part and calls fromMat3
*
* @param out the receiving quaternion
* @param m rotation matrix
* @returns out
*/
function fromMat4$1(out, m) {
	const m3 = create$7();
	fromMat4$2(m3, m);
	return fromMat3(out, m3);
}
/**
* Creates a quaternion from the given euler
* @param out the receiving quaternion
* @param euler the euler to create the quaternion from
* @returns out
*/
function fromEuler(out, euler) {
	const x = euler[0];
	const y = euler[1];
	const z = euler[2];
	const order = euler[3] || "xyz";
	const cos = Math.cos;
	const sin = Math.sin;
	const c1 = cos(x / 2);
	const c2 = cos(y / 2);
	const c3 = cos(z / 2);
	const s1 = sin(x / 2);
	const s2 = sin(y / 2);
	const s3 = sin(z / 2);
	switch (order) {
		case "xyz":
			out[0] = s1 * c2 * c3 + c1 * s2 * s3;
			out[1] = c1 * s2 * c3 - s1 * c2 * s3;
			out[2] = c1 * c2 * s3 + s1 * s2 * c3;
			out[3] = c1 * c2 * c3 - s1 * s2 * s3;
			break;
		case "yxz":
			out[0] = s1 * c2 * c3 + c1 * s2 * s3;
			out[1] = c1 * s2 * c3 - s1 * c2 * s3;
			out[2] = c1 * c2 * s3 - s1 * s2 * c3;
			out[3] = c1 * c2 * c3 + s1 * s2 * s3;
			break;
		case "zxy":
			out[0] = s1 * c2 * c3 - c1 * s2 * s3;
			out[1] = c1 * s2 * c3 + s1 * c2 * s3;
			out[2] = c1 * c2 * s3 + s1 * s2 * c3;
			out[3] = c1 * c2 * c3 - s1 * s2 * s3;
			break;
		case "zyx":
			out[0] = s1 * c2 * c3 - c1 * s2 * s3;
			out[1] = c1 * s2 * c3 + s1 * c2 * s3;
			out[2] = c1 * c2 * s3 - s1 * s2 * c3;
			out[3] = c1 * c2 * c3 + s1 * s2 * s3;
			break;
		case "yzx":
			out[0] = s1 * c2 * c3 + c1 * s2 * s3;
			out[1] = c1 * s2 * c3 + s1 * c2 * s3;
			out[2] = c1 * c2 * s3 - s1 * s2 * c3;
			out[3] = c1 * c2 * c3 - s1 * s2 * s3;
			break;
		case "xzy":
			out[0] = s1 * c2 * c3 - c1 * s2 * s3;
			out[1] = c1 * s2 * c3 - s1 * c2 * s3;
			out[2] = c1 * c2 * s3 + s1 * s2 * c3;
			out[3] = c1 * c2 * c3 + s1 * s2 * s3;
			break;
		default: console.warn(`fromEuler() encountered an unknown order: ${order}`);
	}
	return out;
}
const _fromDegrees_euler = [
	0,
	0,
	0,
	"xyz"
];
/**
* Creates a quaternion from euler angles specified in degrees.
* Shorthand for converting degrees to radians and then creating a quaternion from euler.
*
* @param out the receiving quaternion
* @param x The x euler rotation in degrees
* @param y The y euler rotation in degrees
* @param z The z euler rotation in degrees
* @param order The order of rotation
* @returns out
*/
function fromDegrees$1(out, x, y, z, order) {
	_fromDegrees_euler[0] = x * Math.PI / 180;
	_fromDegrees_euler[1] = y * Math.PI / 180;
	_fromDegrees_euler[2] = z * Math.PI / 180;
	_fromDegrees_euler[3] = order;
	return fromEuler(out, _fromDegrees_euler);
}
/**
* Returns a string representation of a quaternion
*
* @param a vector to represent as a string
* @returns string representation of the vector
*/
function str$4(a) {
	return `quat(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
}
/**
* Creates a new quat initialized with values from an existing quaternion
*
* @param a quaternion to clone
* @returns a new quaternion
*/
const clone$4 = clone$5;
/**
* Creates a new quat initialized with the given values
*
* @param x X component
* @param y Y component
* @param z Z component
* @param w W component
* @returns a new quaternion
*/
const fromValues$5 = fromValues$6;
/**
* Copy the values from one quat to another
*
* @param out the receiving quaternion
* @param a the source quaternion
* @returns out
*/
const copy$4 = copy$5;
/**
* Set the components of a quat to the given values
*
* @param out the receiving quaternion
* @param x X component
* @param y Y component
* @param z Z component
* @param w W component
* @returns out
*/
const set$5 = set$6;
/**
* Adds two quat's
*
* @param out the receiving quaternion
* @param a the first operand
* @param b the second operand
* @returns out
*/
const add$3 = add$4;
/**
* Scales a quat by a scalar number
*
* @param out the receiving quaternion
* @param a the quaternion to scale
* @param b amount to scale the quaternion by
* @returns out
*/
const scale$4 = scale$5;
/**
* Calculates the dot product of two quat's
*
* @param a the first operand
* @param b the second operand
* @returns dot product of a and b
*/
const dot$1 = dot$2;
/**
* Performs a linear interpolation between two quat's
*
* @param out the receiving quaternion
* @param a the first operand
* @param b the second operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
const lerp$3 = lerp$4;
/**
* Calculates the length of a quat
*
* @param a quaternion to calculate length of
* @returns length of a
*/
const length$1 = length$2;
/**
* Alias for {@link length}
*/
const len$1 = length$1;
/**
* Calculates the squared length of a quat
*
* @param a quaternion to calculate squared length of
* @returns squared length of a
*/
const squaredLength$1 = squaredLength$2;
/**
* Alias for {@link squaredLength}
*/
const sqrLen$1 = squaredLength$1;
/**
* Alias for {@link multiply}
*/
const mul$3 = multiply$3;
/**
* Normalize a quat
*
* @param out the receiving quaternion
* @param a quaternion to normalize
* @returns out
*/
const normalize$2 = normalize$3;
/**
* Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
*
* @param a The first quaternion.
* @param b The second quaternion.
* @returns True if the quaternions are equal, false otherwise.
*/
const exactEquals$5 = exactEquals$6;
/**
* Returns whether or not the quaternions have approximately the same elements in the same position.
*
* @param a The first quaternion.
* @param b The second quaternion.
* @returns True if the quaternions are equal, false otherwise.
*/
function equals$6(a, b) {
	return Math.abs(dot$2(a, b)) >= 1 - EPSILON;
}
/**
* Sets a quaternion to represent the shortest rotation from one
* vector to another.
*
* Both vectors are assumed to be unit length.
*
* @param out the receiving quaternion.
* @param a the initial vector
* @param b the destination vector
* @returns out
*/
const rotationTo = /* @__PURE__ */ (() => {
	const tmpvec3 = create$8();
	const xUnitVec3 = fromValues$7(1, 0, 0);
	const yUnitVec3 = fromValues$7(0, 1, 0);
	return (out, a, b) => {
		const dot = dot$3(a, b);
		if (dot < -.999999) {
			cross$1(tmpvec3, xUnitVec3, a);
			if (length$3(tmpvec3) < 1e-6) cross$1(tmpvec3, yUnitVec3, a);
			normalize$4(tmpvec3, tmpvec3);
			setAxisAngle(out, tmpvec3, Math.PI);
			return out;
		}
		if (dot > .999999) {
			out[0] = 0;
			out[1] = 0;
			out[2] = 0;
			out[3] = 1;
			return out;
		}
		cross$1(tmpvec3, a, b);
		out[0] = tmpvec3[0];
		out[1] = tmpvec3[1];
		out[2] = tmpvec3[2];
		out[3] = 1 + dot;
		return normalize$2(out, out);
	};
})();
/**
* Performs a spherical linear interpolation with two control points
*
* @param out the receiving quaternion
* @param a the first operand
* @param b the second operand
* @param c the third operand
* @param d the fourth operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
const sqlerp = /* @__PURE__ */ (() => {
	const temp1 = create$5();
	const temp2 = create$5();
	return (out, a, b, c, d, t) => {
		slerp(temp1, a, d, t);
		slerp(temp2, b, c, t);
		slerp(out, temp1, temp2, 2 * t * (1 - t));
		return out;
	};
})();
/**
* Sets the specified quaternion with values corresponding to the given
* axes. Each axis is a vec3 and is expected to be unit length and
* perpendicular to all other specified axes.
*
* @param view  the vector representing the viewing direction
* @param right the vector representing the local "right" direction
* @param up    the vector representing the local "up" direction
* @returns out
*/
const setAxes = /* @__PURE__ */ (() => {
	const matr = create$7();
	return (out, view, right, up) => {
		matr[0] = right[0];
		matr[3] = right[1];
		matr[6] = right[2];
		matr[1] = up[0];
		matr[4] = up[1];
		matr[7] = up[2];
		matr[2] = -view[0];
		matr[5] = -view[1];
		matr[8] = -view[2];
		return normalize$2(out, fromMat3(out, matr));
	};
})();
//#endregion
//#region src/core/euler.ts
var euler_exports = /* @__PURE__ */ __exportAll({
	create: () => create$4,
	equals: () => equals$5,
	exactEquals: () => exactEquals$4,
	fromDegrees: () => fromDegrees,
	fromQuat: () => fromQuat,
	fromRotationMat4: () => fromRotationMat4,
	fromValues: () => fromValues$4,
	reorder: () => reorder,
	set: () => set$4
});
/**
* Creates a new Euler with default values (0, 0, 0, 'xyz').
*/
function create$4() {
	return [
		0,
		0,
		0,
		"xyz"
	];
}
/**
* Creates a new Euler from the given values.
* @param x The x rotation in radians.
* @param y The y rotation in radians.
* @param z The z rotation in radians.
* @param order The order of rotation.
* @returns A new Euler.
*/
function fromValues$4(x, y, z, order) {
	return [
		x,
		y,
		z,
		order
	];
}
/**
* Sets a given Euler from the given values.
* @param x The x rotation in radians.
* @param y The y rotation in radians.
* @param z The z rotation in radians.
* @param order The order of rotation.
* @returns The output Euler.
*/
function set$4(out, x, y, z, order) {
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = order;
	return out;
}
/**
* Sets Euler angle radians from given degrees
* @param out The output Euler.
* @param x The x rotation in degrees.
* @param y The y rotation in degrees.
* @param z The z rotation in degrees.
* @param order The order of rotation.
* @returns The output Euler.
*/
function fromDegrees(out, x, y, z, order) {
	out[0] = x * Math.PI / 180;
	out[1] = y * Math.PI / 180;
	out[2] = z * Math.PI / 180;
	out[3] = order;
	return out;
}
/**
* Sets the Euler angles from a rotation matrix.
* @param out The output Euler.
* @param rotationMatrix The input rotation matrix.
* @param order The order of the Euler angles.
* @returns The output Euler.
*/
function fromRotationMat4(out, rotationMatrix, order = out[3] || "xyz") {
	const m11 = rotationMatrix[0];
	const m12 = rotationMatrix[4];
	const m13 = rotationMatrix[8];
	const m21 = rotationMatrix[1];
	const m22 = rotationMatrix[5];
	const m23 = rotationMatrix[9];
	const m31 = rotationMatrix[2];
	const m32 = rotationMatrix[6];
	const m33 = rotationMatrix[10];
	switch (order) {
		case "xyz":
			out[1] = Math.asin(clamp(m13, -1, 1));
			if (Math.abs(m13) < .9999999) {
				out[0] = Math.atan2(-m23, m33);
				out[2] = Math.atan2(-m12, m11);
			} else {
				out[0] = Math.atan2(m32, m22);
				out[2] = 0;
			}
			break;
		case "yxz":
			out[0] = Math.asin(-clamp(m23, -1, 1));
			if (Math.abs(m23) < .9999999) {
				out[1] = Math.atan2(m13, m33);
				out[2] = Math.atan2(m21, m22);
			} else {
				out[1] = Math.atan2(-m31, m11);
				out[2] = 0;
			}
			break;
		case "zxy":
			out[0] = Math.asin(clamp(m32, -1, 1));
			if (Math.abs(m32) < .9999999) {
				out[1] = Math.atan2(-m31, m33);
				out[2] = Math.atan2(-m12, m22);
			} else {
				out[1] = 0;
				out[2] = Math.atan2(m21, m11);
			}
			break;
		case "zyx":
			out[1] = Math.asin(-clamp(m31, -1, 1));
			if (Math.abs(m31) < .9999999) {
				out[0] = Math.atan2(m32, m33);
				out[2] = Math.atan2(m21, m11);
			} else {
				out[0] = 0;
				out[2] = Math.atan2(-m12, m22);
			}
			break;
		case "yzx":
			out[2] = Math.asin(clamp(m21, -1, 1));
			if (Math.abs(m21) < .9999999) {
				out[0] = Math.atan2(-m23, m22);
				out[1] = Math.atan2(-m31, m11);
			} else {
				out[0] = 0;
				out[1] = Math.atan2(m13, m33);
			}
			break;
		case "xzy":
			out[2] = Math.asin(-clamp(m12, -1, 1));
			if (Math.abs(m12) < .9999999) {
				out[0] = Math.atan2(m32, m22);
				out[1] = Math.atan2(m13, m11);
			} else {
				out[0] = Math.atan2(-m23, m33);
				out[1] = 0;
			}
			break;
		default: console.warn(`encountered an unknown order: ${order}`);
	}
	out[3] = order;
	return out;
}
/**
* Returns whether or not the euler angles have exactly the same elements in the same position (when compared with ===)
*
* @param a The first euler.
* @param b The second euler.
* @returns True if the euler angles are equal, false otherwise.
*/
function exactEquals$4(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
* Returns whether or not the euler angles have approximately the same elements in the same position.
*
* @param a The first euler.
* @param b The second euler.
* @returns True if the euler angles are equal, false otherwise.
*/
function equals$5(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2)) && a[3] === b[3];
}
const _setFromQuaternionRotationMatrix = /*@__PURE__*/ create$9();
/**
* Sets the Euler angles from a quaternion.
* @param out The output Euler.
* @param q The input quaternion.
* @param order The order of the Euler.
* @returns The output Euler
*/
function fromQuat(out, q, order) {
	fromQuat$1(_setFromQuaternionRotationMatrix, q);
	return fromRotationMat4(out, _setFromQuaternionRotationMatrix, order);
}
const _reorderQuaternion = /*@__PURE__*/ create$5();
/**
* Reorders the Euler based on the specified order.
* @param out The output Euler.
* @param a The input Euler.
* @param order The order of the Euler.
* @returns The output Euler.
*/
function reorder(out, a, order) {
	fromEuler(_reorderQuaternion, a);
	fromQuat(out, _reorderQuaternion, order);
	return out;
}
//#endregion
//#region src/core/quat2.ts
var quat2_exports = /* @__PURE__ */ __exportAll({
	add: () => add$2,
	clone: () => clone$3,
	conjugate: () => conjugate,
	copy: () => copy$3,
	create: () => create$3,
	dot: () => dot,
	equals: () => equals$4,
	exactEquals: () => exactEquals$3,
	fromMat4: () => fromMat4,
	fromRotation: () => fromRotation$2,
	fromRotationTranslation: () => fromRotationTranslation,
	fromRotationTranslationValues: () => fromRotationTranslationValues,
	fromTranslation: () => fromTranslation$1,
	fromValues: () => fromValues$3,
	getDual: () => getDual,
	getReal: () => getReal,
	getTranslation: () => getTranslation,
	identity: () => identity$2,
	invert: () => invert$2,
	len: () => len,
	length: () => length,
	lerp: () => lerp$2,
	mul: () => mul$2,
	multiply: () => multiply$2,
	normalize: () => normalize$1,
	rotateAroundAxis: () => rotateAroundAxis,
	rotateByQuatAppend: () => rotateByQuatAppend,
	rotateByQuatPrepend: () => rotateByQuatPrepend,
	rotateX: () => rotateX,
	rotateY: () => rotateY,
	rotateZ: () => rotateZ,
	scale: () => scale$3,
	set: () => set$3,
	setDual: () => setDual,
	setReal: () => setReal,
	sqrLen: () => sqrLen,
	squaredLength: () => squaredLength,
	str: () => str$3,
	translate: () => translate$1
});
/**
* Creates a new identity dual quat
*
* @returns a new dual quaternion [real -> rotation, dual -> translation]
*/
function create$3() {
	return [
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0
	];
}
/**
* Creates a new quat initialized with values from an existing quaternion
*
* @param a dual quaternion to clone
* @returns new dual quaternion
* @function
*/
function clone$3(a) {
	const dq = create$3();
	dq[0] = a[0];
	dq[1] = a[1];
	dq[2] = a[2];
	dq[3] = a[3];
	dq[4] = a[4];
	dq[5] = a[5];
	dq[6] = a[6];
	dq[7] = a[7];
	return dq;
}
/**
* Creates a new dual quat initialized with the given values
*
* @param x1 X component
* @param y1 Y component
* @param z1 Z component
* @param w1 W component
* @param x2 X component
* @param y2 Y component
* @param z2 Z component
* @param w2 W component
* @returns new dual quaternion
* @function
*/
function fromValues$3(x1, y1, z1, w1, x2, y2, z2, w2) {
	const dq = create$3();
	dq[0] = x1;
	dq[1] = y1;
	dq[2] = z1;
	dq[3] = w1;
	dq[4] = x2;
	dq[5] = y2;
	dq[6] = z2;
	dq[7] = w2;
	return dq;
}
/**
* Creates a new dual quat from the given values (quat and translation)
*
* @param x1 X component
* @param y1 Y component
* @param z1 Z component
* @param w1 W component
* @param x2 X component (translation)
* @param y2 Y component (translation)
* @param z2 Z component (translation)
* @returns new dual quaternion
* @function
*/
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
	const dq = create$3();
	dq[0] = x1;
	dq[1] = y1;
	dq[2] = z1;
	dq[3] = w1;
	const ax = x2 * .5;
	const ay = y2 * .5;
	const az = z2 * .5;
	dq[4] = ax * w1 + ay * z1 - az * y1;
	dq[5] = ay * w1 + az * x1 - ax * z1;
	dq[6] = az * w1 + ax * y1 - ay * x1;
	dq[7] = -ax * x1 - ay * y1 - az * z1;
	return dq;
}
/**
* Creates a dual quat from a quaternion and a translation
*
* @param out dual quaternion receiving operation result
* @param q a normalized quaternion
* @param t translation vector
* @returns dual quaternion receiving operation result
* @function
*/
function fromRotationTranslation(out, q, t) {
	const ax = t[0] * .5;
	const ay = t[1] * .5;
	const az = t[2] * .5;
	const bx = q[0];
	const by = q[1];
	const bz = q[2];
	const bw = q[3];
	out[0] = bx;
	out[1] = by;
	out[2] = bz;
	out[3] = bw;
	out[4] = ax * bw + ay * bz - az * by;
	out[5] = ay * bw + az * bx - ax * bz;
	out[6] = az * bw + ax * by - ay * bx;
	out[7] = -ax * bx - ay * by - az * bz;
	return out;
}
/**
* Creates a dual quat from a translation
*
* @param out dual quaternion receiving operation result
* @param t translation vector
* @returns dual quaternion receiving operation result
* @function
*/
function fromTranslation$1(out, t) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	out[4] = t[0] * .5;
	out[5] = t[1] * .5;
	out[6] = t[2] * .5;
	out[7] = 0;
	return out;
}
/**
* Creates a dual quat from a quaternion
*
* @param out dual quaternion receiving operation result
* @param q the quaternion
* @returns dual quaternion receiving operation result
* @function
*/
function fromRotation$2(out, q) {
	out[0] = q[0];
	out[1] = q[1];
	out[2] = q[2];
	out[3] = q[3];
	out[4] = 0;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	return out;
}
/**
* Creates a new dual quat from a matrix (4x4)
*
* @param out the dual quaternion
* @param a the matrix
* @returns dual quat receiving operation result
* @function
*/
function fromMat4(out, a) {
	const outer = create$5();
	getRotation(outer, a);
	const t = [
		0,
		0,
		0
	];
	getTranslation$1(t, a);
	fromRotationTranslation(out, outer, t);
	return out;
}
/**
* Copy the values from one dual quat to another
*
* @param out the receiving dual quaternion
* @param a the source dual quaternion
* @returns out
* @function
*/
function copy$3(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	out[6] = a[6];
	out[7] = a[7];
	return out;
}
/**
* Set a dual quat to the identity dual quaternion
*
* @param out the receiving quaternion
* @returns out
*/
function identity$2(out) {
	out[0] = 0;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	out[4] = 0;
	out[5] = 0;
	out[6] = 0;
	out[7] = 0;
	return out;
}
/**
* Set the components of a dual quat to the given values
*
* @param out the receiving quaternion
* @param x1 X component
* @param y1 Y component
* @param z1 Z component
* @param w1 W component
* @param x2 X component
* @param y2 Y component
* @param z2 Z component
* @param w2 W component
* @returns out
* @function
*/
function set$3(out, x1, y1, z1, w1, x2, y2, z2, w2) {
	out[0] = x1;
	out[1] = y1;
	out[2] = z1;
	out[3] = w1;
	out[4] = x2;
	out[5] = y2;
	out[6] = z2;
	out[7] = w2;
	return out;
}
/**
* Gets the real part of a dual quat
* @param  out real part
* @param  a Dual Quaternion
* @return real part
*/
const getReal = copy$4;
/**
* Gets the dual part of a dual quat
* @param  out dual part
* @param  a Dual Quaternion
* @return dual part
*/
function getDual(out, a) {
	out[0] = a[4];
	out[1] = a[5];
	out[2] = a[6];
	out[3] = a[7];
	return out;
}
/**
* Set the real component of a dual quat to the given quaternion
*
* @param out the receiving quaternion
* @param q a quaternion representing the real part
* @returns out
* @function
*/
const setReal = copy$4;
/**
* Set the dual component of a dual quat to the given quaternion
*
* @param out the receiving quaternion
* @param q a quaternion representing the dual part
* @returns out
* @function
*/
function setDual(out, q) {
	out[4] = q[0];
	out[5] = q[1];
	out[6] = q[2];
	out[7] = q[3];
	return out;
}
/**
* Gets the translation of a normalized dual quat
* @param  out translation
* @param  a Dual Quaternion to be decomposed
* @return translation
*/
function getTranslation(out, a) {
	const ax = a[4];
	const ay = a[5];
	const az = a[6];
	const aw = a[7];
	const bx = -a[0];
	const by = -a[1];
	const bz = -a[2];
	const bw = a[3];
	out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
	out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
	out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
	return out;
}
/**
* Translates a dual quat by the given vector
*
* @param out the receiving dual quaternion
* @param a the dual quaternion to translate
* @param v vector to translate by
* @returns out
*/
function translate$1(out, a, v) {
	const ax1 = a[0];
	const ay1 = a[1];
	const az1 = a[2];
	const aw1 = a[3];
	const bx1 = v[0] * .5;
	const by1 = v[1] * .5;
	const bz1 = v[2] * .5;
	const ax2 = a[4];
	const ay2 = a[5];
	const az2 = a[6];
	const aw2 = a[7];
	out[0] = ax1;
	out[1] = ay1;
	out[2] = az1;
	out[3] = aw1;
	out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
	out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
	out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
	out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
	return out;
}
/**
* Rotates a dual quat around the X axis
*
* @param out the receiving dual quaternion
* @param a the dual quaternion to rotate
* @param rad how far should the rotation be
* @returns out
*/
function rotateX(out, a, rad) {
	let bx = -a[0];
	let by = -a[1];
	let bz = -a[2];
	let bw = a[3];
	const ax = a[4];
	const ay = a[5];
	const az = a[6];
	const aw = a[7];
	const ax1 = ax * bw + aw * bx + ay * bz - az * by;
	const ay1 = ay * bw + aw * by + az * bx - ax * bz;
	const az1 = az * bw + aw * bz + ax * by - ay * bx;
	const aw1 = aw * bw - ax * bx - ay * by - az * bz;
	rotateX$1(out, a, rad);
	bx = out[0];
	by = out[1];
	bz = out[2];
	bw = out[3];
	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	return out;
}
/**
* Rotates a dual quat around the Y axis
*
* @param out the receiving dual quaternion
* @param a the dual quaternion to rotate
* @param rad how far should the rotation be
* @returns out
*/
function rotateY(out, a, rad) {
	let bx = -a[0];
	let by = -a[1];
	let bz = -a[2];
	let bw = a[3];
	const ax = a[4];
	const ay = a[5];
	const az = a[6];
	const aw = a[7];
	const ax1 = ax * bw + aw * bx + ay * bz - az * by;
	const ay1 = ay * bw + aw * by + az * bx - ax * bz;
	const az1 = az * bw + aw * bz + ax * by - ay * bx;
	const aw1 = aw * bw - ax * bx - ay * by - az * bz;
	rotateY$1(out, a, rad);
	bx = out[0];
	by = out[1];
	bz = out[2];
	bw = out[3];
	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	return out;
}
/**
* Rotates a dual quat around the Z axis
*
* @param out the receiving dual quaternion
* @param a the dual quaternion to rotate
* @param rad how far should the rotation be
* @returns out
*/
function rotateZ(out, a, rad) {
	let bx = -a[0];
	let by = -a[1];
	let bz = -a[2];
	let bw = a[3];
	const ax = a[4];
	const ay = a[5];
	const az = a[6];
	const aw = a[7];
	const ax1 = ax * bw + aw * bx + ay * bz - az * by;
	const ay1 = ay * bw + aw * by + az * bx - ax * bz;
	const az1 = az * bw + aw * bz + ax * by - ay * bx;
	const aw1 = aw * bw - ax * bx - ay * by - az * bz;
	rotateZ$1(out, a, rad);
	bx = out[0];
	by = out[1];
	bz = out[2];
	bw = out[3];
	out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	return out;
}
/**
* Rotates a dual quat by a given quaternion (a * q)
*
* @param out the receiving dual quaternion
* @param a the dual quaternion to rotate
* @param q quaternion to rotate by
* @returns out
*/
function rotateByQuatAppend(out, a, q) {
	const qx = q[0];
	const qy = q[1];
	const qz = q[2];
	const qw = q[3];
	let ax = a[0];
	let ay = a[1];
	let az = a[2];
	let aw = a[3];
	out[0] = ax * qw + aw * qx + ay * qz - az * qy;
	out[1] = ay * qw + aw * qy + az * qx - ax * qz;
	out[2] = az * qw + aw * qz + ax * qy - ay * qx;
	out[3] = aw * qw - ax * qx - ay * qy - az * qz;
	ax = a[4];
	ay = a[5];
	az = a[6];
	aw = a[7];
	out[4] = ax * qw + aw * qx + ay * qz - az * qy;
	out[5] = ay * qw + aw * qy + az * qx - ax * qz;
	out[6] = az * qw + aw * qz + ax * qy - ay * qx;
	out[7] = aw * qw - ax * qx - ay * qy - az * qz;
	return out;
}
/**
* Rotates a dual quat by a given quaternion (q * a)
*
* @param out the receiving dual quaternion
* @param q quaternion to rotate by
* @param a the dual quaternion to rotate
* @returns out
*/
function rotateByQuatPrepend(out, q, a) {
	const qx = q[0];
	const qy = q[1];
	const qz = q[2];
	const qw = q[3];
	let bx = a[0];
	let by = a[1];
	let bz = a[2];
	let bw = a[3];
	out[0] = qx * bw + qw * bx + qy * bz - qz * by;
	out[1] = qy * bw + qw * by + qz * bx - qx * bz;
	out[2] = qz * bw + qw * bz + qx * by - qy * bx;
	out[3] = qw * bw - qx * bx - qy * by - qz * bz;
	bx = a[4];
	by = a[5];
	bz = a[6];
	bw = a[7];
	out[4] = qx * bw + qw * bx + qy * bz - qz * by;
	out[5] = qy * bw + qw * by + qz * bx - qx * bz;
	out[6] = qz * bw + qw * bz + qx * by - qy * bx;
	out[7] = qw * bw - qx * bx - qy * by - qz * bz;
	return out;
}
/**
* Rotates a dual quat around a given axis. Does the normalisation automatically
*
* @param out the receiving dual quaternion
* @param a the dual quaternion to rotate
* @param axis the axis to rotate around
* @param rad how far the rotation should be
* @returns out
*/
function rotateAroundAxis(out, a, axis, rad) {
	if (Math.abs(rad) < 1e-6) return copy$3(out, a);
	const axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
	rad = rad * .5;
	const s = Math.sin(rad);
	const bx = s * axis[0] / axisLength;
	const by = s * axis[1] / axisLength;
	const bz = s * axis[2] / axisLength;
	const bw = Math.cos(rad);
	const ax1 = a[0];
	const ay1 = a[1];
	const az1 = a[2];
	const aw1 = a[3];
	out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	const ax = a[4];
	const ay = a[5];
	const az = a[6];
	const aw = a[7];
	out[4] = ax * bw + aw * bx + ay * bz - az * by;
	out[5] = ay * bw + aw * by + az * bx - ax * bz;
	out[6] = az * bw + aw * bz + ax * by - ay * bx;
	out[7] = aw * bw - ax * bx - ay * by - az * bz;
	return out;
}
/**
* Adds two dual quat's
*
* @param out the receiving dual quaternion
* @param a the first operand
* @param b the second operand
* @returns out
* @function
*/
function add$2(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	out[3] = a[3] + b[3];
	out[4] = a[4] + b[4];
	out[5] = a[5] + b[5];
	out[6] = a[6] + b[6];
	out[7] = a[7] + b[7];
	return out;
}
/**
* Multiplies two dual quat's
*
* @param out the receiving dual quaternion
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply$2(out, a, b) {
	const ax0 = a[0];
	const ay0 = a[1];
	const az0 = a[2];
	const aw0 = a[3];
	const bx1 = b[4];
	const by1 = b[5];
	const bz1 = b[6];
	const bw1 = b[7];
	const ax1 = a[4];
	const ay1 = a[5];
	const az1 = a[6];
	const aw1 = a[7];
	const bx0 = b[0];
	const by0 = b[1];
	const bz0 = b[2];
	const bw0 = b[3];
	out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
	out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
	out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
	out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
	out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
	out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
	out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
	out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
	return out;
}
/**
* Alias for {@link quat2.multiply}
* @function
*/
const mul$2 = multiply$2;
/**
* Scales a dual quat by a scalar number
*
* @param out the receiving dual quat
* @param a the dual quat to scale
* @param b amount to scale the dual quat by
* @returns out
* @function
*/
function scale$3(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	out[3] = a[3] * b;
	out[4] = a[4] * b;
	out[5] = a[5] * b;
	out[6] = a[6] * b;
	out[7] = a[7] * b;
	return out;
}
/**
* Calculates the dot product of two dual quat's (The dot product of the real parts)
*
* @param a the first operand
* @param b the second operand
* @returns dot product of a and b
* @function
*/
const dot = dot$1;
/**
* Performs a linear interpolation between two dual quats's
* NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
*
* @param out the receiving dual quat
* @param a the first operand
* @param b the second operand
* @param t interpolation amount, in the range [0-1], between the two inputs
* @returns out
*/
function lerp$2(out, a, b, t) {
	const mt = 1 - t;
	if (dot(a, b) < 0) t = -t;
	out[0] = a[0] * mt + b[0] * t;
	out[1] = a[1] * mt + b[1] * t;
	out[2] = a[2] * mt + b[2] * t;
	out[3] = a[3] * mt + b[3] * t;
	out[4] = a[4] * mt + b[4] * t;
	out[5] = a[5] * mt + b[5] * t;
	out[6] = a[6] * mt + b[6] * t;
	out[7] = a[7] * mt + b[7] * t;
	return out;
}
/**
* Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
*
* @param out the receiving dual quaternion
* @param a dual quat to calculate inverse of
* @returns out
*/
function invert$2(out, a) {
	const sqlen = squaredLength(a);
	out[0] = -a[0] / sqlen;
	out[1] = -a[1] / sqlen;
	out[2] = -a[2] / sqlen;
	out[3] = a[3] / sqlen;
	out[4] = -a[4] / sqlen;
	out[5] = -a[5] / sqlen;
	out[6] = -a[6] / sqlen;
	out[7] = a[7] / sqlen;
	return out;
}
/**
* Calculates the conjugate of a dual quat
* If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
*
* @param out the receiving quaternion
* @param a quat to calculate conjugate of
* @returns out
*/
function conjugate(out, a) {
	out[0] = -a[0];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = a[3];
	out[4] = -a[4];
	out[5] = -a[5];
	out[6] = -a[6];
	out[7] = a[7];
	return out;
}
/**
* Calculates the length of a dual quat
*
* @param a dual quat to calculate length of
* @returns length of a
* @function
*/
const length = length$1;
/**
* Alias for {@link quat2.length}
* @function
*/
const len = length;
/**
* Calculates the squared length of a dual quat
*
* @param a dual quat to calculate squared length of
* @returns squared length of a
* @function
*/
const squaredLength = squaredLength$1;
/**
* Alias for {@link quat2.squaredLength}
* @function
*/
const sqrLen = squaredLength;
/**
* Normalize a dual quat
*
* @param out the receiving dual quaternion
* @param a dual quaternion to normalize
* @returns out
* @function
*/
function normalize$1(out, a) {
	let magnitude = squaredLength(a);
	if (magnitude > 0) {
		magnitude = Math.sqrt(magnitude);
		const a0 = a[0] / magnitude;
		const a1 = a[1] / magnitude;
		const a2 = a[2] / magnitude;
		const a3 = a[3] / magnitude;
		const b0 = a[4];
		const b1 = a[5];
		const b2 = a[6];
		const b3 = a[7];
		const a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
		out[0] = a0;
		out[1] = a1;
		out[2] = a2;
		out[3] = a3;
		out[4] = (b0 - a0 * a_dot_b) / magnitude;
		out[5] = (b1 - a1 * a_dot_b) / magnitude;
		out[6] = (b2 - a2 * a_dot_b) / magnitude;
		out[7] = (b3 - a3 * a_dot_b) / magnitude;
	}
	return out;
}
/**
* Returns a string representation of a dual quaternion
*
* @param a dual quaternion to represent as a string
* @returns string representation of the dual quat
*/
function str$3(a) {
	return `quat2(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}, ${a[4]}, ${a[5]}, ${a[6]}, ${a[7]})`;
}
/**
* Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
*
* @param a the first dual quaternion.
* @param b the second dual quaternion.
* @returns true if the dual quaternions are equal, false otherwise.
*/
function exactEquals$3(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
* Returns whether or not the dual quaternions have approximately the same elements in the same position.
*
* @param a the first dual quat.
* @param b the second dual quat.
* @returns true if the dual quats are equal, false otherwise.
*/
function equals$4(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const a6 = a[6];
	const a7 = a[7];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	const b4 = b[4];
	const b5 = b[5];
	const b6 = b[6];
	const b7 = b[7];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= 1e-6 * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= 1e-6 * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= 1e-6 * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= 1e-6 * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= 1e-6 * Math.max(1, Math.abs(a7), Math.abs(b7));
}
//#endregion
//#region src/core/mat2.ts
var mat2_exports = /* @__PURE__ */ __exportAll({
	LDU: () => LDU,
	add: () => add$1,
	adjoint: () => adjoint,
	clone: () => clone$2,
	copy: () => copy$2,
	create: () => create$2,
	determinant: () => determinant$1,
	equals: () => equals$3,
	exactEquals: () => exactEquals$2,
	frob: () => frob$1,
	fromRotation: () => fromRotation$1,
	fromScaling: () => fromScaling$1,
	fromValues: () => fromValues$2,
	identity: () => identity$1,
	invert: () => invert$1,
	mul: () => mul$1,
	multiply: () => multiply$1,
	multiplyScalar: () => multiplyScalar$1,
	multiplyScalarAndAdd: () => multiplyScalarAndAdd$1,
	rotate: () => rotate$1,
	scale: () => scale$2,
	set: () => set$2,
	str: () => str$2,
	sub: () => sub$1,
	subtract: () => subtract$1,
	transpose: () => transpose
});
/**
* Creates a new identity mat2
*
* @returns a new 2x2 matrix
*/
function create$2() {
	return [
		1,
		0,
		0,
		1
	];
}
/**
* Creates a new mat2 initialized with values from an existing matrix
*
* @param a matrix to clone
* @returns a new 2x2 matrix
*/
function clone$2(a) {
	const out = create$2();
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}
/**
* Copy the values from one mat2 to another
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function copy$2(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}
/**
* Set a mat2 to the identity matrix
*
* @param out the receiving matrix
* @returns out
*/
function identity$1(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	return out;
}
/**
* Create a new mat2 with the given values
*
* @param m00 Component in column 0, row 0 position (index 0)
* @param m01 Component in column 0, row 1 position (index 1)
* @param m10 Component in column 1, row 0 position (index 2)
* @param m11 Component in column 1, row 1 position (index 3)
* @returns out A new 2x2 matrix
*/
function fromValues$2(m00, m01, m10, m11) {
	const out = create$2();
	out[0] = m00;
	out[1] = m01;
	out[2] = m10;
	out[3] = m11;
	return out;
}
/**
* Set the components of a mat2 to the given values
*
* @param out the receiving matrix
* @param m00 Component in column 0, row 0 position (index 0)
* @param m01 Component in column 0, row 1 position (index 1)
* @param m10 Component in column 1, row 0 position (index 2)
* @param m11 Component in column 1, row 1 position (index 3)
* @returns out
*/
function set$2(out, m00, m01, m10, m11) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m10;
	out[3] = m11;
	return out;
}
/**
* Transpose the values of a mat2
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function transpose(out, a) {
	if (out === a) {
		const a1 = a[1];
		out[1] = a[2];
		out[2] = a1;
	} else {
		out[0] = a[0];
		out[1] = a[2];
		out[2] = a[1];
		out[3] = a[3];
	}
	return out;
}
/**
* Inverts a mat2
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out, or null if source matrix is not invertible
*/
function invert$1(out, a) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	let det = a0 * a3 - a2 * a1;
	if (!det) return null;
	det = 1 / det;
	out[0] = a3 * det;
	out[1] = -a1 * det;
	out[2] = -a2 * det;
	out[3] = a0 * det;
	return out;
}
/**
* Calculates the adjugate of a mat2
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out
*/
function adjoint(out, a) {
	const a0 = a[0];
	out[0] = a[3];
	out[1] = -a[1];
	out[2] = -a[2];
	out[3] = a0;
	return out;
}
/**
* Calculates the determinant of a mat2
*
* @param a the source matrix
* @returns determinant of a
*/
function determinant$1(a) {
	return a[0] * a[3] - a[2] * a[1];
}
/**
* Multiplies two mat2's
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply$1(out, a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	out[0] = a0 * b0 + a2 * b1;
	out[1] = a1 * b0 + a3 * b1;
	out[2] = a0 * b2 + a2 * b3;
	out[3] = a1 * b2 + a3 * b3;
	return out;
}
/**
* Rotates a mat2 by the given angle
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param rad the angle to rotate the matrix by
* @returns out
*/
function rotate$1(out, a, rad) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = a0 * c + a2 * s;
	out[1] = a1 * c + a3 * s;
	out[2] = a0 * -s + a2 * c;
	out[3] = a1 * -s + a3 * c;
	return out;
}
/**
* Scales the mat2 by the dimensions in the given vec2
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param v the vec2 to scale the matrix by
* @returns out
**/
function scale$2(out, a, v) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const v0 = v[0];
	const v1 = v[1];
	out[0] = a0 * v0;
	out[1] = a1 * v0;
	out[2] = a2 * v1;
	out[3] = a3 * v1;
	return out;
}
/**
* Creates a matrix from a given angle
* This is equivalent to (but much faster than):
*
*     mat2.identity(dest);
*     mat2.rotate(dest, dest, rad);
*
* @param out mat2 receiving operation result
* @param rad the angle to rotate the matrix by
* @returns out
*/
function fromRotation$1(out, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = c;
	out[1] = s;
	out[2] = -s;
	out[3] = c;
	return out;
}
/**
* Creates a matrix from a vector scaling
* This is equivalent to (but much faster than):
*
*     mat2.identity(dest);
*     mat2.scale(dest, dest, vec);
*
* @param out mat2 receiving operation result
* @param v Scaling vector
* @returns out
*/
function fromScaling$1(out, v) {
	out[0] = v[0];
	out[1] = 0;
	out[2] = 0;
	out[3] = v[1];
	return out;
}
/**
* Returns a string representation of a mat2
*
* @param a matrix to represent as a string
* @returns string representation of the matrix
*/
function str$2(a) {
	return `mat2(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
}
/**
* Returns Frobenius norm of a mat2
*
* @param a the matrix to calculate Frobenius norm of
* @returns Frobenius norm
*/
function frob$1(a) {
	return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
}
/**
* Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
* @param L the lower triangular matrix
* @param D the diagonal matrix
* @param U the upper triangular matrix
* @param a the input matrix to factorize
*/
function LDU(L, D, U, a) {
	L[2] = a[2] / a[0];
	U[0] = a[0];
	U[1] = a[1];
	U[3] = a[3] - L[2] * U[1];
	return [
		L,
		D,
		U
	];
}
/**
* Adds two mat2's
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
	return out;
}
/**
* Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
*
* @param a The first matrix.
* @param b The second matrix.
* @returns True if the matrices are equal, false otherwise.
*/
function exactEquals$2(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
* Returns whether or not the matrices have approximately the same elements in the same position.
*
* @param a The first matrix.
* @param b The second matrix.
* @returns True if the matrices are equal, false otherwise.
*/
function equals$3(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= 1e-6 * Math.max(1, Math.abs(a3), Math.abs(b3));
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
	return out;
}
/**
* Adds two mat2's after multiplying each element of the second operand by a scalar value.
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
	return out;
}
/**
* Alias for {@link mat2.multiply}
*/
const mul$1 = multiply$1;
/**
* Alias for {@link mat2.subtract}
*/
const sub$1 = subtract$1;
//#endregion
//#region src/core/mat2d.ts
var mat2d_exports = /* @__PURE__ */ __exportAll({
	add: () => add,
	clone: () => clone$1,
	copy: () => copy$1,
	create: () => create$1,
	determinant: () => determinant,
	equals: () => equals$2,
	exactEquals: () => exactEquals$1,
	frob: () => frob,
	fromRotation: () => fromRotation,
	fromScaling: () => fromScaling,
	fromTranslation: () => fromTranslation,
	fromValues: () => fromValues$1,
	identity: () => identity,
	invert: () => invert,
	mul: () => mul,
	multiply: () => multiply,
	multiplyScalar: () => multiplyScalar,
	multiplyScalarAndAdd: () => multiplyScalarAndAdd,
	rotate: () => rotate,
	scale: () => scale$1,
	set: () => set$1,
	str: () => str$1,
	sub: () => sub,
	subtract: () => subtract,
	translate: () => translate
});
/**
* Creates a new identity mat2d
*
* @returns a new 2x3 matrix
*/
function create$1() {
	return [
		1,
		0,
		0,
		1,
		0,
		0
	];
}
/**
* Creates a new mat2d initialized with values from an existing matrix
*
* @param a matrix to clone
* @returns a new 2x3 matrix
*/
function clone$1(a) {
	const out = create$1();
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	out[4] = a[4];
	out[5] = a[5];
	return out;
}
/**
* Copy the values from one mat2d to another
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
	return out;
}
/**
* Set a mat2d to the identity matrix
*
* @param out the receiving matrix
* @returns out
*/
function identity(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	out[4] = 0;
	out[5] = 0;
	return out;
}
/**
* Create a new mat2d with the given values
*
* @param a Component A (index 0)
* @param b Component B (index 1)
* @param c Component C (index 2)
* @param d Component D (index 3)
* @param tx Component TX (index 4)
* @param ty Component TY (index 5)
* @returns A new mat2d
*/
function fromValues$1(a, b, c, d, tx, ty) {
	const out = create$1();
	out[0] = a;
	out[1] = b;
	out[2] = c;
	out[3] = d;
	out[4] = tx;
	out[5] = ty;
	return out;
}
/**
* Set the components of a mat2d to the given values
*
* @param out the receiving matrix
* @param a Component A (index 0)
* @param b Component B (index 1)
* @param c Component C (index 2)
* @param d Component D (index 3)
* @param tx Component TX (index 4)
* @param ty Component TY (index 5)
* @returns out
*/
function set$1(out, a, b, c, d, tx, ty) {
	out[0] = a;
	out[1] = b;
	out[2] = c;
	out[3] = d;
	out[4] = tx;
	out[5] = ty;
	return out;
}
/**
* Inverts a mat2d
*
* @param out the receiving matrix
* @param a the source matrix
* @returns out, or null if source matrix is not invertible
*/
function invert(out, a) {
	const aa = a[0];
	const ab = a[1];
	const ac = a[2];
	const ad = a[3];
	const atx = a[4];
	const aty = a[5];
	let det = aa * ad - ab * ac;
	if (!det) return null;
	det = 1 / det;
	out[0] = ad * det;
	out[1] = -ab * det;
	out[2] = -ac * det;
	out[3] = aa * det;
	out[4] = (ac * aty - ad * atx) * det;
	out[5] = (ab * atx - aa * aty) * det;
	return out;
}
/**
* Calculates the determinant of a mat2d
*
* @param a the source matrix
* @returns determinant of a
*/
function determinant(a) {
	return a[0] * a[3] - a[1] * a[2];
}
/**
* Multiplies two mat2d's
*
* @param out the receiving matrix
* @param a the first operand
* @param b the second operand
* @returns out
*/
function multiply(out, a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	const b4 = b[4];
	const b5 = b[5];
	out[0] = a0 * b0 + a2 * b1;
	out[1] = a1 * b0 + a3 * b1;
	out[2] = a0 * b2 + a2 * b3;
	out[3] = a1 * b2 + a3 * b3;
	out[4] = a0 * b4 + a2 * b5 + a4;
	out[5] = a1 * b4 + a3 * b5 + a5;
	return out;
}
/**
* Rotates a mat2d by the given angle
*
* @param out the receiving matrix
* @param a the matrix to rotate
* @param rad the angle to rotate the matrix by
* @returns out
*/
function rotate(out, a, rad) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = a0 * c + a2 * s;
	out[1] = a1 * c + a3 * s;
	out[2] = a0 * -s + a2 * c;
	out[3] = a1 * -s + a3 * c;
	out[4] = a4;
	out[5] = a5;
	return out;
}
/**
* Scales the mat2d by the dimensions in the given vec2
*
* @param out the receiving matrix
* @param a the matrix to translate
* @param v the vec2 to scale the matrix by
* @returns out
**/
function scale$1(out, a, v) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const v0 = v[0];
	const v1 = v[1];
	out[0] = a0 * v0;
	out[1] = a1 * v0;
	out[2] = a2 * v1;
	out[3] = a3 * v1;
	out[4] = a4;
	out[5] = a5;
	return out;
}
/**
* Translates the mat2d by the dimensions in the given vec2
*
* @param out the receiving matrix
* @param a the matrix to translate
* @param v the vec2 to translate the matrix by
* @returns out
**/
function translate(out, a, v) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const v0 = v[0];
	const v1 = v[1];
	out[0] = a0;
	out[1] = a1;
	out[2] = a2;
	out[3] = a3;
	out[4] = a0 * v0 + a2 * v1 + a4;
	out[5] = a1 * v0 + a3 * v1 + a5;
	return out;
}
/**
* Creates a matrix from a given angle
* This is equivalent to (but much faster than):
*
*     mat2d.identity(dest);
*     mat2d.rotate(dest, dest, rad);
*
* @param out mat2d receiving operation result
* @param rad the angle to rotate the matrix by
* @returns out
*/
function fromRotation(out, rad) {
	const s = Math.sin(rad);
	const c = Math.cos(rad);
	out[0] = c;
	out[1] = s;
	out[2] = -s;
	out[3] = c;
	out[4] = 0;
	out[5] = 0;
	return out;
}
/**
* Creates a matrix from a vector scaling
* This is equivalent to (but much faster than):
*
*     mat2d.identity(dest);
*     mat2d.scale(dest, dest, vec);
*
* @param out mat2d receiving operation result
* @param v Scaling vector
* @returns out
*/
function fromScaling(out, v) {
	out[0] = v[0];
	out[1] = 0;
	out[2] = 0;
	out[3] = v[1];
	out[4] = 0;
	out[5] = 0;
	return out;
}
/**
* Creates a matrix from a vector translation
* This is equivalent to (but much faster than):
*
*     mat2d.identity(dest);
*     mat2d.translate(dest, dest, vec);
*
* @param out mat2d receiving operation result
* @param v Translation vector
* @returns out
*/
function fromTranslation(out, v) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 1;
	out[4] = v[0];
	out[5] = v[1];
	return out;
}
/**
* Returns a string representation of a mat2d
*
* @param a matrix to represent as a string
* @returns string representation of the matrix
*/
function str$1(a) {
	return `mat2d(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}, ${a[4]}, ${a[5]})`;
}
/**
* Returns Frobenius norm of a mat2d
*
* @param a the matrix to calculate Frobenius norm of
* @returns Frobenius norm
*/
function frob(a) {
	return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + 1);
}
/**
* Adds two mat2d's
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
	return out;
}
/**
* Adds two mat2d's after multiplying each element of the second operand by a scalar value.
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
	return out;
}
/**
* Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
*
* @param a The first matrix.
* @param b The second matrix.
* @returns True if the matrices are equal, false otherwise.
*/
function exactEquals$1(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
* Returns whether or not the matrices have approximately the same elements in the same position.
*
* @param a The first matrix.
* @param b The second matrix.
* @returns True if the matrices are equal, false otherwise.
*/
function equals$2(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	const b4 = b[4];
	const b5 = b[5];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= 1e-6 * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= 1e-6 * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= 1e-6 * Math.max(1, Math.abs(a5), Math.abs(b5));
}
/**
* Alias for {@link mat2d.multiply}
*/
const mul = multiply;
/**
* Alias for {@link mat2d.subtract}
*/
const sub = subtract;
//#endregion
//#region src/core/spherical.ts
var spherical_exports = /* @__PURE__ */ __exportAll({
	angleTo: () => angleTo,
	clone: () => clone,
	copy: () => copy,
	create: () => create,
	equals: () => equals$1,
	exactEquals: () => exactEquals,
	fromValues: () => fromValues,
	fromVec2: () => fromVec2,
	fromVec3: () => fromVec3,
	lerp: () => lerp$1,
	makeSafe: () => makeSafe,
	normalize: () => normalize,
	scale: () => scale,
	set: () => set,
	setFromVec3: () => setFromVec3,
	str: () => str,
	toVec2: () => toVec2,
	toVec3: () => toVec3
});
/**
* Creates a new spherical coordinate at r=1, theta=0, phi=0
*
* @returns a new Spherical
*/
function create() {
	return [
		1,
		0,
		0
	];
}
/**
* Creates a new Spherical initialized with the given values
*
* @param r radial distance
* @param theta azimuthal angle in the XZ plane from +Z (radians)
* @param phi polar angle from +Y axis (radians)
* @returns a new Spherical
*/
function fromValues(r, theta, phi) {
	const out = [
		0,
		0,
		0
	];
	out[0] = r;
	out[1] = theta;
	out[2] = phi;
	return out;
}
/**
* Creates a new Spherical initialized with values from an existing one
*
* @param a the source Spherical
* @returns a new Spherical
*/
function clone(a) {
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
* Copies values from one Spherical to another
*
* @param out the receiving Spherical
* @param a the source Spherical
* @returns out
*/
function copy(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	return out;
}
/**
* Sets the components of a Spherical
*
* @param out the receiving Spherical
* @param r radial distance
* @param theta azimuthal angle in the XZ plane from +Z (radians)
* @param phi polar angle from +Y axis (radians)
* @returns out
*/
function set(out, r, theta, phi) {
	out[0] = r;
	out[1] = theta;
	out[2] = phi;
	return out;
}
/**
* Sets r=1, preserving the angles. No-op if r is already zero.
*
* @param out the receiving Spherical
* @param a the source Spherical
* @returns out
*/
function normalize(out, a) {
	out[0] = 1;
	out[1] = a[1];
	out[2] = a[2];
	return out;
}
/**
* Scales the radial distance r by a scalar
*
* @param out the receiving Spherical
* @param a the source Spherical
* @param s scalar to multiply r by
* @returns out
*/
function scale(out, a, s) {
	out[0] = a[0] * s;
	out[1] = a[1];
	out[2] = a[2];
	return out;
}
/**
* Wraps an angle (in radians) into the range [-π, π].
*/
function wrapAngle(a) {
	const TAU = Math.PI * 2;
	return a - TAU * Math.floor((a + Math.PI) / TAU);
}
/**
* Linearly interpolates between two Spherical coordinates taking the shortest
* angular path for theta and phi.
*
* @param out the receiving Spherical
* @param a the first operand
* @param b the second operand
* @param t interpolation factor in [0, 1]
* @returns out
*/
function lerp$1(out, a, b, t) {
	out[0] = lerp(a[0], b[0], t);
	out[1] = a[1] + wrapAngle(b[1] - a[1]) * t;
	out[2] = a[2] + wrapAngle(b[2] - a[2]) * t;
	return out;
}
/**
* Sets a Spherical from Cartesian Vec3 coordinates (Three.js / OpenGL convention):
*   r     = sqrt(x² + y² + z²)
*   theta = atan2(x, z)   (azimuthal angle in XZ plane from +Z)
*   phi   = acos(y / r)   (polar angle from +Y)
*
* @param out the receiving Spherical
* @param v the source Vec3
* @returns out
*/
function setFromVec3(out, v) {
	const x = v[0];
	const y = v[1];
	const z = v[2];
	const r = Math.sqrt(x * x + y * y + z * z);
	out[0] = r;
	out[1] = r === 0 ? 0 : Math.atan2(x, z);
	out[2] = r === 0 ? 0 : Math.acos(Math.max(-1, Math.min(1, y / r)));
	return out;
}
/** @alias setFromVec3 */
const fromVec3 = setFromVec3;
/**
* Clamps phi to the range [EPSILON, π - EPSILON] to avoid coordinate
* singularities at the poles (gimbal lock / division by zero).
* r and theta are left unchanged.
*
* @param out the receiving Spherical
* @param a the source Spherical
* @returns out
*/
function makeSafe(out, a) {
	const EPS = EPSILON;
	out[0] = a[0];
	out[1] = a[1];
	out[2] = Math.max(EPS, Math.min(Math.PI - EPS, a[2]));
	return out;
}
/**
* Converts spherical coordinates to a Cartesian Vec3 (Three.js / OpenGL convention):
*   x = r * sin(phi) * sin(theta)
*   y = r * cos(phi)
*   z = r * sin(phi) * cos(theta)
*
* @param out the receiving Vec3
* @param a the source Spherical
* @returns out
*/
function toVec3(out, a) {
	const r = a[0];
	const theta = a[1];
	const phi = a[2];
	const sinPhi = Math.sin(phi);
	out[0] = r * sinPhi * Math.sin(theta);
	out[1] = r * Math.cos(phi);
	out[2] = r * sinPhi * Math.cos(theta);
	return out;
}
/**
* Converts a Vec2 (x, z) in the horizontal XZ plane to spherical coordinates.
* The point is treated as lying on the equator (phi = π/2, y = 0).
*
* @param out the receiving Spherical
* @param v the source Vec2 interpreted as (x, z)
* @returns out
*/
function fromVec2(out, v) {
	const x = v[0];
	const z = v[1];
	const r = Math.sqrt(x * x + z * z);
	out[0] = r;
	out[1] = r === 0 ? 0 : Math.atan2(x, z);
	out[2] = Math.PI / 2;
	return out;
}
/**
* Projects spherical coordinates onto the XZ plane, returning a Vec2 (x, z).
* Equivalent to taking the horizontal footprint of the 3D point.
*
* @param out the receiving Vec2
* @param a the source Spherical
* @returns out
*/
function toVec2(out, a) {
	const r = a[0];
	const theta = a[1];
	const phi = a[2];
	const sinPhi = Math.sin(phi);
	out[0] = r * sinPhi * Math.sin(theta);
	out[1] = r * sinPhi * Math.cos(theta);
	return out;
}
/**
* Returns true if two Spherical coordinates are approximately equal,
* within an absolute/relative tolerance of EPSILON.
*
* @param a the first Spherical
* @param b the second Spherical
* @returns true if approximately equal
*/
function equals$1(a, b) {
	return equals(a[0], b[0]) && equals(a[1], b[1]) && equals(a[2], b[2]);
}
/**
* Returns true if two Spherical coordinates are exactly equal (===).
*
* @param a the first Spherical
* @param b the second Spherical
* @returns true if exactly equal
*/
function exactEquals(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
* Returns a string representation of a Spherical
*
* @param a the source Spherical
* @returns string representation
*/
function str(a) {
	return `Spherical(${a[0]}, ${a[1]}, ${a[2]})`;
}
/**
* Returns the great-circle angle (in radians) between two spherical coordinates,
* ignoring r. Equivalent to the central angle between the two directions on a
* unit sphere.
*
* Uses the numerically stable haversine formula.
*
* @param a the first Spherical
* @param b the second Spherical
* @returns angle in radians in [0, π]
*/
function angleTo(a, b) {
	const phiA = a[2];
	const phiB = b[2];
	const dTheta = b[1] - a[1];
	const hav = Math.sin((phiB - phiA) / 2) ** 2 + Math.sin(phiA) * Math.sin(phiB) * Math.sin(dTheta / 2) ** 2;
	return 2 * Math.asin(Math.sqrt(Math.max(0, Math.min(1, hav))));
}
//#endregion
export { EPSILON, clamp, degreesToRadians, deltaAngle, equals, euler_exports as euler, fade, lerp, mat2_exports as mat2, mat2d_exports as mat2d, mat3_exports as mat3, mat4_exports as mat4, quat_exports as quat, quat2_exports as quat2, radiansToDegrees, remap, remapClamp, repeat, round, spherical_exports as spherical, vec2_exports as vec2, vec3_exports as vec3, vec4_exports as vec4 };

//# sourceMappingURL=index.js.map