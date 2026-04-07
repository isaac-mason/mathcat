import type { Mat4, Quat, Quat2, Vec3 } from './types';
/**
 * Creates a new identity dual quat
 *
 * @returns a new dual quaternion [real -> rotation, dual -> translation]
 */
export declare function create(): Quat2;
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param a dual quaternion to clone
 * @returns new dual quaternion
 * @function
 */
export declare function clone(a: Quat2): Quat2;
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
export declare function fromValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): Quat2;
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
export declare function fromRotationTranslationValues(x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number): Quat2;
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param out dual quaternion receiving operation result
 * @param q a normalized quaternion
 * @param t translation vector
 * @returns dual quaternion receiving operation result
 * @function
 */
export declare function fromRotationTranslation(out: Quat2, q: Quat, t: Vec3): Quat2;
/**
 * Creates a dual quat from a translation
 *
 * @param out dual quaternion receiving operation result
 * @param t translation vector
 * @returns dual quaternion receiving operation result
 * @function
 */
export declare function fromTranslation(out: Quat2, t: Vec3): Quat2;
/**
 * Creates a dual quat from a quaternion
 *
 * @param out dual quaternion receiving operation result
 * @param q the quaternion
 * @returns dual quaternion receiving operation result
 * @function
 */
export declare function fromRotation(out: Quat2, q: Quat): Quat2;
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param out the dual quaternion
 * @param a the matrix
 * @returns dual quat receiving operation result
 * @function
 */
export declare function fromMat4(out: Quat2, a: Mat4): Quat2;
/**
 * Copy the values from one dual quat to another
 *
 * @param out the receiving dual quaternion
 * @param a the source dual quaternion
 * @returns out
 * @function
 */
export declare function copy(out: Quat2, a: Quat2): Quat2;
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param out the receiving quaternion
 * @returns out
 */
export declare function identity(out: Quat2): Quat2;
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
export declare function set(out: Quat2, x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): Quat2;
/**
 * Gets the real part of a dual quat
 * @param  out real part
 * @param  a Dual Quaternion
 * @return real part
 */
export declare const getReal: typeof import("./vec4").copy;
/**
 * Gets the dual part of a dual quat
 * @param  out dual part
 * @param  a Dual Quaternion
 * @return dual part
 */
export declare function getDual(out: Quat, a: Quat2): Quat;
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param out the receiving quaternion
 * @param q a quaternion representing the real part
 * @returns out
 * @function
 */
export declare const setReal: typeof import("./vec4").copy;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param out the receiving quaternion
 * @param q a quaternion representing the dual part
 * @returns out
 * @function
 */
export declare function setDual(out: Quat2, q: Quat): Quat2;
/**
 * Gets the translation of a normalized dual quat
 * @param  out translation
 * @param  a Dual Quaternion to be decomposed
 * @return translation
 */
export declare function getTranslation(out: Vec3, a: Quat2): Vec3;
/**
 * Translates a dual quat by the given vector
 *
 * @param out the receiving dual quaternion
 * @param a the dual quaternion to translate
 * @param v vector to translate by
 * @returns out
 */
export declare function translate(out: Quat2, a: Quat2, v: Vec3): Quat2;
/**
 * Rotates a dual quat around the X axis
 *
 * @param out the receiving dual quaternion
 * @param a the dual quaternion to rotate
 * @param rad how far should the rotation be
 * @returns out
 */
export declare function rotateX(out: Quat2, a: Quat2, rad: number): Quat2;
/**
 * Rotates a dual quat around the Y axis
 *
 * @param out the receiving dual quaternion
 * @param a the dual quaternion to rotate
 * @param rad how far should the rotation be
 * @returns out
 */
export declare function rotateY(out: Quat2, a: Quat2, rad: number): Quat2;
/**
 * Rotates a dual quat around the Z axis
 *
 * @param out the receiving dual quaternion
 * @param a the dual quaternion to rotate
 * @param rad how far should the rotation be
 * @returns out
 */
export declare function rotateZ(out: Quat2, a: Quat2, rad: number): Quat2;
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param out the receiving dual quaternion
 * @param a the dual quaternion to rotate
 * @param q quaternion to rotate by
 * @returns out
 */
export declare function rotateByQuatAppend(out: Quat2, a: Quat2, q: Quat): Quat2;
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param out the receiving dual quaternion
 * @param q quaternion to rotate by
 * @param a the dual quaternion to rotate
 * @returns out
 */
export declare function rotateByQuatPrepend(out: Quat2, q: Quat, a: Quat2): Quat2;
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param out the receiving dual quaternion
 * @param a the dual quaternion to rotate
 * @param axis the axis to rotate around
 * @param rad how far the rotation should be
 * @returns out
 */
export declare function rotateAroundAxis(out: Quat2, a: Quat2, axis: Vec3, rad: number): Quat2;
/**
 * Adds two dual quat's
 *
 * @param out the receiving dual quaternion
 * @param a the first operand
 * @param b the second operand
 * @returns out
 * @function
 */
export declare function add(out: Quat2, a: Quat2, b: Quat2): Quat2;
/**
 * Multiplies two dual quat's
 *
 * @param out the receiving dual quaternion
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Quat2, a: Quat2, b: Quat2): Quat2;
/**
 * Alias for {@link quat2.multiply}
 * @function
 */
export declare const mul: typeof multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param out the receiving dual quat
 * @param a the dual quat to scale
 * @param b amount to scale the dual quat by
 * @returns out
 * @function
 */
export declare function scale(out: Quat2, a: Quat2, b: number): Quat2;
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param a the first operand
 * @param b the second operand
 * @returns dot product of a and b
 * @function
 */
export declare const dot: typeof import("./vec4").dot;
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
export declare function lerp(out: Quat2, a: Quat2, b: Quat2, t: number): Quat2;
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param out the receiving dual quaternion
 * @param a dual quat to calculate inverse of
 * @returns out
 */
export declare function invert(out: Quat2, a: Quat2): Quat2;
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param out the receiving quaternion
 * @param a quat to calculate conjugate of
 * @returns out
 */
export declare function conjugate(out: Quat2, a: Quat2): Quat2;
/**
 * Calculates the length of a dual quat
 *
 * @param a dual quat to calculate length of
 * @returns length of a
 * @function
 */
export declare const length: typeof import("./vec4").length;
/**
 * Alias for {@link quat2.length}
 * @function
 */
export declare const len: typeof import("./vec4").length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param a dual quat to calculate squared length of
 * @returns squared length of a
 * @function
 */
export declare const squaredLength: typeof import("./vec4").squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
export declare const sqrLen: typeof import("./vec4").squaredLength;
/**
 * Normalize a dual quat
 *
 * @param out the receiving dual quaternion
 * @param a dual quaternion to normalize
 * @returns out
 * @function
 */
export declare function normalize(out: Quat2, a: Quat2): Quat2;
/**
 * Returns a string representation of a dual quaternion
 *
 * @param a dual quaternion to represent as a string
 * @returns string representation of the dual quat
 */
export declare function str(a: Quat2): string;
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param a the first dual quaternion.
 * @param b the second dual quaternion.
 * @returns true if the dual quaternions are equal, false otherwise.
 */
export declare function exactEquals(a: Quat2, b: Quat2): boolean;
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param a the first dual quat.
 * @param b the second dual quat.
 * @returns true if the dual quats are equal, false otherwise.
 */
export declare function equals(a: Quat2, b: Quat2): boolean;
