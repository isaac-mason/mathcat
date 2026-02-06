import * as mat3 from './mat3';
import * as mat4 from './mat4';
import * as quat from './quat';
import type { Box3, Mat4, OBB3, Quat, Vec3 } from './types';
import * as vec3 from './vec3';

export function create(): OBB3 {
    return { center: [0, 0, 0], halfExtents: [1, 1, 1], quaternion: [0, 0, 0, 1] };
}

export function clone(a: OBB3): OBB3 {
    return {
        center: [a.center[0], a.center[1], a.center[2]],
        halfExtents: [a.halfExtents[0], a.halfExtents[1], a.halfExtents[2]],
        quaternion: [a.quaternion[0], a.quaternion[1], a.quaternion[2], a.quaternion[3]],
    };
}

export function copy(out: OBB3, a: OBB3): OBB3 {
    out.center[0] = a.center[0];
    out.center[1] = a.center[1];
    out.center[2] = a.center[2];
    out.halfExtents[0] = a.halfExtents[0];
    out.halfExtents[1] = a.halfExtents[1];
    out.halfExtents[2] = a.halfExtents[2];
    out.quaternion[0] = a.quaternion[0];
    out.quaternion[1] = a.quaternion[1];
    out.quaternion[2] = a.quaternion[2];
    out.quaternion[3] = a.quaternion[3];
    return out;
}

export function set(out: OBB3, center: Vec3, halfExtents: Vec3, quaternion: Quat): OBB3 {
    out.center[0] = center[0];
    out.center[1] = center[1];
    out.center[2] = center[2];
    out.halfExtents[0] = halfExtents[0];
    out.halfExtents[1] = halfExtents[1];
    out.halfExtents[2] = halfExtents[2];
    out.quaternion[0] = quaternion[0];
    out.quaternion[1] = quaternion[1];
    out.quaternion[2] = quaternion[2];
    out.quaternion[3] = quaternion[3];
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
    out.quaternion[0] = 0;
    out.quaternion[1] = 0;
    out.quaternion[2] = 0;
    out.quaternion[3] = 1;

    return out;
}

const _containsPoint_localPoint = /*@__PURE__*/ vec3.create();
const _containsPoint_invQuat = /*@__PURE__*/ quat.create();

/**
 * Tests whether a point is contained within an OBB.
 *
 * @param obb - The OBB to test
 * @param point - The point to test
 * @returns true if the point is inside the OBB
 */
export function containsPoint(obb: OBB3, point: Vec3): boolean {
    // Transform point to OBB's local space
    vec3.subtract(_containsPoint_localPoint, point, obb.center);

    // Get inverse quaternion for rotation
    quat.invert(_containsPoint_invQuat, obb.quaternion);
    vec3.transformQuat(_containsPoint_localPoint, _containsPoint_localPoint, _containsPoint_invQuat);

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
const _clampPoint_rotation = mat3.create();
const _clampPoint_xAxis = vec3.create();
const _clampPoint_yAxis = vec3.create();
const _clampPoint_zAxis = vec3.create();
const _clampPoint_d = vec3.create();

export function clampPoint(out: Vec3, obb: OBB3, point: Vec3): Vec3 {
    // Get OBB basis vectors
    mat3.fromQuat(_clampPoint_rotation, obb.quaternion);

    _clampPoint_xAxis[0] = _clampPoint_rotation[0];
    _clampPoint_xAxis[1] = _clampPoint_rotation[1];
    _clampPoint_xAxis[2] = _clampPoint_rotation[2];
    _clampPoint_yAxis[0] = _clampPoint_rotation[3];
    _clampPoint_yAxis[1] = _clampPoint_rotation[4];
    _clampPoint_yAxis[2] = _clampPoint_rotation[5];
    _clampPoint_zAxis[0] = _clampPoint_rotation[6];
    _clampPoint_zAxis[1] = _clampPoint_rotation[7];
    _clampPoint_zAxis[2] = _clampPoint_rotation[8];

    // Vector from center to point
    vec3.subtract(_clampPoint_d, point, obb.center);

    // Start at center
    vec3.copy(out, obb.center);

    // Project onto each axis and clamp
    let dist = vec3.dot(_clampPoint_d, _clampPoint_xAxis);
    dist = Math.max(-obb.halfExtents[0], Math.min(obb.halfExtents[0], dist));
    out[0] += _clampPoint_xAxis[0] * dist;
    out[1] += _clampPoint_xAxis[1] * dist;
    out[2] += _clampPoint_xAxis[2] * dist;

    dist = vec3.dot(_clampPoint_d, _clampPoint_yAxis);
    dist = Math.max(-obb.halfExtents[1], Math.min(obb.halfExtents[1], dist));
    out[0] += _clampPoint_yAxis[0] * dist;
    out[1] += _clampPoint_yAxis[1] * dist;
    out[2] += _clampPoint_yAxis[2] * dist;

    dist = vec3.dot(_clampPoint_d, _clampPoint_zAxis);
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
const _intersectsOBB3_rotA = /*@__PURE__*/ mat3.create();
const _intersectsOBB3_rotB = /*@__PURE__*/ mat3.create();
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
    // Get basis vectors for both OBBs
    mat3.fromQuat(_intersectsOBB3_rotA, a.quaternion);
    mat3.fromQuat(_intersectsOBB3_rotB, b.quaternion);

    // Extract axes (columns of rotation matrix)
    _intersectsOBB3_aU[0][0] = _intersectsOBB3_rotA[0];
    _intersectsOBB3_aU[0][1] = _intersectsOBB3_rotA[1];
    _intersectsOBB3_aU[0][2] = _intersectsOBB3_rotA[2];
    _intersectsOBB3_aU[1][0] = _intersectsOBB3_rotA[3];
    _intersectsOBB3_aU[1][1] = _intersectsOBB3_rotA[4];
    _intersectsOBB3_aU[1][2] = _intersectsOBB3_rotA[5];
    _intersectsOBB3_aU[2][0] = _intersectsOBB3_rotA[6];
    _intersectsOBB3_aU[2][1] = _intersectsOBB3_rotA[7];
    _intersectsOBB3_aU[2][2] = _intersectsOBB3_rotA[8];

    _intersectsOBB3_bU[0][0] = _intersectsOBB3_rotB[0];
    _intersectsOBB3_bU[0][1] = _intersectsOBB3_rotB[1];
    _intersectsOBB3_bU[0][2] = _intersectsOBB3_rotB[2];
    _intersectsOBB3_bU[1][0] = _intersectsOBB3_rotB[3];
    _intersectsOBB3_bU[1][1] = _intersectsOBB3_rotB[4];
    _intersectsOBB3_bU[1][2] = _intersectsOBB3_rotB[5];
    _intersectsOBB3_bU[2][0] = _intersectsOBB3_rotB[6];
    _intersectsOBB3_bU[2][1] = _intersectsOBB3_rotB[7];
    _intersectsOBB3_bU[2][2] = _intersectsOBB3_rotB[8];

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
const _applyMatrix4_currentRot = /*@__PURE__*/ mat3.create();
const _applyMatrix4_translation = /*@__PURE__*/ vec3.create();

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

    // Combine rotations
    mat3.fromQuat(_applyMatrix4_currentRot, obb.quaternion);
    mat3.multiply(_applyMatrix4_currentRot, _applyMatrix4_currentRot, _applyMatrix4_rotationMat);
    quat.fromMat3(out.quaternion, _applyMatrix4_currentRot);
    quat.normalize(out.quaternion, out.quaternion);

    // Scale half extents
    out.halfExtents[0] = obb.halfExtents[0] * Math.abs(sx);
    out.halfExtents[1] = obb.halfExtents[1] * Math.abs(sy);
    out.halfExtents[2] = obb.halfExtents[2] * Math.abs(sz);

    // Transform center
    _applyMatrix4_translation[0] = e[12];
    _applyMatrix4_translation[1] = e[13];
    _applyMatrix4_translation[2] = e[14];
    vec3.add(out.center, obb.center, _applyMatrix4_translation);

    return out;
}
