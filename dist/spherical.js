import { lerp as lerp$1, EPSILON, equals as equals$1 } from './common.js';

/**
 * Creates a new spherical coordinate at r=1, theta=0, phi=0
 *
 * @returns a new Spherical
 */
function create() {
    return [1, 0, 0];
}
/**
 * Creates a new Spherical initialized with the given values
 *
 * @param r radial distance
 * @param theta azimuthal angle in the XZ plane from +Z (radians)
 * @param phi polar angle from +Y axis (radians)
 * @returns a new Spherical
 */
function fromValues(r, theta, phi) {
    const out = [0, 0, 0];
    out[0] = r;
    out[1] = theta;
    out[2] = phi;
    return out;
}
/**
 * Creates a new Spherical initialized with values from an existing one
 *
 * @param a the source Spherical
 * @returns a new Spherical
 */
function clone(a) {
    const out = [0, 0, 0];
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
/**
 * Copies values from one Spherical to another
 *
 * @param out the receiving Spherical
 * @param a the source Spherical
 * @returns out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
/**
 * Sets the components of a Spherical
 *
 * @param out the receiving Spherical
 * @param r radial distance
 * @param theta azimuthal angle in the XZ plane from +Z (radians)
 * @param phi polar angle from +Y axis (radians)
 * @returns out
 */
function set(out, r, theta, phi) {
    out[0] = r;
    out[1] = theta;
    out[2] = phi;
    return out;
}
/**
 * Sets r=1, preserving the angles. No-op if r is already zero.
 *
 * @param out the receiving Spherical
 * @param a the source Spherical
 * @returns out
 */
function normalize(out, a) {
    out[0] = 1;
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
/**
 * Scales the radial distance r by a scalar
 *
 * @param out the receiving Spherical
 * @param a the source Spherical
 * @param s scalar to multiply r by
 * @returns out
 */
function scale(out, a, s) {
    out[0] = a[0] * s;
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
/**
 * Linearly interpolates between two Spherical coordinates.
 * Interpolates r, theta, and phi independently.
 * Note: does not take the shortest angular path — use with care near ±π.
 *
 * @param out the receiving Spherical
 * @param a the first operand
 * @param b the second operand
 * @param t interpolation factor in [0, 1]
 * @returns out
 */
function lerp(out, a, b, t) {
    out[0] = lerp$1(a[0], b[0], t);
    out[1] = lerp$1(a[1], b[1], t);
    out[2] = lerp$1(a[2], b[2], t);
    return out;
}
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
function setFromVec3(out, v) {
    const x = v[0];
    const y = v[1];
    const z = v[2];
    const r = Math.sqrt(x * x + y * y + z * z);
    out[0] = r;
    out[1] = r === 0 ? 0 : Math.atan2(x, z);
    out[2] = r === 0 ? 0 : Math.acos(Math.max(-1, Math.min(1, y / r)));
    return out;
}
/** @alias setFromVec3 */
const fromVec3 = setFromVec3;
/**
 * Clamps phi to the range [EPSILON, π - EPSILON] to avoid coordinate
 * singularities at the poles (gimbal lock / division by zero).
 * r and theta are left unchanged.
 *
 * @param out the receiving Spherical
 * @param a the source Spherical
 * @returns out
 */
function makeSafe(out, a) {
    const EPS = EPSILON;
    out[0] = a[0];
    out[1] = a[1];
    out[2] = Math.max(EPS, Math.min(Math.PI - EPS, a[2]));
    return out;
}
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
function toVec3(out, a) {
    const r = a[0];
    const theta = a[1];
    const phi = a[2];
    const sinPhi = Math.sin(phi);
    out[0] = r * sinPhi * Math.sin(theta);
    out[1] = r * Math.cos(phi);
    out[2] = r * sinPhi * Math.cos(theta);
    return out;
}
/**
 * Converts a Vec2 (x, z) in the horizontal XZ plane to spherical coordinates.
 * The point is treated as lying on the equator (phi = π/2, y = 0).
 *
 * @param out the receiving Spherical
 * @param v the source Vec2 interpreted as (x, z)
 * @returns out
 */
function fromVec2(out, v) {
    const x = v[0];
    const z = v[1];
    const r = Math.sqrt(x * x + z * z);
    out[0] = r;
    out[1] = r === 0 ? 0 : Math.atan2(x, z);
    out[2] = Math.PI / 2;
    return out;
}
/**
 * Projects spherical coordinates onto the XZ plane, returning a Vec2 (x, z).
 * Equivalent to taking the horizontal footprint of the 3D point.
 *
 * @param out the receiving Vec2
 * @param a the source Spherical
 * @returns out
 */
function toVec2(out, a) {
    const r = a[0];
    const theta = a[1];
    const phi = a[2];
    const sinPhi = Math.sin(phi);
    out[0] = r * sinPhi * Math.sin(theta);
    out[1] = r * sinPhi * Math.cos(theta);
    return out;
}
/**
 * Returns true if two Spherical coordinates are approximately equal,
 * within an absolute/relative tolerance of EPSILON.
 *
 * @param a the first Spherical
 * @param b the second Spherical
 * @returns true if approximately equal
 */
function equals(a, b) {
    return equals$1(a[0], b[0]) && equals$1(a[1], b[1]) && equals$1(a[2], b[2]);
}
/**
 * Returns true if two Spherical coordinates are exactly equal (===).
 *
 * @param a the first Spherical
 * @param b the second Spherical
 * @returns true if exactly equal
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns a string representation of a Spherical
 *
 * @param a the source Spherical
 * @returns string representation
 */
function str(a) {
    return `Spherical(${a[0]}, ${a[1]}, ${a[2]})`;
}

export { clone, copy, create, equals, exactEquals, fromValues, fromVec2, fromVec3, lerp, makeSafe, normalize, scale, set, setFromVec3, str, toVec2, toVec3 };
//# sourceMappingURL=spherical.js.map
