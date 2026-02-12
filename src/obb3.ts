import * as mat3 from './mat3';
import * as mat4 from './mat4';
import type { Box3, Mat3, Mat4, OBB3, Quat, Vec3 } from './types';
import * as vec3 from './vec3';

export function create(): OBB3 {
    return { center: [0, 0, 0], halfExtents: [1, 1, 1], rotation: mat3.create() };
}

export function clone(a: OBB3): OBB3 {
    return {
        center: [a.center[0], a.center[1], a.center[2]],
        halfExtents: [a.halfExtents[0], a.halfExtents[1], a.halfExtents[2]],
        rotation: mat3.clone(a.rotation),
    };
}

export function copy(out: OBB3, a: OBB3): OBB3 {
    out.center[0] = a.center[0];
    out.center[1] = a.center[1];
    out.center[2] = a.center[2];
    out.halfExtents[0] = a.halfExtents[0];
    out.halfExtents[1] = a.halfExtents[1];
    out.halfExtents[2] = a.halfExtents[2];
    out.rotation[0] = a.rotation[0];
    out.rotation[1] = a.rotation[1];
    out.rotation[2] = a.rotation[2];
    out.rotation[3] = a.rotation[3];
    out.rotation[4] = a.rotation[4];
    out.rotation[5] = a.rotation[5];
    out.rotation[6] = a.rotation[6];
    out.rotation[7] = a.rotation[7];
    out.rotation[8] = a.rotation[8];
    return out;
}

/**
 * Sets an OBB from center, half extents, and a rotation matrix.
 * @param out the OBB to store the result
 * @param center the center of the OBB
 * @param halfExtents the half extents of the OBB
 * @param rotation the Mat3 rotation matrix
 * @returns the OBB with the given center, half extents, and rotation
 */
export function set(out: OBB3, center: Vec3, halfExtents: Vec3, rotation: Mat3): OBB3 {
    out.center[0] = center[0];
    out.center[1] = center[1];
    out.center[2] = center[2];
    out.halfExtents[0] = halfExtents[0];
    out.halfExtents[1] = halfExtents[1];
    out.halfExtents[2] = halfExtents[2];
    out.rotation[0] = rotation[0];
    out.rotation[1] = rotation[1];
    out.rotation[2] = rotation[2];
    out.rotation[3] = rotation[3];
    out.rotation[4] = rotation[4];
    out.rotation[5] = rotation[5];
    out.rotation[6] = rotation[6];
    out.rotation[7] = rotation[7];
    out.rotation[8] = rotation[8];
    return out;
}

/**
 * Sets an OBB from center, half extents, and a quaternion.
 * Convenience helper for users who store orientation as a quaternion.
 *
 * @param out - The OBB to store the result
 * @param center - The center of the OBB
 * @param halfExtents - The half extents of the OBB
 * @param q - The quaternion representing the OBB's orientation
 * @returns out
 */
export function setFromCenterHalfExtentsQuaternion(out: OBB3, center: Vec3, halfExtents: Vec3, q: Quat): OBB3 {
    out.center[0] = center[0];
    out.center[1] = center[1];
    out.center[2] = center[2];
    out.halfExtents[0] = halfExtents[0];
    out.halfExtents[1] = halfExtents[1];
    out.halfExtents[2] = halfExtents[2];
    mat3.fromQuat(out.rotation, q);
    return out;
}

/**
 * Creates an OBB from an axis-aligned bounding box (AABB).
 * The resulting OBB will have the same center and extents as the AABB,
 * with no rotation (identity orientation).
 *
 * @param out - The OBB to store the result
 * @param aabb - The AABB (min and max corners)
 * @returns out
 */
export function setFromBox3(out: OBB3, aabb: Box3): OBB3 {
    const min = aabb[0];
    const max = aabb[1];

    // Center = (min + max) / 2
    out.center[0] = (min[0] + max[0]) * 0.5;
    out.center[1] = (min[1] + max[1]) * 0.5;
    out.center[2] = (min[2] + max[2]) * 0.5;

    // Half extents = (max - min) / 2
    out.halfExtents[0] = (max[0] - min[0]) * 0.5;
    out.halfExtents[1] = (max[1] - min[1]) * 0.5;
    out.halfExtents[2] = (max[2] - min[2]) * 0.5;

    // Identity rotation
    mat3.identity(out.rotation);

    return out;
}

const _containsPoint_localPoint = /*@__PURE__*/ vec3.create();

/**
 * Tests whether a point is contained within an OBB.
 *
 * @param obb - The OBB to test
 * @param point - The point to test
 * @returns true if the point is inside the OBB
 */
export function containsPoint(obb: OBB3, point: Vec3): boolean {
    // Vector from center to point
    const dx = point[0] - obb.center[0];
    const dy = point[1] - obb.center[1];
    const dz = point[2] - obb.center[2];

    // Project onto each axis using the transpose of the rotation matrix
    // (transpose = inverse for orthonormal matrices)
    const r = obb.rotation;

    // Project onto x-axis (column 0 of rotation)
    _containsPoint_localPoint[0] = dx * r[0] + dy * r[1] + dz * r[2];
    // Project onto y-axis (column 1 of rotation)
    _containsPoint_localPoint[1] = dx * r[3] + dy * r[4] + dz * r[5];
    // Project onto z-axis (column 2 of rotation)
    _containsPoint_localPoint[2] = dx * r[6] + dy * r[7] + dz * r[8];

    // Check if local coordinates are within half extents
    return (
        Math.abs(_containsPoint_localPoint[0]) <= obb.halfExtents[0] &&
        Math.abs(_containsPoint_localPoint[1]) <= obb.halfExtents[1] &&
        Math.abs(_containsPoint_localPoint[2]) <= obb.halfExtents[2]
    );
}

/**
 * Clamps a point to the surface or interior of an OBB.
 * Reference: Closest Point on OBB to Point in Real-Time Collision Detection
 * by Christer Ericson (chapter 5.1.4)
 *
 * @param out - The clamped point result
 * @param obb - The OBB
 * @param point - The point to clamp
 * @returns out
 */
const _clampPoint_xAxis = vec3.create();
const _clampPoint_yAxis = vec3.create();
const _clampPoint_zAxis = vec3.create();

export function clampPoint(out: Vec3, obb: OBB3, point: Vec3): Vec3 {
    const r = obb.rotation;

    // Extract axes directly from rotation matrix columns
    _clampPoint_xAxis[0] = r[0];
    _clampPoint_xAxis[1] = r[1];
    _clampPoint_xAxis[2] = r[2];
    _clampPoint_yAxis[0] = r[3];
    _clampPoint_yAxis[1] = r[4];
    _clampPoint_yAxis[2] = r[5];
    _clampPoint_zAxis[0] = r[6];
    _clampPoint_zAxis[1] = r[7];
    _clampPoint_zAxis[2] = r[8];

    // Vector from center to point
    const dx = point[0] - obb.center[0];
    const dy = point[1] - obb.center[1];
    const dz = point[2] - obb.center[2];

    // Start at center
    vec3.copy(out, obb.center);

    // Project onto each axis and clamp
    let dist = dx * _clampPoint_xAxis[0] + dy * _clampPoint_xAxis[1] + dz * _clampPoint_xAxis[2];
    dist = Math.max(-obb.halfExtents[0], Math.min(obb.halfExtents[0], dist));
    out[0] += _clampPoint_xAxis[0] * dist;
    out[1] += _clampPoint_xAxis[1] * dist;
    out[2] += _clampPoint_xAxis[2] * dist;

    dist = dx * _clampPoint_yAxis[0] + dy * _clampPoint_yAxis[1] + dz * _clampPoint_yAxis[2];
    dist = Math.max(-obb.halfExtents[1], Math.min(obb.halfExtents[1], dist));
    out[0] += _clampPoint_yAxis[0] * dist;
    out[1] += _clampPoint_yAxis[1] * dist;
    out[2] += _clampPoint_yAxis[2] * dist;

    dist = dx * _clampPoint_zAxis[0] + dy * _clampPoint_zAxis[1] + dz * _clampPoint_zAxis[2];
    dist = Math.max(-obb.halfExtents[2], Math.min(obb.halfExtents[2], dist));
    out[0] += _clampPoint_zAxis[0] * dist;
    out[1] += _clampPoint_zAxis[1] * dist;
    out[2] += _clampPoint_zAxis[2] * dist;

    return out;
}

/**
 * Tests whether an OBB intersects with another OBB using the Separating Axis Theorem.
 * Reference: OBB-OBB Intersection in Real-Time Collision Detection
 * by Christer Ericson (chapter 4.4.1)
 *
 * @param a - The first OBB
 * @param b - The second OBB
 * @param epsilon - Small value to prevent arithmetic errors when edges are parallel
 * @returns true if the OBBs intersect
 */
const _intersectsOBB3_R: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
const _intersectsOBB3_t = /*@__PURE__*/ vec3.create();
const _intersectsOBB3_tInA = /*@__PURE__*/ vec3.create();
const _intersectsOBB3_AbsR: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
const _intersectsOBB3_aU: [Vec3, Vec3, Vec3] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
const _intersectsOBB3_bU: [Vec3, Vec3, Vec3] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

export function intersectsOBB3(a: OBB3, b: OBB3, epsilon = Number.EPSILON): boolean {
    const rotA = a.rotation;
    const rotB = b.rotation;

    // Extract axes directly from rotation matrix columns
    _intersectsOBB3_aU[0][0] = rotA[0];
    _intersectsOBB3_aU[0][1] = rotA[1];
    _intersectsOBB3_aU[0][2] = rotA[2];
    _intersectsOBB3_aU[1][0] = rotA[3];
    _intersectsOBB3_aU[1][1] = rotA[4];
    _intersectsOBB3_aU[1][2] = rotA[5];
    _intersectsOBB3_aU[2][0] = rotA[6];
    _intersectsOBB3_aU[2][1] = rotA[7];
    _intersectsOBB3_aU[2][2] = rotA[8];

    _intersectsOBB3_bU[0][0] = rotB[0];
    _intersectsOBB3_bU[0][1] = rotB[1];
    _intersectsOBB3_bU[0][2] = rotB[2];
    _intersectsOBB3_bU[1][0] = rotB[3];
    _intersectsOBB3_bU[1][1] = rotB[4];
    _intersectsOBB3_bU[1][2] = rotB[5];
    _intersectsOBB3_bU[2][0] = rotB[6];
    _intersectsOBB3_bU[2][1] = rotB[7];
    _intersectsOBB3_bU[2][2] = rotB[8];

    // Compute rotation matrix expressing b in a's coordinate frame
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            _intersectsOBB3_R[i][j] = vec3.dot(_intersectsOBB3_aU[i], _intersectsOBB3_bU[j]);
        }
    }

    // Translation vector
    vec3.subtract(_intersectsOBB3_t, b.center, a.center);

    // Bring translation into a's coordinate frame
    _intersectsOBB3_tInA[0] = vec3.dot(_intersectsOBB3_t, _intersectsOBB3_aU[0]);
    _intersectsOBB3_tInA[1] = vec3.dot(_intersectsOBB3_t, _intersectsOBB3_aU[1]);
    _intersectsOBB3_tInA[2] = vec3.dot(_intersectsOBB3_t, _intersectsOBB3_aU[2]);

    // Compute common subexpressions with epsilon
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            _intersectsOBB3_AbsR[i][j] = Math.abs(_intersectsOBB3_R[i][j]) + epsilon;
        }
    }

    let ra: number, rb: number;

    // Test axes L = A0, L = A1, L = A2
    for (let i = 0; i < 3; i++) {
        ra = a.halfExtents[i];
        rb =
            b.halfExtents[0] * _intersectsOBB3_AbsR[i][0] +
            b.halfExtents[1] * _intersectsOBB3_AbsR[i][1] +
            b.halfExtents[2] * _intersectsOBB3_AbsR[i][2];
        if (Math.abs(_intersectsOBB3_tInA[i]) > ra + rb) return false;
    }

    // Test axes L = B0, L = B1, L = B2
    for (let i = 0; i < 3; i++) {
        ra =
            a.halfExtents[0] * _intersectsOBB3_AbsR[0][i] +
            a.halfExtents[1] * _intersectsOBB3_AbsR[1][i] +
            a.halfExtents[2] * _intersectsOBB3_AbsR[2][i];
        rb = b.halfExtents[i];
        if (
            Math.abs(
                _intersectsOBB3_tInA[0] * _intersectsOBB3_R[0][i] +
                    _intersectsOBB3_tInA[1] * _intersectsOBB3_R[1][i] +
                    _intersectsOBB3_tInA[2] * _intersectsOBB3_R[2][i],
            ) >
            ra + rb
        )
            return false;
    }

    // Test axis L = A0 x B0
    ra = a.halfExtents[1] * _intersectsOBB3_AbsR[2][0] + a.halfExtents[2] * _intersectsOBB3_AbsR[1][0];
    rb = b.halfExtents[1] * _intersectsOBB3_AbsR[0][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[0][1];
    if (Math.abs(_intersectsOBB3_tInA[2] * _intersectsOBB3_R[1][0] - _intersectsOBB3_tInA[1] * _intersectsOBB3_R[2][0]) > ra + rb)
        return false;

    // Test axis L = A0 x B1
    ra = a.halfExtents[1] * _intersectsOBB3_AbsR[2][1] + a.halfExtents[2] * _intersectsOBB3_AbsR[1][1];
    rb = b.halfExtents[0] * _intersectsOBB3_AbsR[0][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[0][0];
    if (Math.abs(_intersectsOBB3_tInA[2] * _intersectsOBB3_R[1][1] - _intersectsOBB3_tInA[1] * _intersectsOBB3_R[2][1]) > ra + rb)
        return false;

    // Test axis L = A0 x B2
    ra = a.halfExtents[1] * _intersectsOBB3_AbsR[2][2] + a.halfExtents[2] * _intersectsOBB3_AbsR[1][2];
    rb = b.halfExtents[0] * _intersectsOBB3_AbsR[0][1] + b.halfExtents[1] * _intersectsOBB3_AbsR[0][0];
    if (Math.abs(_intersectsOBB3_tInA[2] * _intersectsOBB3_R[1][2] - _intersectsOBB3_tInA[1] * _intersectsOBB3_R[2][2]) > ra + rb)
        return false;

    // Test axis L = A1 x B0
    ra = a.halfExtents[0] * _intersectsOBB3_AbsR[2][0] + a.halfExtents[2] * _intersectsOBB3_AbsR[0][0];
    rb = b.halfExtents[1] * _intersectsOBB3_AbsR[1][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[1][1];
    if (Math.abs(_intersectsOBB3_tInA[0] * _intersectsOBB3_R[2][0] - _intersectsOBB3_tInA[2] * _intersectsOBB3_R[0][0]) > ra + rb)
        return false;

    // Test axis L = A1 x B1
    ra = a.halfExtents[0] * _intersectsOBB3_AbsR[2][1] + a.halfExtents[2] * _intersectsOBB3_AbsR[0][1];
    rb = b.halfExtents[0] * _intersectsOBB3_AbsR[1][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[1][0];
    if (Math.abs(_intersectsOBB3_tInA[0] * _intersectsOBB3_R[2][1] - _intersectsOBB3_tInA[2] * _intersectsOBB3_R[0][1]) > ra + rb)
        return false;

    // Test axis L = A1 x B2
    ra = a.halfExtents[0] * _intersectsOBB3_AbsR[2][2] + a.halfExtents[2] * _intersectsOBB3_AbsR[0][2];
    rb = b.halfExtents[0] * _intersectsOBB3_AbsR[1][1] + b.halfExtents[1] * _intersectsOBB3_AbsR[1][0];
    if (Math.abs(_intersectsOBB3_tInA[0] * _intersectsOBB3_R[2][2] - _intersectsOBB3_tInA[2] * _intersectsOBB3_R[0][2]) > ra + rb)
        return false;

    // Test axis L = A2 x B0
    ra = a.halfExtents[0] * _intersectsOBB3_AbsR[1][0] + a.halfExtents[1] * _intersectsOBB3_AbsR[0][0];
    rb = b.halfExtents[1] * _intersectsOBB3_AbsR[2][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[2][1];
    if (Math.abs(_intersectsOBB3_tInA[1] * _intersectsOBB3_R[0][0] - _intersectsOBB3_tInA[0] * _intersectsOBB3_R[1][0]) > ra + rb)
        return false;

    // Test axis L = A2 x B1
    ra = a.halfExtents[0] * _intersectsOBB3_AbsR[1][1] + a.halfExtents[1] * _intersectsOBB3_AbsR[0][1];
    rb = b.halfExtents[0] * _intersectsOBB3_AbsR[2][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[2][0];
    if (Math.abs(_intersectsOBB3_tInA[1] * _intersectsOBB3_R[0][1] - _intersectsOBB3_tInA[0] * _intersectsOBB3_R[1][1]) > ra + rb)
        return false;

    // Test axis L = A2 x B2
    ra = a.halfExtents[0] * _intersectsOBB3_AbsR[1][2] + a.halfExtents[1] * _intersectsOBB3_AbsR[0][2];
    rb = b.halfExtents[0] * _intersectsOBB3_AbsR[2][1] + b.halfExtents[1] * _intersectsOBB3_AbsR[2][0];
    if (Math.abs(_intersectsOBB3_tInA[1] * _intersectsOBB3_R[0][2] - _intersectsOBB3_tInA[0] * _intersectsOBB3_R[1][2]) > ra + rb)
        return false;

    // No separating axis found - OBBs must be intersecting
    return true;
}

const _intersectsBox3_obbFromAABB = /*@__PURE__*/ create();

/**
 * Tests whether an OBB intersects with an AABB.
 *
 * @param obb - The OBB
 * @param aabb - The AABB (axis-aligned bounding box)
 * @returns true if they intersect
 */
export function intersectsBox3(obb: OBB3, aabb: Box3): boolean {
    const obbFromAABB = setFromBox3(_intersectsBox3_obbFromAABB, aabb);
    return intersectsOBB3(obb, obbFromAABB);
}

/**
 * Applies a 4x4 transformation matrix to an OBB.
 * This can be used to transform the bounding volume with the world matrix
 * of a 3D object to keep both entities in sync.
 *
 * @param out - The transformed OBB
 * @param obb - The OBB to transform
 * @param matrix - The 4x4 transformation matrix
 * @returns out
 */
const _applyMatrix4_rotationMat = /*@__PURE__*/ mat3.create();

export function applyMatrix4(out: OBB3, obb: OBB3, matrix: Mat4): OBB3 {
    const e = matrix;

    // Extract scale from matrix
    let sx = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    const sy = Math.sqrt(e[4] * e[4] + e[5] * e[5] + e[6] * e[6]);
    const sz = Math.sqrt(e[8] * e[8] + e[9] * e[9] + e[10] * e[10]);

    // Handle negative scale (reflection)
    const det = mat4.determinant(matrix);
    if (det < 0) sx = -sx;

    // Extract rotation
    mat3.fromMat4(_applyMatrix4_rotationMat, matrix);

    // Remove scale from rotation
    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;

    _applyMatrix4_rotationMat[0] *= invSX;
    _applyMatrix4_rotationMat[1] *= invSX;
    _applyMatrix4_rotationMat[2] *= invSX;
    _applyMatrix4_rotationMat[3] *= invSY;
    _applyMatrix4_rotationMat[4] *= invSY;
    _applyMatrix4_rotationMat[5] *= invSY;
    _applyMatrix4_rotationMat[6] *= invSZ;
    _applyMatrix4_rotationMat[7] *= invSZ;
    _applyMatrix4_rotationMat[8] *= invSZ;

    // Combine rotations: out.rotation = extractedRotation * obb.rotation
    mat3.multiply(out.rotation, _applyMatrix4_rotationMat, obb.rotation);

    // Scale half extents
    out.halfExtents[0] = obb.halfExtents[0] * Math.abs(sx);
    out.halfExtents[1] = obb.halfExtents[1] * Math.abs(sy);
    out.halfExtents[2] = obb.halfExtents[2] * Math.abs(sz);

    // Transform center through the full matrix (rotation + translation)
    vec3.transformMat4(out.center, obb.center, matrix);

    return out;
}
