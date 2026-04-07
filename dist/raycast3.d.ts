import type { Box3, Raycast3, Vec3 } from './types';
/**
 * Creates a new Raycast3 with default values (origin at (0,0,0), direction (0,0,0), length 1.
 * @returns A new Raycast3.
 */
export declare function create(): Raycast3;
/**
 * Creates a new Raycast3 from given values.
 * @param origin The origin Vec3.
 * @param direction The direction Vec3.
 * @param length The length of the ray.
 * @returns A new Raycast3.
 */
export declare function fromValues(origin: Vec3, direction: Vec3, length: number): Raycast3;
/**
 * Sets the components of a Raycast3.
 * @param out The output Raycast3.
 * @param origin The origin Vec3.
 * @param direction The direction Vec3.
 * @param length The length of the ray.
 * @returns The output Raycast3.
 */
export declare function set(out: Raycast3, origin: Vec3, direction: Vec3, length: number): Raycast3;
/**
 * Copies a Raycast3.
 * @param out The output Raycast3.
 * @param a The input Raycast3.
 * @returns The output Raycast3.
 */
export declare function copy(out: Raycast3, a: Raycast3): Raycast3;
/**
 * Creates a Raycast3 from two points.
 * @param out The output Raycast3.
 * @param a The starting point.
 * @param b The ending point.
 * @returns The output Raycast3.
 */
export declare function fromSegment(out: Raycast3, a: Vec3, b: Vec3): Raycast3;
/**
 * Result of a ray-triangle intersection test
 * @see createIntersectsTriangleResult
 * @see intersectsTriangle
 */
export type IntersectsTriangleResult = {
    fraction: number;
    hit: boolean;
    frontFacing: boolean;
};
/**
 * Creates a new IntersectsTriangleResult with default values.
 * @returns A new IntersectsTriangleResult.
 */
export declare function createIntersectsTriangleResult(): IntersectsTriangleResult;
/**
 * Ray-triangle intersection test.
 * Based on https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
 *
 * @param out output object to store result (hit boolean, fraction, frontFacing)
 * @param ray ray to test (with origin, direction, and length)
 * @param a first vertex of triangle
 * @param b second vertex of triangle
 * @param c third vertex of triangle
 * @param backfaceCulling if true, backfaces will not be considered hits
 */
export declare function intersectsTriangle(out: IntersectsTriangleResult, ray: Raycast3, a: Vec3, b: Vec3, c: Vec3, backfaceCulling: boolean): void;
/**
 * Test if a ray intersects an axis-aligned bounding box.
 * Uses slab-based algorithm that handles parallel rays correctly.
 *
 * @param ray Ray to test (with origin, direction, and length)
 * @param aabb AABB to test against
 * @returns true if ray intersects the AABB, false otherwise
 */
export declare function intersectsBox3(ray: Raycast3, aabb: Box3): boolean;
