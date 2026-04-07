import type { Mat2d, Mat3, Mat4, Quat, Vec2 } from './types';
/**
 * Creates a new identity mat3
 *
 * @returns a new 3x3 matrix
 */
export declare function create(): Mat3;
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param out the receiving 3x3 matrix
 * @param a   the source 4x4 matrix
 * @returns out
 */
export declare function fromMat4(out: Mat3, a: Mat4): Mat3;
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param a matrix to clone
 * @returns a new 3x3 matrix
 */
export declare function clone(a: Mat3): Mat3;
/**
 * Copy the values from one mat3 to another
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function copy(out: Mat3, a: Mat3): Mat3;
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
export declare function fromValues(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Mat3;
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
export declare function set(out: Mat3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Mat3;
/**
 * Set a mat3 to the identity matrix
 *
 * @param out the receiving matrix
 * @returns out
 */
export declare function identity(out: Mat3): Mat3;
/**
 * Set a mat3 to the zero matrix
 *
 * @param out the receiving matrix
 * @returns out
 */
export declare function zero(out: Mat3): Mat3;
/**
 * Transpose the values of a mat3
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function transpose(out: Mat3, a: Mat3): Mat3;
/**
 * Inverts a mat3
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function invert(out: Mat3, a: Mat3): Mat3 | null;
/**
 * Calculates the adjugate of a mat3
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function adjoint(out: Mat3, a: Mat3): Mat3;
/**
 * Calculates the determinant of a mat3
 *
 * @param a the source matrix
 * @returns determinant of a
 */
export declare function determinant(a: Mat3): number;
/**
 * Multiplies two mat3's
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Mat3, a: Mat3, b: Mat3): Mat3;
/**
 * Translate a mat3 by the given vector
 *
 * @param out the receiving matrix
 * @param a the matrix to translate
 * @param v vector to translate by
 * @returns out
 */
export declare function translate(out: Mat3, a: Mat3, v: Vec2): Mat3;
/**
 * Rotates a mat3 by the given angle
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function rotate(out: Mat3, a: Mat3, rad: number): Mat3;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param v the vec2 to scale the matrix by
 * @returns out
 **/
export declare function scale(out: Mat3, a: Mat3, v: Vec2): Mat3;
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
export declare function fromTranslation(out: Mat3, v: Vec2): Mat3;
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
export declare function fromRotation(out: Mat3, rad: number): Mat3;
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
export declare function fromScaling(out: Mat3, v: Vec2): Mat3;
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param out the receiving matrix
 * @param a the matrix to copy
 * @returns out
 **/
export declare function fromMat2d(out: Mat3, a: Mat2d): Mat3;
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param out mat3 receiving operation result
 * @param q Quaternion to create matrix from
 *
 * @returns out
 */
export declare function fromQuat(out: Mat3, q: Quat): Mat3;
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param out mat3 receiving operation result
 * @param a Mat4 to derive the normal matrix from
 *
 * @returns out
 */
export declare function normalFromMat4(out: Mat3, a: Mat4): Mat3 | null;
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param out mat3 frustum matrix will be written into
 * @param width Width of your gl context
 * @param height Height of gl context
 * @returns out
 */
export declare function projection(out: Mat3, width: number, height: number): Mat3;
/**
 * Returns a string representation of a mat3
 *
 * @param a matrix to represent as a string
 * @returns string representation of the matrix
 */
export declare function str(a: Mat3): string;
/**
 * Returns Frobenius norm of a mat3
 *
 * @param a the matrix to calculate Frobenius norm of
 * @returns Frobenius norm
 */
export declare function frob(a: Mat3): number;
/**
 * Adds two mat3's
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function add(out: Mat3, a: Mat3, b: Mat3): Mat3;
/**
 * Subtracts matrix b from matrix a
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function subtract(out: Mat3, a: Mat3, b: Mat3): Mat3;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param out the receiving matrix
 * @param a the matrix to scale
 * @param b amount to scale the matrix's elements by
 * @returns out
 */
export declare function multiplyScalar(out: Mat3, a: Mat3, b: number): Mat3;
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param scale the amount to scale b's elements by before adding
 * @returns out
 */
export declare function multiplyScalarAndAdd(out: Mat3, a: Mat3, b: Mat3, scale: number): Mat3;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns True if the matrices are equal, false otherwise.
 */
export declare function exactEquals(a: Mat3, b: Mat3): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns True if the matrices are equal, false otherwise.
 */
export declare function equals(a: Mat3, b: Mat3): boolean;
/**
 * Alias for {@link mat3.multiply}
 * @function
 */
export declare const mul: typeof multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */
export declare const sub: typeof subtract;
