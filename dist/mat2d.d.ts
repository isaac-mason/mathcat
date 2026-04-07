import type { Mat2d, Vec2 } from './types';
/**
 * Creates a new identity mat2d
 *
 * @returns a new 2x3 matrix
 */
export declare function create(): Mat2d;
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param a matrix to clone
 * @returns a new 2x3 matrix
 */
export declare function clone(a: Mat2d): Mat2d;
/**
 * Copy the values from one mat2d to another
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function copy(out: Mat2d, a: Mat2d): Mat2d;
/**
 * Set a mat2d to the identity matrix
 *
 * @param out the receiving matrix
 * @returns out
 */
export declare function identity(out: Mat2d): Mat2d;
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
export declare function fromValues(a: number, b: number, c: number, d: number, tx: number, ty: number): Mat2d;
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
export declare function set(out: Mat2d, a: number, b: number, c: number, d: number, tx: number, ty: number): Mat2d;
/**
 * Inverts a mat2d
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out, or null if source matrix is not invertible
 */
export declare function invert(out: Mat2d, a: Mat2d): Mat2d | null;
/**
 * Calculates the determinant of a mat2d
 *
 * @param a the source matrix
 * @returns determinant of a
 */
export declare function determinant(a: Mat2d): number;
/**
 * Multiplies two mat2d's
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Mat2d, a: Mat2d, b: Mat2d): Mat2d;
/**
 * Rotates a mat2d by the given angle
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function rotate(out: Mat2d, a: Mat2d, rad: number): Mat2d;
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param out the receiving matrix
 * @param a the matrix to translate
 * @param v the vec2 to scale the matrix by
 * @returns out
 **/
export declare function scale(out: Mat2d, a: Mat2d, v: Vec2): Mat2d;
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param out the receiving matrix
 * @param a the matrix to translate
 * @param v the vec2 to translate the matrix by
 * @returns out
 **/
export declare function translate(out: Mat2d, a: Mat2d, v: Vec2): Mat2d;
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
export declare function fromRotation(out: Mat2d, rad: number): Mat2d;
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
export declare function fromScaling(out: Mat2d, v: Vec2): Mat2d;
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
export declare function fromTranslation(out: Mat2d, v: Vec2): Mat2d;
/**
 * Returns a string representation of a mat2d
 *
 * @param a matrix to represent as a string
 * @returns string representation of the matrix
 */
export declare function str(a: Mat2d): string;
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param a the matrix to calculate Frobenius norm of
 * @returns Frobenius norm
 */
export declare function frob(a: Mat2d): number;
/**
 * Adds two mat2d's
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function add(out: Mat2d, a: Mat2d, b: Mat2d): Mat2d;
/**
 * Subtracts matrix b from matrix a
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function subtract(out: Mat2d, a: Mat2d, b: Mat2d): Mat2d;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param out the receiving matrix
 * @param a the matrix to scale
 * @param b amount to scale the matrix's elements by
 * @returns out
 */
export declare function multiplyScalar(out: Mat2d, a: Mat2d, b: number): Mat2d;
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param scale the amount to scale b's elements by before adding
 * @returns out
 */
export declare function multiplyScalarAndAdd(out: Mat2d, a: Mat2d, b: Mat2d, scale: number): Mat2d;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns True if the matrices are equal, false otherwise.
 */
export declare function exactEquals(a: Mat2d, b: Mat2d): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns True if the matrices are equal, false otherwise.
 */
export declare function equals(a: Mat2d, b: Mat2d): boolean;
/**
 * Alias for {@link mat2d.multiply}
 */
export declare const mul: typeof multiply;
/**
 * Alias for {@link mat2d.subtract}
 */
export declare const sub: typeof subtract;
