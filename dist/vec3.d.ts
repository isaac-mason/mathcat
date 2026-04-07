import type { Mat3, Mat4, MutableArrayLike, Quat, Vec3 } from './types';
/**
 * Creates a new, empty vec3
 *
 * @returns a new 3D vector
 */
export declare function create(): Vec3;
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param a vector to clone
 * @returns a new 3D vector
 */
export declare function clone(a: Vec3): Vec3;
/**
 * Calculates the length of a vec3
 *
 * @param a vector to calculate length of
 * @returns length of a
 */
export declare function length(a: Vec3): number;
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param x X component
 * @param y Y component
 * @param z Z component
 * @returns a new 3D vector
 */
export declare function fromValues(x: number, y: number, z: number): Vec3;
/**
 * Copy the values from one vec3 to another
 *
 * @param out the receiving vector
 * @param a the source vector
 * @returns out
 */
export declare function copy(out: Vec3, a: Vec3): Vec3;
/**
 * Set the components of a vec3 to the given values
 *
 * @param out the receiving vector
 * @param x X component
 * @param y Y component
 * @param z Z component
 * @returns out
 */
export declare function set(out: Vec3, x: number, y: number, z: number): Vec3;
/**
 * Sets all components of a vec3 to the given scalar value
 *
 * @param out the receiving vector
 * @param s scalar value to set
 * @returns out
 */
export declare function setScalar(out: Vec3, s: number): Vec3;
/**
 * Sets the components of a vec3 from a buffer
 * @param out the receiving vector
 * @param buffer the source buffer
 * @param startIndex the starting index in the buffer
 * @returns out
 */
export declare function fromBuffer(out: Vec3, buffer: ArrayLike<number>, startIndex: number): Vec3;
/**
 * Writes the components of a vec3 to a buffer
 * @param outBuffer The output buffer
 * @param vec The source vector
 * @param startIndex The starting index in the buffer
 * @returns The output buffer
 */
export declare function toBuffer(outBuffer: MutableArrayLike<number>, vec: Vec3, startIndex: number): ArrayLike<number>;
/**
 * Adds two vec3's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function add(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Adds a scalar value to all components of a vec3
 *
 * @param out the receiving vector
 * @param a the source vector
 * @param b the scalar value to add
 * @returns out
 */
export declare function addScalar(out: Vec3, a: Vec3, b: number): Vec3;
/**
 * Subtracts vector b from vector a
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function subtract(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Subtracts a scalar value from all components of a vec3
 *
 * @param out the receiving vector
 * @param a the source vector
 * @param b the scalar value to subtract
 * @returns out
 */
export declare function subtractScalar(out: Vec3, a: Vec3, b: number): Vec3;
/**
 * Multiplies two vec3's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Divides two vec3's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function divide(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Math.ceil the components of a vec3
 *
 * @param out the receiving vector
 * @param a vector to ceil
 * @returns out
 */
export declare function ceil(out: Vec3, a: Vec3): Vec3;
/**
 * Math.floor the components of a vec3
 *
 * @param out the receiving vector
 * @param a vector to floor
 * @returns out
 */
export declare function floor(out: Vec3, a: Vec3): Vec3;
/**
 * Returns the minimum of two vec3's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function min(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Returns the maximum of two vec3's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function max(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * symmetric round the components of a vec3
 *
 * @param out the receiving vector
 * @param a vector to round
 * @returns out
 */
export declare function round(out: Vec3, a: Vec3): Vec3;
/**
 * Scales a vec3 by a scalar number
 *
 * @param out the receiving vector
 * @param a the vector to scale
 * @param b amount to scale the vector by
 * @returns out
 */
export declare function scale(out: Vec3, a: Vec3, b: number): Vec3;
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param scale the amount to scale b by before adding
 * @returns out
 */
export declare function scaleAndAdd(out: Vec3, a: Vec3, b: Vec3, scale: number): Vec3;
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns distance between a and b
 */
export declare function distance(a: Vec3, b: Vec3): number;
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns squared distance between a and b
 */
export declare function squaredDistance(a: Vec3, b: Vec3): number;
/**
 * Calculates the squared length of a vec3
 *
 * @param a vector to calculate squared length of
 * @returns squared length of a
 */
export declare function squaredLength(a: Vec3): number;
/**
 * Negates the components of a vec3
 *
 * @param out the receiving vector
 * @param a vector to negate
 * @returns out
 */
export declare function negate(out: Vec3, a: Vec3): Vec3;
/**
 * Returns the inverse of the components of a vec3
 *
 * @param out the receiving vector
 * @param a vector to invert
 * @returns out
 */
export declare function inverse(out: Vec3, a: Vec3): Vec3;
/**
 * Normalize a vec3
 *
 * @param out the receiving vector
 * @param a vector to normalize
 * @returns out
 */
export declare function normalize(out: Vec3, a: Vec3): Vec3;
/**
 * Calculates the dot product of two vec3's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns dot product of a and b
 */
export declare function dot(a: Vec3, b: Vec3): number;
/**
 * Computes the cross product of two vec3's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function cross(out: Vec3, a: Vec3, b: Vec3): Vec3;
/**
 * Calculates a normalized perpendicular vector to the given vector.
 * Useful for finding an arbitrary orthogonal basis vector.
 *
 * @param out the receiving vector
 * @param a the source vector
 * @returns the out vector
 */
export declare function perpendicular(out: Vec3, a: Vec3): Vec3;
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation amount, in the range [0-1], between the two inputs
 * @returns out
 */
export declare function lerp(out: Vec3, a: Vec3, b: Vec3, t: number): Vec3;
/**
 * Performs a spherical linear interpolation between two vec3's
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation amount, in the range [0-1], between the two inputs
 * @returns out
 */
export declare function slerp(out: Vec3, a: Vec3, b: Vec3, t: number): Vec3;
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
export declare function hermite(out: Vec3, a: Vec3, b: Vec3, c: Vec3, d: Vec3, t: number): Vec3;
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
export declare function bezier(out: Vec3, a: Vec3, b: Vec3, c: Vec3, d: Vec3, t: number): Vec3;
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param out the receiving vector
 * @param a the vector to transform
 * @param m matrix to transform with
 * @returns out
 */
export declare function transformMat4(out: Vec3, a: Vec3, m: Mat4): Vec3;
/**
 * Transforms the vec3 with a mat3.
 *
 * @param out the receiving vector
 * @param a the vector to transform
 * @param m the 3x3 matrix to transform with
 * @returns out
 */
export declare function transformMat3(out: Vec3, a: Vec3, m: Mat3): Vec3;
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param out the receiving vector
 * @param a the vector to transform
 * @param q quaternion to transform with
 * @returns out
 */
export declare function transformQuat(out: Vec3, a: Vec3, q: Quat): Vec3;
/**
 * Rotate a 3D vector around the x-axis
 * @param out The receiving vec3
 * @param a The vec3 point to rotate
 * @param b The origin of the rotation
 * @param rad The angle of rotation in radians
 * @returns out
 */
export declare function rotateX(out: Vec3, a: Vec3, b: Vec3, rad: number): Vec3;
/**
 * Rotate a 3D vector around the y-axis
 * @param out The receiving vec3
 * @param a The vec3 point to rotate
 * @param b The origin of the rotation
 * @param rad The angle of rotation in radians
 * @returns out
 */
export declare function rotateY(out: Vec3, a: Vec3, b: Vec3, rad: number): Vec3;
/**
 * Rotate a 3D vector around the z-axis
 * @param out The receiving vec3
 * @param a The vec3 point to rotate
 * @param b The origin of the rotation
 * @param rad The angle of rotation in radians
 * @returns out
 */
export declare function rotateZ(out: Vec3, a: Vec3, b: Vec3, rad: number): Vec3;
/**
 * Get the angle between two 3D vectors
 * @param a The first operand
 * @param b The second operand
 * @returns The angle in radians
 */
export declare function angle(a: Vec3, b: Vec3): number;
/**
 * Set the components of a vec3 to zero
 *
 * @param out the receiving vector
 * @returns out
 */
export declare function zero(out: Vec3): Vec3;
/**
 * Returns a string representation of a vector
 *
 * @param a vector to represent as a string
 * @returns string representation of the vector
 */
export declare function str(a: Vec3): string;
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns True if the vectors are equal, false otherwise.
 */
export declare function exactEquals(a: Vec3, b: Vec3): boolean;
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param a The first vector.
 * @param b The second vector.
 * @returns True if the vectors are equal, false otherwise.
 */
export declare function equals(a: Vec3, b: Vec3): boolean;
/**
 * Returns whether or not the vector is finite
 * @param a vector to test
 * @returns whether or not the vector is finite
 */
export declare function finite(a: Vec3): boolean;
/**
 * Determines if a scale vector represents an inside-out transformation (reflection)
 * Returns true if an odd number of scale components are negative
 *
 * @param scale The scale vector to test
 * @returns true if the scale represents a reflection (odd number of negative components)
 */
export declare function isScaleInsideOut(scale: Vec3): boolean;
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
