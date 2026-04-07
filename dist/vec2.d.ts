import type { Mat2, Mat2d, Mat3, Mat4, Vec2, Vec3 } from './types';
/**
 * Creates a new, empty vec2
 *
 * @returns a new 2D vector
 */
export declare function create(): Vec2;
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param a vector to clone
 * @returns a new 2D vector
 */
export declare function clone(a: Vec2): Vec2;
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param x X component
 * @param y Y component
 * @returns a new 2D vector
 */
export declare function fromValues(x: number, y: number): Vec2;
/**
 * Copy the values from one vec2 to another
 *
 * @param out the receiving vector
 * @param a the source vector
 * @returns out
 */
export declare function copy(out: Vec2, a: Vec2): Vec2;
/**
 * Set the components of a vec2 to the given values
 *
 * @param out the receiving vector
 * @param x X component
 * @param y Y component
 * @returns out
 */
export declare function set(out: Vec2, x: number, y: number): Vec2;
/**
 * Adds two vec2's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function add(out: Vec2, a: Vec2, b: Vec2): Vec2;
/**
 * Adds a scalar value to all components of a vec2
 *
 * @param out the receiving vector
 * @param a the source vector
 * @param b the scalar value to add
 * @returns out
 */
export declare function addScalar(out: Vec2, a: Vec2, b: number): Vec2;
/**
 * Subtracts vector b from vector a
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function subtract(out: Vec2, a: Vec2, b: Vec2): Vec2;
/**
 * Subtracts a scalar value from all components of a vec2
 *
 * @param out the receiving vector
 * @param a the source vector
 * @param b the scalar value to subtract
 * @returns out
 */
export declare function subtractScalar(out: Vec2, a: Vec2, b: number): Vec2;
/**
 * Multiplies two vec2's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Vec2, a: Vec2, b: Vec2): Vec2;
/**
 * Divides two vec2's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function divide(out: Vec2, a: Vec2, b: Vec2): Vec2;
/**
 * Math.ceil the components of a vec2
 *
 * @param out the receiving vector
 * @param a vector to ceil
 * @returns out
 */
export declare function ceil(out: Vec2, a: Vec2): Vec2;
/**
 * Math.floor the components of a vec2
 *
 * @param out the receiving vector
 * @param a vector to floor
 * @returns out
 */
export declare function floor(out: Vec2, a: Vec2): Vec2;
/**
 * Returns the minimum of two vec2's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function min(out: Vec2, a: Vec2, b: Vec2): Vec2;
/**
 * Returns the maximum of two vec2's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function max(out: Vec2, a: Vec2, b: Vec2): Vec2;
/**
 * symmetric round the components of a vec2
 *
 * @param out the receiving vector
 * @param a vector to round
 * @returns out
 */
export declare function round(out: Vec2, a: Vec2): Vec2;
/**
 * Scales a vec2 by a scalar number
 *
 * @param out the receiving vector
 * @param a the vector to scale
 * @param b amount to scale the vector by
 * @returns out
 */
export declare function scale(out: Vec2, a: Vec2, b: number): Vec2;
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param scale the amount to scale b by before adding
 * @returns out
 */
export declare function scaleAndAdd(out: Vec2, a: Vec2, b: Vec2, scale: number): Vec2;
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns distance between a and b
 */
export declare function distance(a: Vec2, b: Vec2): number;
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns squared distance between a and b
 */
export declare function squaredDistance(a: Vec2, b: Vec2): number;
/**
 * Calculates the length of a vec2
 *
 * @param a vector to calculate length of
 * @returns length of a
 */
export declare function length(a: Vec2): number;
/**
 * Calculates the squared length of a vec2
 *
 * @param a vector to calculate squared length of
 * @returns squared length of a
 */
export declare function squaredLength(a: Vec2): number;
/**
 * Negates the components of a vec2
 *
 * @param out the receiving vector
 * @param a vector to negate
 * @returns out
 */
export declare function negate(out: Vec2, a: Vec2): Vec2;
/**
 * Returns the inverse of the components of a vec2
 *
 * @param out the receiving vector
 * @param a vector to invert
 * @returns out
 */
export declare function inverse(out: Vec2, a: Vec2): Vec2;
/**
 * Normalize a vec2
 *
 * @param out the receiving vector
 * @param a vector to normalize
 * @returns out
 */
export declare function normalize(out: Vec2, a: Vec2): Vec2;
/**
 * Calculates the dot product of two vec2's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns dot product of a and b
 */
export declare function dot(a: Vec2, b: Vec2): number;
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function cross(out: Vec3, a: Vec2, b: Vec2): Vec3;
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation amount, in the range [0-1], between the two inputs
 * @returns out
 */
export declare function lerp(out: Vec2, a: Vec2, b: Vec2, t: number): Vec2;
/**
 * Transforms the vec2 with a mat2
 *
 * @param out the receiving vector
 * @param a the vector to transform
 * @param m matrix to transform with
 * @returns out
 */
export declare function transformMat2(out: Vec2, a: Vec2, m: Mat2): Vec2;
/**
 * Transforms the vec2 with a mat2d
 *
 * @param out the receiving vector
 * @param a the vector to transform
 * @param m matrix to transform with
 * @returns out
 */
export declare function transformMat2d(out: Vec2, a: Vec2, m: Mat2d): Vec2;
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param out the receiving vector
 * @param a the vector to transform
 * @param m matrix to transform with
 * @returns out
 */
export declare function transformMat3(out: Vec2, a: Vec2, m: Mat3): Vec2;
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
export declare function transformMat4(out: Vec2, a: Vec2, m: Mat4): Vec2;
/**
 * Rotate a 2D vector
 * @param out The receiving vec2
 * @param a The vec2 point to rotate
 * @param b The origin of the rotation
 * @param rad The angle of rotation in radians
 * @returns out
 */
export declare function rotate(out: Vec2, a: Vec2, b: Vec2, rad: number): Vec2;
/**
 * Get the angle between two 2D vectors
 * @param a The first operand
 * @param b The second operand
 * @returns The angle in radians
 */
export declare function angle(a: Vec2, b: Vec2): number;
/**
 * Set the components of a vec2 to zero
 *
 * @param out the receiving vector
 * @returns out
 */
export declare function zero(out: Vec2): Vec2;
/**
 * Returns a string representation of a vector
 *
 * @param a vector to represent as a string
 * @returns string representation of the vector
 */
export declare function str(a: Vec2): string;
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns True if the vectors are equal, false otherwise.
 */
export declare function exactEquals(a: Vec2, b: Vec2): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns True if the vectors are equal, false otherwise.
 */
export declare function equals(a: Vec2, b: Vec2): boolean;
/**
 * Returns whether or not the vector is finite
 * @param a vector to test
 * @returns whether or not the vector is finite
 */
export declare function finite(a: Vec2): boolean;
/**
 * Alias for {@link length}
 */
export declare const len: typeof length;
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
 * Alias for {@link squaredLength}
 */
export declare const sqrLen: typeof squaredLength;
