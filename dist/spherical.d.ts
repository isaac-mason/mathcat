import type { Spherical, Vec2, Vec3 } from './types';
/**
 * Creates a new spherical coordinate at r=1, theta=0, phi=0
 *
 * @returns a new Spherical
 */
export declare function create(): Spherical;
/**
 * Creates a new Spherical initialized with the given values
 *
 * @param r radial distance
 * @param theta azimuthal angle in the XZ plane from +Z (radians)
 * @param phi polar angle from +Y axis (radians)
 * @returns a new Spherical
 */
export declare function fromValues(r: number, theta: number, phi: number): Spherical;
/**
 * Creates a new Spherical initialized with values from an existing one
 *
 * @param a the source Spherical
 * @returns a new Spherical
 */
export declare function clone(a: Spherical): Spherical;
/**
 * Copies values from one Spherical to another
 *
 * @param out the receiving Spherical
 * @param a the source Spherical
 * @returns out
 */
export declare function copy(out: Spherical, a: Spherical): Spherical;
/**
 * Sets the components of a Spherical
 *
 * @param out the receiving Spherical
 * @param r radial distance
 * @param theta azimuthal angle in the XZ plane from +Z (radians)
 * @param phi polar angle from +Y axis (radians)
 * @returns out
 */
export declare function set(out: Spherical, r: number, theta: number, phi: number): Spherical;
/**
 * Sets r=1, preserving the angles. No-op if r is already zero.
 *
 * @param out the receiving Spherical
 * @param a the source Spherical
 * @returns out
 */
export declare function normalize(out: Spherical, a: Spherical): Spherical;
/**
 * Scales the radial distance r by a scalar
 *
 * @param out the receiving Spherical
 * @param a the source Spherical
 * @param s scalar to multiply r by
 * @returns out
 */
export declare function scale(out: Spherical, a: Spherical, s: number): Spherical;
/**
 * Linearly interpolates between two Spherical coordinates taking the shortest
 * angular path for theta and phi.
 *
 * @param out the receiving Spherical
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation factor in [0, 1]
 * @returns out
 */
export declare function lerp(out: Spherical, a: Spherical, b: Spherical, t: number): Spherical;
/**
 * Sets a Spherical from Cartesian Vec3 coordinates (Three.js / OpenGL convention):
 *   r     = sqrt(x² + y² + z²)
 *   theta = atan2(x, z)   (azimuthal angle in XZ plane from +Z)
 *   phi   = acos(y / r)   (polar angle from +Y)
 *
 * @param out the receiving Spherical
 * @param v the source Vec3
 * @returns out
 */
export declare function setFromVec3(out: Spherical, v: Vec3): Spherical;
/** @alias setFromVec3 */
export declare const fromVec3: typeof setFromVec3;
/**
 * Clamps phi to the range [EPSILON, π - EPSILON] to avoid coordinate
 * singularities at the poles (gimbal lock / division by zero).
 * r and theta are left unchanged.
 *
 * @param out the receiving Spherical
 * @param a the source Spherical
 * @returns out
 */
export declare function makeSafe(out: Spherical, a: Spherical): Spherical;
/**
 * Converts spherical coordinates to a Cartesian Vec3 (Three.js / OpenGL convention):
 *   x = r * sin(phi) * sin(theta)
 *   y = r * cos(phi)
 *   z = r * sin(phi) * cos(theta)
 *
 * @param out the receiving Vec3
 * @param a the source Spherical
 * @returns out
 */
export declare function toVec3(out: Vec3, a: Spherical): Vec3;
/**
 * Converts a Vec2 (x, z) in the horizontal XZ plane to spherical coordinates.
 * The point is treated as lying on the equator (phi = π/2, y = 0).
 *
 * @param out the receiving Spherical
 * @param v the source Vec2 interpreted as (x, z)
 * @returns out
 */
export declare function fromVec2(out: Spherical, v: Vec2): Spherical;
/**
 * Projects spherical coordinates onto the XZ plane, returning a Vec2 (x, z).
 * Equivalent to taking the horizontal footprint of the 3D point.
 *
 * @param out the receiving Vec2
 * @param a the source Spherical
 * @returns out
 */
export declare function toVec2(out: Vec2, a: Spherical): Vec2;
/**
 * Returns true if two Spherical coordinates are approximately equal,
 * within an absolute/relative tolerance of EPSILON.
 *
 * @param a the first Spherical
 * @param b the second Spherical
 * @returns true if approximately equal
 */
export declare function equals(a: Spherical, b: Spherical): boolean;
/**
 * Returns true if two Spherical coordinates are exactly equal (===).
 *
 * @param a the first Spherical
 * @param b the second Spherical
 * @returns true if exactly equal
 */
export declare function exactEquals(a: Spherical, b: Spherical): boolean;
/**
 * Returns a string representation of a Spherical
 *
 * @param a the source Spherical
 * @returns string representation
 */
export declare function str(a: Spherical): string;
/**
 * Returns the great-circle angle (in radians) between two spherical coordinates,
 * ignoring r. Equivalent to the central angle between the two directions on a
 * unit sphere.
 *
 * Uses the numerically stable haversine formula.
 *
 * @param a the first Spherical
 * @param b the second Spherical
 * @returns angle in radians in [0, π]
 */
export declare function angleTo(a: Spherical, b: Spherical): number;
