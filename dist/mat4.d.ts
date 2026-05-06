import type { Mat4, Quat, Quat2, Vec3 } from './types.js';
/**
 * Creates a new identity mat4
 *
 * @returns a new 4x4 matrix
 */
export declare function create(): Mat4;
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param a matrix to clone
 * @returns a new 4x4 matrix
 */
export declare function clone(a: Mat4): Mat4;
/**
 * Copy the values from one mat4 to another
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function copy(out: Mat4, a: Mat4): Mat4;
/**
 * Create a new mat4 with the given values
 *
 * @param m00 Component in column 0, row 0 position (index 0)
 * @param m01 Component in column 0, row 1 position (index 1)
 * @param m02 Component in column 0, row 2 position (index 2)
 * @param m03 Component in column 0, row 3 position (index 3)
 * @param m10 Component in column 1, row 0 position (index 4)
 * @param m11 Component in column 1, row 1 position (index 5)
 * @param m12 Component in column 1, row 2 position (index 6)
 * @param m13 Component in column 1, row 3 position (index 7)
 * @param m20 Component in column 2, row 0 position (index 8)
 * @param m21 Component in column 2, row 1 position (index 9)
 * @param m22 Component in column 2, row 2 position (index 10)
 * @param m23 Component in column 2, row 3 position (index 11)
 * @param m30 Component in column 3, row 0 position (index 12)
 * @param m31 Component in column 3, row 1 position (index 13)
 * @param m32 Component in column 3, row 2 position (index 14)
 * @param m33 Component in column 3, row 3 position (index 15)
 * @returns A new mat4
 */
export declare function fromValues(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Mat4;
/**
 * Set the components of a mat4 to the given values
 *
 * @param out the receiving matrix
 * @param m00 Component in column 0, row 0 position (index 0)
 * @param m01 Component in column 0, row 1 position (index 1)
 * @param m02 Component in column 0, row 2 position (index 2)
 * @param m03 Component in column 0, row 3 position (index 3)
 * @param m10 Component in column 1, row 0 position (index 4)
 * @param m11 Component in column 1, row 1 position (index 5)
 * @param m12 Component in column 1, row 2 position (index 6)
 * @param m13 Component in column 1, row 3 position (index 7)
 * @param m20 Component in column 2, row 0 position (index 8)
 * @param m21 Component in column 2, row 1 position (index 9)
 * @param m22 Component in column 2, row 2 position (index 10)
 * @param m23 Component in column 2, row 3 position (index 11)
 * @param m30 Component in column 3, row 0 position (index 12)
 * @param m31 Component in column 3, row 1 position (index 13)
 * @param m32 Component in column 3, row 2 position (index 14)
 * @param m33 Component in column 3, row 3 position (index 15)
 * @returns out
 */
export declare function set(out: Mat4, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Mat4;
/**
 * Set a mat4 to the identity matrix
 *
 * @param out the receiving matrix
 * @returns out
 */
export declare function identity(out: Mat4): Mat4;
/**
 * Set a mat4 to the zero matrix
 *
 * @param out the receiving matrix
 * @returns out
 */
export declare function zero(out: Mat4): Mat4;
/**
 * Transpose the values of a mat4
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function transpose(out: Mat4, a: Mat4): Mat4;
/**
 * Inverts a mat4
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out, or null if source matrix is not invertible
 */
export declare function invert(out: Mat4, a: Mat4): Mat4 | null;
/**
 * Inverts only the 3x3 rotation part of a mat4.
 * Sets the translation column and bottom row to [0, 0, 0, 1].
 * Equivalent to Jolt's Mat44::Inversed3x3()
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out, or null if the 3x3 part is not invertible
 */
export declare function invert3x3(out: Mat4, a: Mat4): Mat4 | null;
/**
 * Calculates the adjugate of a mat4
 *
 * @param out the receiving matrix
 * @param a the source matrix
 * @returns out
 */
export declare function adjoint(out: Mat4, a: Mat4): Mat4;
/**
 * Calculates the determinant of a mat4
 *
 * @param a the source matrix
 * @returns determinant of a
 */
export declare function determinant(a: Mat4): number;
/**
 * Multiplies two mat4s
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply(out: Mat4, a: Mat4, b: Mat4): Mat4;
/**
 * Multiplies two mat4s treating them as 3x3 rotation matrices.
 * Only computes the upper-left 3x3 portion, sets the 4th column to [0,0,0,1].
 * More efficient than full mat4.multiply when working with pure rotations.
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function multiply3x3(out: Mat4, a: Mat4, b: Mat4): Mat4;
/**
 * Multiplies a mat4 by the transpose of another mat4,
 * treating both as 3x3 rotation matrices.
 * Computes: out = a * transpose(b) (3x3 only)
 * Sets the 4th column to [0,0,0,1].
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand (will be transposed)
 * @returns out
 */
export declare function multiply3x3RightTransposed(out: Mat4, a: Mat4, b: Mat4): Mat4;
/**
 * Transform a Vec3 by the transpose of the 3x3 rotation part.
 *
 * @param out the receiving vector
 * @param mat the matrix to transform with
 * @param vec the vector to transform
 * @returns out
 */
export declare function multiply3x3TransposedVec(out: Vec3, mat: Mat4, vec: Vec3): Vec3;
/**
 * Transform a Vec3 by only the 3x3 rotation part of a Mat4.
 *
 * @param out the receiving vector
 * @param mat the matrix to transform with
 * @param vec the vector to transform
 * @returns out
 */
export declare function multiply3x3Vec(out: Vec3, mat: Mat4, vec: Vec3): Vec3;
/**
 * Cross product matrix (skew-symmetric matrix).
 * Equivalent to Jolt's Mat44::sCrossProduct(Vec3Arg)
 *
 * @param out the receiving matrix
 * @param v the vector to create the cross product matrix from
 * @returns out
 */
export declare function crossProductMatrix(out: Mat4, v: Vec3): Mat4;
/**
 * Translate a mat4 by the given vector
 *
 * @param out the receiving matrix
 * @param a the matrix to translate
 * @param v vector to translate by
 * @returns out
 */
export declare function translate(out: Mat4, a: Mat4, v: Vec3): Mat4;
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param out the receiving matrix
 * @param a the matrix to scale
 * @param v the vec3 to scale the matrix by
 * @returns out
 **/
export declare function scale(out: Mat4, a: Mat4, v: Vec3): Mat4;
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param rad the angle to rotate the matrix by
 * @param axis the axis to rotate around
 * @returns out
 */
export declare function rotate(out: Mat4, a: Mat4, rad: number, axis: Vec3): Mat4 | null;
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function rotateX(out: Mat4, a: Mat4, rad: number): Mat4;
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function rotateY(out: Mat4, a: Mat4, rad: number): Mat4;
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param out the receiving matrix
 * @param a the matrix to rotate
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function rotateZ(out: Mat4, a: Mat4, rad: number): Mat4;
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param out mat4 receiving operation result
 * @param v Translation vector
 * @returns out
 */
export declare function fromTranslation(out: Mat4, v: Vec3): Mat4;
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param out mat4 receiving operation result
 * @param v Scaling vector
 * @returns out
 */
export declare function fromScaling(out: Mat4, v: Vec3): Mat4;
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param out mat4 receiving operation result
 * @param rad the angle to rotate the matrix by
 * @param axis the axis to rotate around
 * @returns out
 */
export declare function fromRotation(out: Mat4, rad: number, axis: Vec3): Mat4 | null;
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param out mat4 receiving operation result
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function fromXRotation(out: Mat4, rad: number): Mat4;
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param out mat4 receiving operation result
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function fromYRotation(out: Mat4, rad: number): Mat4;
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param out mat4 receiving operation result
 * @param rad the angle to rotate the matrix by
 * @returns out
 */
export declare function fromZRotation(out: Mat4, rad: number): Mat4;
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *
 * @param out mat4 receiving operation result
 * @param q Rotation quaternion
 * @param v Translation vector
 * @returns out
 */
export declare function fromRotationTranslation(out: Mat4, q: Quat | Quat2, v: Vec3): Mat4;
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param out Matrix
 * @param a Dual Quaternion
 * @returns mat4 receiving operation result
 */
export declare function fromQuat2(out: Mat4, a: Quat2): Mat4;
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param out Vector to receive translation component
 * @param mat Matrix to be decomposed (input)
 * @return out
 */
export declare function getTranslation(out: Vec3, mat: Mat4): Vec3;
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion parameter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param out Vector to receive scaling factor component
 * @param mat Matrix to be decomposed (input)
 * @return out
 */
export declare function getScaling(out: Vec3, mat: Mat4): Vec3;
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param out Quaternion to receive the rotation component
 * @param mat Matrix to be decomposed (input)
 * @return out
 */
export declare function getRotation(out: Quat, mat: Mat4): Quat;
/**
 * Decomposes a transformation matrix into its rotation, translation
 * and scale components. Returns only the rotation component
 * @param out_r Quaternion to receive the rotation component
 * @param out_t Vector to receive the translation vector
 * @param out_s Vector to receive the scaling factor
 * @param mat Matrix to be decomposed (input)
 * @returns out_r
 */
export declare function decompose(out_r: Quat, out_t: Vec3, out_s: Vec3, mat: Mat4): Quat;
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *     mat4.scale(dest, dest, scale)
 *
 * @param out mat4 receiving operation result
 * @param q Rotation quaternion
 * @param v Translation vector
 * @param s Scaling vector
 * @returns out
 */
export declare function fromRotationTranslationScale(out: Mat4, q: Quat, v: Vec3, s: Vec3): Mat4;
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     mat4.translate(dest, dest, origin);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *     mat4.scale(dest, dest, scale)
 *     mat4.translate(dest, dest, negativeOrigin);
 *
 * @param out mat4 receiving operation result
 * @param q Rotation quaternion
 * @param v Translation vector
 * @param s Scaling vector
 * @param o The origin vector around which to scale and rotate
 * @returns out
 */
export declare function fromRotationTranslationScaleOrigin(out: Mat4, q: Quat, v: Vec3, s: Vec3, o: Vec3): Mat4;
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param out mat4 receiving operation result
 * @param q Quaternion to create matrix from
 *
 * @returns out
 */
export declare function fromQuat(out: Mat4, q: Quat): Mat4;
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param out mat4 frustum matrix will be written into
 * @param left Left bound of the frustum
 * @param right Right bound of the frustum
 * @param bottom Bottom bound of the frustum
 * @param top Top bound of the frustum
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum
 * @returns out
 */
export declare function frustum(out: Mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): Mat4;
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param out mat4 frustum matrix will be written into
 * @param fovy Vertical field of view in radians
 * @param aspect Aspect ratio. typically viewport width/height
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum, can be null or Infinity
 * @returns out
 */
export declare function perspectiveNO(out: Mat4, fovy: number, aspect: number, near: number, far: number): Mat4;
/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */
export declare const perspective: typeof perspectiveNO;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param out mat4 frustum matrix will be written into
 * @param fovy Vertical field of view in radians
 * @param aspect Aspect ratio. typically viewport width/height
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum, can be null or Infinity
 * @returns out
 */
export declare function perspectiveZO(out: Mat4, fovy: number, aspect: number, near: number, far: number): Mat4;
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param out mat4 frustum matrix will be written into
 * @param fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum
 * @returns out
 */
export declare function perspectiveFromFieldOfView(out: Mat4, fov: {
    upDegrees: number;
    downDegrees: number;
    leftDegrees: number;
    rightDegrees: number;
}, near: number, far: number): Mat4;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param out mat4 frustum matrix will be written into
 * @param left Left bound of the frustum
 * @param right Right bound of the frustum
 * @param bottom Bottom bound of the frustum
 * @param top Top bound of the frustum
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum
 * @returns out
 */
export declare function orthoNO(out: Mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): Mat4;
/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */
export declare const ortho: typeof orthoNO;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param out mat4 frustum matrix will be written into
 * @param left Left bound of the frustum
 * @param right Right bound of the frustum
 * @param bottom Bottom bound of the frustum
 * @param top Top bound of the frustum
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum
 * @returns out
 */
export declare function orthoZO(out: Mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): Mat4;
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param out mat4 frustum matrix will be written into
 * @param eye Position of the viewer
 * @param center Point the viewer is looking at
 * @param up vec3 pointing up
 * @returns out
 */
export declare function lookAt(out: Mat4, eye: Vec3, center: Vec3, up: Vec3): Mat4;
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param out mat4 frustum matrix will be written into
 * @param eye Position of the viewer
 * @param target Point the viewer is looking at
 * @param up vec3 pointing up
 * @returns out
 */
export declare function targetTo(out: Mat4, eye: Vec3, target: Vec3, up: Vec3): Mat4;
/**
 * Returns a string representation of a mat4
 *
 * @param a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
export declare function str(a: Mat4): string;
/**
 * Returns Frobenius norm of a mat4
 *
 * @param a the matrix to calculate Frobenius norm of
 * @returns Frobenius norm
 */
export declare function frob(a: Mat4): number;
/**
 * Adds two mat4's
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function add(out: Mat4, a: Mat4, b: Mat4): Mat4;
/**
 * Subtracts matrix b from matrix a
 *
 * @param out the receiving matrix
 * @param a the first operand
 * @param b the second operand
 * @returns out
 */
export declare function subtract(out: Mat4, a: Mat4, b: Mat4): Mat4;
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param out the receiving matrix
 * @param a the matrix to scale
 * @param b amount to scale the matrix's elements by
 * @returns out
 */
export declare function multiplyScalar(out: Mat4, a: Mat4, b: number): Mat4;
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param out the receiving vector
 * @param a the first operand
 * @param b the second operand
 * @param scale the amount to scale b's elements by before adding
 * @returns out
 */
export declare function multiplyScalarAndAdd(out: Mat4, a: Mat4, b: Mat4, scale: number): Mat4;
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export declare function exactEquals(a: Mat4, b: Mat4): boolean;
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param a The first matrix.
 * @param b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export declare function equals(a: Mat4, b: Mat4): boolean;
/**
 * Alias for {@link mat4.multiply}
 * @function
 */
export declare const mul: typeof multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */
export declare const sub: typeof subtract;
