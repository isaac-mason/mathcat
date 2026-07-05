import type { Box3, Vec3 } from './types.js';
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
 * @param origin ray origin
 * @param direction ray direction
 * @param length ray length
 * @param a first vertex of triangle
 * @param b second vertex of triangle
 * @param c third vertex of triangle
 * @param backfaceCulling if true, backfaces will not be considered hits
 */
export declare function intersectsTriangle(out: IntersectsTriangleResult, origin: Vec3, direction: Vec3, length: number, a: Vec3, b: Vec3, c: Vec3, backfaceCulling: boolean): void;
/**
 * Test if a ray intersects an axis-aligned bounding box.
 * Uses slab-based algorithm that handles parallel rays correctly.
 *
 * @param origin ray origin
 * @param direction ray direction
 * @param length ray length
 * @param aabb AABB to test against
 * @returns true if ray intersects the AABB, false otherwise
 */
export declare function intersectsBox3(origin: Vec3, direction: Vec3, length: number, aabb: Box3): boolean;
