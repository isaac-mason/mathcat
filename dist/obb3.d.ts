import type { Box3, Mat3, Mat4, OBB3, Quat, Vec3 } from './types.js';
export declare function create(): OBB3;
export declare function clone(a: OBB3): OBB3;
export declare function copy(out: OBB3, a: OBB3): OBB3;
/**
 * Sets an OBB from center, half extents, and a rotation matrix.
 * @param out the OBB to store the result
 * @param center the center of the OBB
 * @param halfExtents the half extents of the OBB
 * @param rotation the Mat3 rotation matrix
 * @returns the OBB with the given center, half extents, and rotation
 */
export declare function set(out: OBB3, center: Vec3, halfExtents: Vec3, rotation: Mat3): OBB3;
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
export declare function setFromCenterHalfExtentsQuaternion(out: OBB3, center: Vec3, halfExtents: Vec3, q: Quat): OBB3;
/**
 * Creates an OBB from an axis-aligned bounding box (AABB).
 * The resulting OBB will have the same center and extents as the AABB,
 * with no rotation (identity orientation).
 *
 * @param out - The OBB to store the result
 * @param aabb - The AABB (min and max corners)
 * @returns out
 */
export declare function setFromBox3(out: OBB3, aabb: Box3): OBB3;
/**
 * Tests whether a point is contained within an OBB.
 *
 * @param obb - The OBB to test
 * @param point - The point to test
 * @returns true if the point is inside the OBB
 */
export declare function containsPoint(obb: OBB3, point: Vec3): boolean;
export declare function clampPoint(out: Vec3, obb: OBB3, point: Vec3): Vec3;
export declare function intersectsOBB3(a: OBB3, b: OBB3, epsilon?: number): boolean;
/**
 * Tests whether an OBB intersects with an AABB.
 *
 * @param obb - The OBB
 * @param aabb - The AABB (axis-aligned bounding box)
 * @returns true if they intersect
 */
export declare function intersectsBox3(obb: OBB3, aabb: Box3): boolean;
export declare function applyMatrix4(out: OBB3, obb: OBB3, matrix: Mat4): OBB3;
