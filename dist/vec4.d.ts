import type { Mat4, Quat, Vec4 } from './types.js';
/**
 * Creates a new, empty vec4
 *
 * @returns a new 4D vector
 */
export declare function create(): Vec4;
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param a vector to clone
 * @returns a new 4D vector
 */
export declare function clone(a: Vec4): Vec4;
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param x X component
 * @param y Y component
 * @param z Z component
 * @param w W component
 * @returns a new 4D vector
 */
export declare function fromValues(x: number, y: number, z: number, w: number): Vec4;
/**
 * Copy the values from one vec4 to another
 *
 * @param out the receiving vector
 * @param a the source vector
 * @returns out
 */
export declare function copy(out: Vec4, a: Vec4): Vec4;
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
export declare function set(out: Vec4, x: number, y: number, z: number, w: number): Vec4;
/**
 * Adds two vec4's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function add(out: Vec4, a: Vec4, b: Vec4): Vec4;
/**
 * Subtracts vector b from vector a
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function subtract(out: Vec4, a: Vec4, b: Vec4): Vec4;
/**
 * Multiplies two vec4's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Vec4, a: Vec4, b: Vec4): Vec4;
/**
 * Divides two vec4's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function divide(out: Vec4, a: Vec4, b: Vec4): Vec4;
/**
 * Math.ceil the components of a vec4
 *
 * @param out the receiving vector
 * @param a vector to ceil
 * @returns out
 */
export declare function ceil(out: Vec4, a: Vec4): Vec4;
/**
 * Math.floor the components of a vec4
 *
 * @param out the receiving vector
 * @param a vector to floor
 * @returns out
 */
export declare function floor(out: Vec4, a: Vec4): Vec4;
/**
 * Returns the minimum of two vec4's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function min(out: Vec4, a: Vec4, b: Vec4): Vec4;
/**
 * Returns the maximum of two vec4's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function max(out: Vec4, a: Vec4, b: Vec4): Vec4;
/**
 * symmetric round the components of a vec4
 *
 * @param out the receiving vector
 * @param a vector to round
 * @returns out
 */
export declare function round(out: Vec4, a: Vec4): Vec4;
/**
 * Scales a vec4 by a scalar number
 *
 * @param out the receiving vector
 * @param a the vector to scale
 * @param b amount to scale the vector by
 * @returns out
 */
export declare function scale(out: Vec4, a: Vec4, b: number): Vec4;
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param scale the amount to scale b by before adding
 * @returns out
 */
export declare function scaleAndAdd(out: Vec4, a: Vec4, b: Vec4, scale: number): Vec4;
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns distance between a and b
 */
export declare function distance(a: Vec4, b: Vec4): number;
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns squared distance between a and b
 */
export declare function squaredDistance(a: Vec4, b: Vec4): number;
/**
 * Calculates the length of a vec4
 *
 * @param a vector to calculate length of
 * @returns length of a
 */
export declare function length(a: Vec4): number;
/**
 * Calculates the squared length of a vec4
 *
 * @param a vector to calculate squared length of
 * @returns squared length of a
 */
export declare function squaredLength(a: Vec4): number;
/**
 * Negates the components of a vec4
 *
 * @param out the receiving vector
 * @param a vector to negate
 * @returns out
 */
export declare function negate(out: Vec4, a: Vec4): Vec4;
/**
 * Returns the inverse of the components of a vec4
 *
 * @param out the receiving vector
 * @param a vector to invert
 * @returns out
 */
export declare function inverse(out: Vec4, a: Vec4): Vec4;
/**
 * Normalize a vec4
 *
 * @param out the receiving vector
 * @param a vector to normalize
 * @returns out
 */
export declare function normalize(out: Vec4, a: Vec4): Vec4;
/**
 * Calculates the dot product of two vec4's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns dot product of a and b
 */
export declare function dot(a: Vec4, b: Vec4): number;
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param out the receiving vector
 * @param u the first vector
 * @param v the second vector
 * @param w the third vector
 * @returns result
 */
export declare function cross(out: Vec4, u: Vec4, v: Vec4, w: Vec4): Vec4;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation amount, in the range [0-1], between the two inputs
 * @returns out
 */
export declare function lerp(out: Vec4, a: Vec4, b: Vec4, t: number): Vec4;
/**
 * Transforms the vec4 with a mat4.
 *
 * @param out the receiving vector
 * @param a the vector to transform
 * @param m matrix to transform with
 * @returns out
 */
export declare function transformMat4(out: Vec4, a: Vec4, m: Mat4): Vec4;
/**
 * Transforms the vec4 with a quat
 *
 * @param out the receiving vector
 * @param a the vector to transform
 * @param q quaternion to transform with
 * @returns out
 */
export declare function transformQuat(out: Vec4, a: Vec4, q: Quat): Vec4;
/**
 * Set the components of a vec4 to zero
 *
 * @param out the receiving vector
 * @returns out
 */
export declare function zero(out: Vec4): Vec4;
/**
 * Returns a string representation of a vector
 *
 * @param a vector to represent as a string
 * @returns string representation of the vector
 */
export declare function str(a: Vec4): string;
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns True if the vectors are equal, false otherwise.
 */
export declare function exactEquals(a: Vec4, b: Vec4): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns True if the vectors are equal, false otherwise.
 */
export declare function equals(a: Vec4, b: Vec4): boolean;
/**
 * Returns whether or not the vector is finite
 * @param a vector to test
 * @returns whether or not the vector is finite
 */
export declare function finite(a: Vec4): boolean;
/**
 * Alias for {@link subtract}
 */
export declare const sub: typeof subtract;
/**
 * Alias for {@link multiply}
 */
export declare const mul: typeof multiply;
/**
 * Alias for {@link divide}
 */
export declare const div: typeof divide;
/**
 * Alias for {@link distance}
 */
export declare const dist: typeof distance;
/**
 * Alias for {@link squaredDistance}
 */
export declare const sqrDist: typeof squaredDistance;
/**
 * Alias for {@link length}
 */
export declare const len: typeof length;
/**
 * Alias for {@link squaredLength}
 */
export declare const sqrLen: typeof squaredLength;
