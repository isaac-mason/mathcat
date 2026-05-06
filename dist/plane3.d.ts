import type { Mat4, Plane3, Sphere, Vec3 } from './types.js';
/**
 * Creates a new plane with normal (0, 1, 0) and constant 0
 * @returns A new plane
 */
export declare function create(): Plane3;
/**
 * Creates a plane from a normal and constant
 * @param out - The output plane
 * @param normal - The plane normal (should be unit length)
 * @param constant - The signed distance from origin
 * @returns The output plane
 */
export declare function fromNormalAndConstant(out: Plane3, normal: Vec3, constant: number): Plane3;
/**
 * Creates a plane from a normal and a point on the plane
 * @param out - The output plane
 * @param normal - The plane normal (should be unit length)
 * @param point - A point on the plane
 * @returns The output plane
 */
export declare function fromNormalAndPoint(out: Plane3, normal: Vec3, point: Vec3): Plane3;
/**
 * Creates a plane from three coplanar points
 * @param out - The output plane
 * @param a - First point
 * @param b - Second point
 * @param c - Third point
 * @returns The output plane
 */
export declare function fromCoplanarPoints(out: Plane3, a: Vec3, b: Vec3, c: Vec3): Plane3;
/**
 * Clones a plane
 * @param plane - The plane to clone
 * @returns A new plane
 */
export declare function clone(plane: Plane3): Plane3;
/**
 * Copies one plane to another
 * @param out - The output plane
 * @param plane - The source plane
 * @returns The output plane
 */
export declare function copy(out: Plane3, plane: Plane3): Plane3;
/**
 * Normalizes a plane (ensures the normal vector is unit length)
 * @param out - The output plane
 * @param plane - The input plane
 * @returns The normalized plane
 */
export declare function normalize(out: Plane3, plane: Plane3): Plane3;
/**
 * Negates a plane (flips the normal and constant)
 * @param out - The output plane
 * @param plane - The input plane
 * @returns The negated plane
 */
export declare function negate(out: Plane3, plane: Plane3): Plane3;
/**
 * Offsets a plane by a distance along its normal
 * @param out - The output plane
 * @param plane - The input plane
 * @param distance - The distance to offset (positive = in direction of normal)
 * @returns The offset plane
 */
export declare function offset(out: Plane3, plane: Plane3, distance: number): Plane3;
/**
 * Calculates the signed distance from a point to the plane
 * @param plane - The plane
 * @param point - The point
 * @returns The signed distance (positive = in direction of normal)
 */
export declare function distanceToPoint(plane: Plane3, point: Vec3): number;
/**
 * Projects a point onto the plane
 * @param out - The output point
 * @param plane - The plane
 * @param point - The point to project
 * @returns The projected point
 */
export declare function projectPoint(out: Vec3, plane: Plane3, point: Vec3): Vec3;
/**
 * Transforms a plane by a 4x4 matrix
 * @param out - The output plane
 * @param plane - The plane to transform
 * @param matrix - The transformation matrix
 * @returns The transformed plane
 */
export declare function transform(out: Plane3, plane: Plane3, matrix: Mat4): Plane3;
/**
 * Tests if a sphere intersects the plane
 * @param plane - The plane
 * @param sphere - The sphere
 * @returns True if they intersect
 */
export declare function intersectsSphere(plane: Plane3, sphere: Sphere): boolean;
/**
 * Tests if two planes are exactly equal
 * @param a - First plane
 * @param b - Second plane
 * @returns True if planes are exactly equal
 */
export declare function exactEquals(a: Plane3, b: Plane3): boolean;
/**
 * Finds the intersection point of three planes
 * @param p1 - First plane
 * @param p2 - Second plane
 * @param p3 - Third plane
 * @param out - The output point where the three planes intersect
 * @returns True if intersection exists, false if planes are degenerate or parallel
 */
export declare function intersect(p1: Plane3, p2: Plane3, p3: Plane3, out: Vec3): boolean;
/**
 * Tests if two planes are equal
 * @param a - First plane
 * @param b - Second plane
 * @returns True if planes are equal
 */
export declare function equals(a: Plane3, b: Plane3): boolean;
