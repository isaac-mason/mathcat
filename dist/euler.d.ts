import type { Euler, EulerOrder, Mat4, Quat } from './types';
/**
 * Creates a new Euler with default values (0, 0, 0, 'xyz').
 */
export declare function create(): Euler;
/**
 * Creates a new Euler from the given values.
 * @param x The x rotation in radians.
 * @param y The y rotation in radians.
 * @param z The z rotation in radians.
 * @param order The order of rotation.
 * @returns A new Euler.
 */
export declare function fromValues(x: number, y: number, z: number, order: EulerOrder): Euler;
/**
 * Sets a given Euler from the given values.
 * @param x The x rotation in radians.
 * @param y The y rotation in radians.
 * @param z The z rotation in radians.
 * @param order The order of rotation.
 * @returns The output Euler.
 */
export declare function set(out: Euler, x: number, y: number, z: number, order: EulerOrder): Euler;
/**
 * Sets Euler angle radians from given degrees
 * @param out The output Euler.
 * @param x The x rotation in degrees.
 * @param y The y rotation in degrees.
 * @param z The z rotation in degrees.
 * @param order The order of rotation.
 * @returns The output Euler.
 */
export declare function fromDegrees(out: Euler, x: number, y: number, z: number, order: EulerOrder): Euler;
/**
 * Sets the Euler angles from a rotation matrix.
 * @param out The output Euler.
 * @param rotationMatrix The input rotation matrix.
 * @param order The order of the Euler angles.
 * @returns The output Euler.
 */
export declare function fromRotationMat4(out: Euler, rotationMatrix: Mat4, order?: EulerOrder): Euler;
/**
 * Returns whether or not the euler angles have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first euler.
 * @param b The second euler.
 * @returns True if the euler angles are equal, false otherwise.
 */
export declare function exactEquals(a: Euler, b: Euler): boolean;
/**
 * Returns whether or not the euler angles have approximately the same elements in the same position.
 *
 * @param a The first euler.
 * @param b The second euler.
 * @returns True if the euler angles are equal, false otherwise.
 */
export declare function equals(a: Euler, b: Euler): boolean;
/**
 * Sets the Euler angles from a quaternion.
 * @param out The output Euler.
 * @param q The input quaternion.
 * @param order The order of the Euler.
 * @returns The output Euler
 */
export declare function fromQuat(out: Euler, q: Quat, order: EulerOrder): Euler;
/**
 * Reorders the Euler based on the specified order.
 * @param out The output Euler.
 * @param a The input Euler.
 * @param order The order of the Euler.
 * @returns The output Euler.
 */
export declare function reorder(out: Euler, a: Euler, order: EulerOrder): Euler;
