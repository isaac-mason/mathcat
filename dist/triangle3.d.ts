import type { Box3, Vec3 } from './types.js';
/**
 * Computes the axis-aligned bounding box of a triangle defined by three vertices.
 * @param out the output box to store the result.
 * @param a the first vertex of the triangle.
 * @param b the second vertex of the triangle.
 * @param c the third vertex of the triangle.
 * @returns the output box containing the axis-aligned bounding box of the triangle.
 */
export declare function bounds(out: Box3, a: Vec3, b: Vec3, c: Vec3): Box3;
/**
 * Computes the normal vector of a triangle defined by three vertices.
 * @param out the output vector to store the result.
 * @param a the first vertex of the triangle.
 * @param b the second vertex of the triangle.
 * @param c the third vertex of the triangle.
 * @returns the output vector containing the normal of the triangle.
 */
export declare function normal(out: Vec3, a: Vec3, b: Vec3, c: Vec3): Vec3;
/**
 * Computes the centroid of a triangle defined by three vertices.
 * @param out the output vector to store the result.
 * @param a the first vertex of the triangle.
 * @param b the second vertex of the triangle.
 * @param c the third vertex of the triangle.
 * @returns the output vector containing the centroid of the triangle.
 */
export declare function centroid(out: Vec3, a: Vec3, b: Vec3, c: Vec3): Vec3;
