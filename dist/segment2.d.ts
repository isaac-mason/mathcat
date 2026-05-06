import type { Vec2 } from './types.js';
/**
 * Calculates the closest point on a line segment to a given point
 * @param out Output parameter for the closest point
 * @param point The point
 * @param a First endpoint of the segment
 * @param b Second endpoint of the segment
 */
export declare function closestPoint(out: Vec2, point: Vec2, a: Vec2, b: Vec2): Vec2;
