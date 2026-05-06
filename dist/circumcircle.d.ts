import type { Circle, Vec2 } from './types.js';
/**
 * Calculates the circumcircle of three points and stores the center in the output parameter.
 * @param out The circle to store the result in
 * @param triangle The triangle defined by three points
 * @returns
 */
export declare function circumcircle(out: Circle, a: Vec2, b: Vec2, c: Vec2): Circle;
