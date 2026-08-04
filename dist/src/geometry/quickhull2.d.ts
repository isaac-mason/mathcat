/**
 * Computes the convex hull of a set of 2D points using the QuickHull algorithm.
 * The hull is returned as an array of indices in counter-clockwise order.
 *
 * Implementation of pseudocode from: https://en.wikipedia.org/wiki/Quickhull
 *
 * @param points flat array of 2D points: [x0, y0, x1, y1, ...]
 * @returns indices of hull vertices in ccw order
 */
export declare function quickhull2(points: number[]): number[];
