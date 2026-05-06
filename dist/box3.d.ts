import type { Box3, Mat4, Plane3, Sphere, Vec3 } from './types.js';
/**
 * Create a new empty Box3 with "min" set to positive infinity and "max" set to negative infinity
 * @returns A new Box3
 */
export declare function create(): Box3;
/**
 * Clones a Box3
 * @param box - A Box3 to clone
 * @returns a clone of box
 */
export declare function clone(box: Box3): Box3;
/**
 * Copies a Box3 to another Box3
 * @param out the output Box3
 * @param box the input Box3
 * @returns the output Box3
 */
export declare function copy(out: Box3, box: Box3): Box3;
/**
 * Sets the min and max values of a Box3
 * @param out - The output Box3
 * @param minX - The minimum X coordinate
 * @param minY - The minimum Y coordinate
 * @param minZ - The minimum Z coordinate
 * @param maxX - The maximum X coordinate
 * @param maxY - The maximum Y coordinate
 * @param maxZ - The maximum Z coordinate
 * @returns The updated Box3
 */
export declare function set(out: Box3, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): Box3;
/**
 * Sets the min and max values of a Box3 from Vec3 vectors
 * @param out - The output Box3
 * @param min - The minimum corner
 * @param max - The maximum corner
 * @returns The updated Box3
 */
export declare function setFromVectors(out: Box3, min: Vec3, max: Vec3): Box3;
/**
 * Extracts the minimum corner of a Box3
 * @param out - The output Vec3 for the minimum corner
 * @param box - The input Box3
 * @returns The minimum corner
 */
export declare function min(out: Vec3, box: Box3): Vec3;
/**
 * Extracts the maximum corner of a Box3
 * @param out - The output Vec3 for the maximum corner
 * @param box - The input Box3
 * @returns The maximum corner
 */
export declare function max(out: Vec3, box: Box3): Vec3;
/**
 * Set a Box3 to empty (min to positive infinity, max to negative infinity)
 * @param out - The Box3 to make empty
 * @returns The emptied Box3
 */
export declare function empty(out: Box3): Box3;
/**
 * Returns whether or not the boxes have exactly the same elements in the same position (when compared with ===)
 * @param a - The first box
 * @param b - The second box
 * @returns True if the boxes are equal, false otherwise
 */
export declare function exactEquals(a: Box3, b: Box3): boolean;
/**
 * Returns whether or not the boxes have approximately the same elements in the same position
 * @param a - The first box
 * @param b - The second box
 * @returns True if the boxes are equal, false otherwise
 */
export declare function equals(a: Box3, b: Box3): boolean;
/**
 * Sets the box from a center point and size
 * @param out - The output Box3
 * @param center - The center point
 * @param size - The size of the box
 * @returns The updated Box3
 */
export declare function setFromCenterAndSize(out: Box3, center: Vec3, size: Vec3): Box3;
/**
 * Expands a Box3 to include a point
 * @param out - The output Box3
 * @param box - The input Box3
 * @param point - The point to include
 * @returns The expanded Box3
 */
export declare function expandByPoint(out: Box3, box: Box3, point: Vec3): Box3;
/**
 * Widens a Box3 by a vector on both sides
 * Subtracts the vector from min and adds it to max
 * @param out - The output Box3
 * @param box - The input Box3
 * @param vector - The vector to expand by
 * @returns The expanded Box3
 */
export declare function expandByExtents(out: Box3, box: Box3, vector: Vec3): Box3;
/**
 * Expands a Box3 uniformly by a scalar margin on all sides
 * Subtracts the margin from min and adds it to max on each axis
 * @param out - The output Box3
 * @param box - The input Box3
 * @param margin - The uniform margin to expand by
 * @returns The expanded Box3
 */
export declare function expandByMargin(out: Box3, box: Box3, margin: number): Box3;
/**
 * Computes the union of two bounding boxes
 * Returns a Box3 that encompasses both input boxes
 * @param out - The output Box3
 * @param boxA - The first Box3
 * @param boxB - The second Box3
 * @returns The union Box3
 */
export declare function union(out: Box3, boxA: Box3, boxB: Box3): Box3;
/**
 * Calculate the center point of a bounding box
 * @param out - The output Vec3 for the center
 * @param box - The input Box3
 * @returns The center point
 */
export declare function center(out: Vec3, box: Box3): Vec3;
/**
 * Calculate the extents (half-size) of a bounding box
 * @param out - The output Vec3 for the extents
 * @param box - The input Box3
 * @returns The extents (distance from center to each face)
 */
export declare function extents(out: Vec3, box: Box3): Vec3;
/**
 * Calculate the size (dimensions) of a bounding box
 * @param out - The output Vec3 for the size
 * @param box - The input Box3
 * @returns The size (width, height, depth)
 */
export declare function size(out: Vec3, box: Box3): Vec3;
/**
 * Calculate the surface area of a bounding box
 * @param box - The input Box3
 * @returns The surface area
 */
export declare function surfaceArea(box: Box3): number;
/**
 * Scale a bounding box by a vector, handling non-uniform and negative scaling
 * @param out - The output Box3
 * @param box - The input Box3
 * @param scale - The scale to apply (as a Vec3)
 * @returns The scaled Box3
 */
export declare function scale(out: Box3, box: Box3, scale: Vec3): Box3;
/**
 * Transform a bounding box by a 4x4 matrix.
 * Uses Arvo's trick — transform the center, build new half-extents from
 * |M| · extents — which is ~4× fewer ops than transforming all 8 corners.
 * Reference: Jim Arvo, "Transforming Axis-Aligned Bounding Boxes",
 * Graphics Gems I (1990).
 * https://github.com/erich666/GraphicsGems/blob/master/gems/TransBox.c
 * Assumes mat is affine (no perspective), which is always true for AABB
 * transforms in practice.
 * Safe under aliasing (out and box may be the same array): all six box
 * components are read into locals before out is written.
 * @param out - The output Box3
 * @param box - The input Box3
 * @param mat - The 4x4 transformation matrix
 * @returns The transformed Box3
 */
export declare function transformMat4(out: Box3, box: Box3, mat: Mat4): Box3;
/**
 * Test if a point is contained within the bounding box
 * @param box - The bounding box
 * @param point - The point to test
 * @returns true if the point is inside or on the boundary of the box
 */
export declare function containsPoint(box: Box3, point: Vec3): boolean;
/**
 * Test if one Box3 completely contains another Box3
 * @param container - The potentially containing Box3
 * @param contained - The Box3 that might be contained
 * @returns true if the container Box3 completely contains the contained Box3
 */
export declare function containsBox3(container: Box3, contained: Box3): boolean;
/**
 * Check whether two bounding boxes intersect
 */
export declare function intersectsBox3(boxA: Box3, boxB: Box3): boolean;
export declare function intersectsTriangle3(box: Box3, a: Vec3, b: Vec3, c: Vec3): boolean;
/**
 * Test intersection between axis-aligned bounding box and a sphere.
 */
export declare function intersectsSphere(box: Box3, sphere: Sphere): boolean;
/**
 * Test intersection between axis-aligned bounding box and plane.
 */
export declare function intersectsPlane3(box: Box3, plane: Plane3): boolean;
