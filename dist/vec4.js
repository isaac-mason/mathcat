import { round as round$1, EPSILON } from './common.js';

/**
 * Creates a new, empty vec4
 *
 * @returns a new 4D vector
 */
function create() {
    return [0, 0, 0, 0];
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param a vector to clone
 * @returns a new 4D vector
 */
function clone(a) {
    const out = create();
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
function fromValues(x, y, z, w) {
    const out = create();
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
function copy(out, a) {
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
function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
/**
 * Adds two vec4's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
function add(out, a, b) {
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
function subtract(out, a, b) {
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
function multiply(out, a, b) {
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
function round(out, a) {
    out[0] = round$1(a[0]);
    out[1] = round$1(a[1]);
    out[2] = round$1(a[2]);
    out[3] = round$1(a[3]);
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
function scale(out, a, b) {
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
function length(a) {
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
function squaredLength(a) {
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
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
}
/**
 * Normalize a vec4
 *
 * @param out the receiving vector
 * @param a vector to normalize
 * @returns out
 */
function normalize(out, a) {
    const x = a[0];
    const y = a[1];
    const z = a[2];
    const w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
    }
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
function dot(a, b) {
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
function lerp(out, a, b, t) {
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
    // calculate quat * vec
    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;
    // calculate result * inverse quat
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
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param a vector to represent as a string
 * @returns string representation of the vector
 */
function str(a) {
    return `vec4(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
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
    const a2 = a[2];
    const a3 = a[3];
    const b0 = b[0];
    const b1 = b[1];
    const b2 = b[2];
    const b3 = b[3];
    return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
        Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
        Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)));
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
 * Alias for {@link length}
 */
const len = length;
/**
 * Alias for {@link squaredLength}
 */
const sqrLen = squaredLength;

export { add, ceil, clone, copy, create, cross, dist, distance, div, divide, dot, equals, exactEquals, finite, floor, fromValues, inverse, len, length, lerp, max, min, mul, multiply, negate, normalize, round, scale, scaleAndAdd, set, sqrDist, sqrLen, squaredDistance, squaredLength, str, sub, subtract, transformMat4, transformQuat, zero };
//# sourceMappingURL=vec4.js.map
