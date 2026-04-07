/**
 * Incremental Convex Hull 3D implementation based on Three.js ConvexHull.
 *
 * This implements the QuickHull algorithm with an incremental approach that maintains
 * a valid hull at each step using a half-edge data structure (DCEL - Doubly Connected
 * Edge List) for O(1) face adjacency queries.
 *
 * The algorithm is based on John Lloyd's Java implementation and was ported to
 * JavaScript by Mauricio Poppe (quickhull3d), then incorporated into Three.js.
 *
 * References:
 * - Three.js ConvexHull: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/math/ConvexHull.js
 * - quickhull3d by Mauricio Poppe: https://github.com/maurizzzio/quickhull3d/
 * - Original Java by John Lloyd: http://www.cs.ubc.ca/~lloyd/java/quickhull3d.html
 * - Dirk Gregorius presentation: https://archive.org/details/GDC2014Gregorius
 *
 * Algorithm: QuickHull (incremental variant)
 * Time complexity: O(n log n) average, O(n²) worst case
 * Space complexity: O(n + f + e) where f=faces, e=edges (~3x more than basic)
 */
/**
 * Computes the convex hull of a set of 3D points using an incremental QuickHull algorithm.
 *
 * @param points An array of numbers representing the 3D points (x1, y1, z1, x2, y2, z2, ...)
 * @returns An array of indices representing the triangles of the convex hull (i1, j1, k1, i2, j2, k2, ...).
 */
export declare function quickhull3(points: number[]): number[];
