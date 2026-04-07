import { EPSILON } from './common.js';

/**
 * Creates a new identity mat2
 *
 * @returns a new 2x2 matrix
 */
function create() {
    return [1, 0, 0, 1];
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param a matrix to clone
 * @returns a new 2x2 matrix
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
 * Copy the values from one mat2 to another
 *
 * @param out the receiving matrix
 * @param a the source matrix
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
 * Set a mat2 to the identity matrix
 *
 * @param out the receiving matrix
 * @returns out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param m00 Component in column 0, row 0 position (index 0)
 * @param m01 Component in column 0, row 1 position (index 1)
 * @param m10 Component in column 1, row 0 position (index 2)
 * @param m11 Component in column 1, row 1 position (index 3)
 * @returns out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
    const out = create();
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
}
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
function set(out, m00, m01, m10, m11) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache
    // some values
    if (out === a) {
        const a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    }
    else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    return out;
}
/**
 * Inverts a mat2
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out, or null if source matrix is not invertible
 */
function invert(out, a) {
    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];
    // Calculate the determinant
    let det = a0 * a3 - a2 * a1;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] = a0 * det;
    return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
function adjoint(out, a) {
    // Caching this value is necessary if out == a
    const a0 = a[0];
    out[0] = a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a0;
    return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param a the source matrix
 * @returns determinant of a
 */
function determinant(a) {
    return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
function multiply(out, a, b) {
    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];
    const b0 = b[0];
    const b1 = b[1];
    const b2 = b[2];
    const b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
function rotate(out, a, rad) {
    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];
    const s = Math.sin(rad);
    const c = Math.cos(rad);
    out[0] = a0 * c + a2 * s;
    out[1] = a1 * c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param v the vec2 to scale the matrix by
 * @returns out
 **/
function scale(out, a, v) {
    const a0 = a[0];
    const a1 = a[1];
    const a2 = a[2];
    const a3 = a[3];
    const v0 = v[0];
    const v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
}
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
function fromRotation(out, rad) {
    const s = Math.sin(rad);
    const c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    return out;
}
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
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param a matrix to represent as a string
 * @returns string representation of the matrix
 */
function str(a) {
    return `mat2(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`;
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param a the matrix to calculate Frobenius norm of
 * @returns Frobenius norm
 */
function frob(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param L the lower triangular matrix
 * @param D the diagonal matrix
 * @param U the upper triangular matrix
 * @param a the input matrix to factorize
 */
function LDU(L, D, U, a) {
    L[2] = a[2] / a[0];
    U[0] = a[0];
    U[1] = a[1];
    U[3] = a[3] - L[2] * U[1];
    return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param out the receiving matrix
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
 * Subtracts matrix b from matrix a
 *
 * @param out the receiving matrix
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
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns True if the matrices are equal, false otherwise.
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
 * Multiply each element of the matrix by a scalar.
 *
 * @param out the receiving matrix
 * @param a the matrix to scale
 * @param b amount to scale the matrix's elements by
 * @returns out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param scale the amount to scale b's elements by before adding
 * @returns out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    return out;
}
/**
 * Alias for {@link mat2.multiply}
 */
const mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 */
const sub = subtract;

export { LDU, add, adjoint, clone, copy, create, determinant, equals, exactEquals, frob, fromRotation, fromScaling, fromValues, identity, invert, mul, multiply, multiplyScalar, multiplyScalarAndAdd, rotate, scale, set, str, sub, subtract, transpose };
//# sourceMappingURL=mat2.js.map
