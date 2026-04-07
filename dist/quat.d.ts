import type { Euler, EulerOrder, Mat3, Mat4, Quat, Vec3 } from './types';
import * as vec4 from './vec4';
/**
 * Creates a new identity quat
 *
 * @returns a new quaternion
 */
export declare function create(): Quat;
/**
 * Set a quat to the identity quaternion
 *
 * @param out the receiving quaternion
 * @returns out
 */
export declare function identity(out: Quat): Quat;
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param out the receiving quaternion
 * @param axis the axis around which to rotate
 * @param rad the angle in radians
 * @returns out
 **/
export declare function setAxisAngle(out: Quat, axis: Vec3, rad: number): Quat;
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
export declare function getAxisAngle(out_axis: Vec3, q: Quat): number;
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  a     Origin unit quaternion
 * @param  b     Destination unit quaternion
 * @return     Angle, in radians, between the two quaternions
 */
export declare function getAngle(a: Quat, b: Quat): number;
/**
 * Multiplies two quat's
 *
 * @param out the receiving quaternion
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Quat, a: Quat, b: Quat): Quat;
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param out quat receiving operation result
 * @param a quat to rotate
 * @param rad angle (in radians) to rotate
 * @returns out
 */
export declare function rotateX(out: Quat, a: Quat, rad: number): Quat;
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param out quat receiving operation result
 * @param a quat to rotate
 * @param rad angle (in radians) to rotate
 * @returns out
 */
export declare function rotateY(out: Quat, a: Quat, rad: number): Quat;
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param out quat receiving operation result
 * @param a quat to rotate
 * @param rad angle (in radians) to rotate
 * @returns out
 */
export declare function rotateZ(out: Quat, a: Quat, rad: number): Quat;
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param out the receiving quaternion
 * @param a quat to calculate W component of
 * @returns out
 */
export declare function calculateW(out: Quat, a: Quat): Quat;
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param out the receiving quaternion
 * @param a quat to calculate the exponential of
 * @returns out
 */
export declare function exp(out: Quat, a: Quat): Quat;
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param out the receiving quaternion
 * @param a quat to calculate the exponential of
 * @returns out
 */
export declare function ln(out: Quat, a: Quat): Quat;
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param out the receiving quaternion
 * @param a quat to calculate the exponential of
 * @param b amount to scale the quaternion by
 * @returns out
 */
export declare function pow(out: Quat, a: Quat, b: number): Quat;
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param out the receiving quaternion
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation amount, in the range [0-1], between the two inputs
 * @returns out
 */
export declare function slerp(out: Quat, a: Quat, b: Quat, t: number): Quat;
/**
 * Calculates the inverse of a quat
 *
 * @param out the receiving quaternion
 * @param a quat to calculate inverse of
 * @returns out
 */
export declare function invert(out: Quat, a: Quat): Quat;
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param out the receiving quaternion
 * @param a quat to calculate conjugate of
 * @returns out
 */
export declare function conjugate(out: Quat, a: Quat): Quat;
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
export declare function fromMat3(out: Quat, m: Mat3): Quat;
/**
 * Calculates a quaternion from a 4x4 rotation matrix
 * Extracts the 3x3 rotation part and calls fromMat3
 *
 * @param out the receiving quaternion
 * @param m rotation matrix
 * @returns out
 */
export declare function fromMat4(out: Quat, m: Mat4): Quat;
/**
 * Creates a quaternion from the given euler
 * @param out the receiving quaternion
 * @param euler the euler to create the quaternion from
 * @returns out
 */
export declare function fromEuler(out: Quat, euler: Euler): Quat;
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
export declare function fromDegrees(out: Quat, x: number, y: number, z: number, order: EulerOrder): Quat;
/**
 * Returns a string representation of a quaternion
 *
 * @param a vector to represent as a string
 * @returns string representation of the vector
 */
export declare function str(a: Quat): string;
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param a quaternion to clone
 * @returns a new quaternion
 */
export declare const clone: typeof vec4.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param x X component
 * @param y Y component
 * @param z Z component
 * @param w W component
 * @returns a new quaternion
 */
export declare const fromValues: typeof vec4.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param out the receiving quaternion
 * @param a the source quaternion
 * @returns out
 */
export declare const copy: typeof vec4.copy;
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
export declare const set: typeof vec4.set;
/**
 * Adds two quat's
 *
 * @param out the receiving quaternion
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare const add: typeof vec4.add;
/**
 * Scales a quat by a scalar number
 *
 * @param out the receiving quaternion
 * @param a the quaternion to scale
 * @param b amount to scale the quaternion by
 * @returns out
 */
export declare const scale: typeof vec4.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param a the first operand
 * @param b the second operand
 * @returns dot product of a and b
 */
export declare const dot: typeof vec4.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param out the receiving quaternion
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation amount, in the range [0-1], between the two inputs
 * @returns out
 */
export declare const lerp: typeof vec4.lerp;
/**
 * Calculates the length of a quat
 *
 * @param a quaternion to calculate length of
 * @returns length of a
 */
export declare const length: typeof vec4.length;
/**
 * Alias for {@link length}
 */
export declare const len: typeof vec4.length;
/**
 * Calculates the squared length of a quat
 *
 * @param a quaternion to calculate squared length of
 * @returns squared length of a
 */
export declare const squaredLength: typeof vec4.squaredLength;
/**
 * Alias for {@link squaredLength}
 */
export declare const sqrLen: typeof vec4.squaredLength;
/**
 * Alias for {@link multiply}
 */
export declare const mul: typeof multiply;
/**
 * Normalize a quat
 *
 * @param out the receiving quaternion
 * @param a quaternion to normalize
 * @returns out
 */
export declare const normalize: typeof vec4.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first quaternion.
 * @param b The second quaternion.
 * @returns True if the quaternions are equal, false otherwise.
 */
export declare const exactEquals: typeof vec4.exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param a The first quaternion.
 * @param b The second quaternion.
 * @returns True if the quaternions are equal, false otherwise.
 */
export declare function equals(a: Quat, b: Quat): boolean;
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
export declare const rotationTo: (out: Quat, a: Vec3, b: Vec3) => Quat;
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
export declare const sqlerp: (out: Quat, a: Quat, b: Quat, c: Quat, d: Quat, t: number) => Quat;
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
export declare const setAxes: (out: Quat, view: Vec3, right: Vec3, up: Vec3) => Quat;
