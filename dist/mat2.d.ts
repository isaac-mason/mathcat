import type { Mat2, Vec2 } from './types.js';
/**
 * Creates a new identity mat2
 *
 * @returns a new 2x2 matrix
 */
export declare function create(): Mat2;
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param a matrix to clone
 * @returns a new 2x2 matrix
 */
export declare function clone(a: Mat2): Mat2;
/**
 * Copy the values from one mat2 to another
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function copy(out: Mat2, a: Mat2): Mat2;
/**
 * Set a mat2 to the identity matrix
 *
 * @param out the receiving matrix
 * @returns out
 */
export declare function identity(out: Mat2): Mat2;
/**
 * Create a new mat2 with the given values
 *
 * @param m00 Component in column 0, row 0 position (index 0)
 * @param m01 Component in column 0, row 1 position (index 1)
 * @param m10 Component in column 1, row 0 position (index 2)
 * @param m11 Component in column 1, row 1 position (index 3)
 * @returns out A new 2x2 matrix
 */
export declare function fromValues(m00: number, m01: number, m10: number, m11: number): Mat2;
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
export declare function set(out: Mat2, m00: number, m01: number, m10: number, m11: number): Mat2;
/**
 * Transpose the values of a mat2
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function transpose(out: Mat2, a: Mat2): Mat2;
/**
 * Inverts a mat2
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out, or null if source matrix is not invertible
 */
export declare function invert(out: Mat2, a: Mat2): Mat2 | null;
/**
 * Calculates the adjugate of a mat2
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function adjoint(out: Mat2, a: Mat2): Mat2;
/**
 * Calculates the determinant of a mat2
 *
 * @param a the source matrix
 * @returns determinant of a
 */
export declare function determinant(a: Mat2): number;
/**
 * Multiplies two mat2's
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Mat2, a: Mat2, b: Mat2): Mat2;
/**
 * Rotates a mat2 by the given angle
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function rotate(out: Mat2, a: Mat2, rad: number): Mat2;
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param v the vec2 to scale the matrix by
 * @returns out
 **/
export declare function scale(out: Mat2, a: Mat2, v: Vec2): Mat2;
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
export declare function fromRotation(out: Mat2, rad: number): Mat2;
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
export declare function fromScaling(out: Mat2, v: Vec2): Mat2;
/**
 * Returns a string representation of a mat2
 *
 * @param a matrix to represent as a string
 * @returns string representation of the matrix
 */
export declare function str(a: Mat2): string;
/**
 * Returns Frobenius norm of a mat2
 *
 * @param a the matrix to calculate Frobenius norm of
 * @returns Frobenius norm
 */
export declare function frob(a: Mat2): number;
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param L the lower triangular matrix
 * @param D the diagonal matrix
 * @param U the upper triangular matrix
 * @param a the input matrix to factorize
 */
export declare function LDU(L: Mat2, D: Mat2, U: Mat2, a: Mat2): [Mat2, Mat2, Mat2];
/**
 * Adds two mat2's
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function add(out: Mat2, a: Mat2, b: Mat2): Mat2;
/**
 * Subtracts matrix b from matrix a
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function subtract(out: Mat2, a: Mat2, b: Mat2): Mat2;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns True if the matrices are equal, false otherwise.
 */
export declare function exactEquals(a: Mat2, b: Mat2): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns True if the matrices are equal, false otherwise.
 */
export declare function equals(a: Mat2, b: Mat2): boolean;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param out the receiving matrix
 * @param a the matrix to scale
 * @param b amount to scale the matrix's elements by
 * @returns out
 */
export declare function multiplyScalar(out: Mat2, a: Mat2, b: number): Mat2;
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param scale the amount to scale b's elements by before adding
 * @returns out
 */
export declare function multiplyScalarAndAdd(out: Mat2, a: Mat2, b: Mat2, scale: number): Mat2;
/**
 * Alias for {@link mat2.multiply}
 */
export declare const mul: typeof multiply;
/**
 * Alias for {@link mat2.subtract}
 */
export declare const sub: typeof subtract;
