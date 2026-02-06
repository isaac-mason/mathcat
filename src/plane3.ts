import type { Mat4, Plane3, Sphere, Vec3 } from './types';
import * as vec3 from './vec3';

/**
 * Creates a new plane with normal (0, 1, 0) and constant 0
 * @returns A new plane
 */
export function create(): Plane3 {
    return { normal: [0, 1, 0], constant: 0 };
}

/**
 * Creates a plane from a normal and constant
 * @param out - The output plane
 * @param normal - The plane normal (should be unit length)
 * @param constant - The signed distance from origin
 * @returns The output plane
 */
export function fromNormalAndConstant(out: Plane3, normal: Vec3, constant: number): Plane3 {
    vec3.copy(out.normal, normal);
    out.constant = constant;
    return out;
}

/**
 * Creates a plane from a normal and a point on the plane
 * @param out - The output plane
 * @param normal - The plane normal (should be unit length)
 * @param point - A point on the plane
 * @returns The output plane
 */
export function fromNormalAndPoint(out: Plane3, normal: Vec3, point: Vec3): Plane3 {
    vec3.copy(out.normal, normal);
    out.constant = -vec3.dot(normal, point);
    return out;
}

/**
 * Creates a plane from three coplanar points
 * @param out - The output plane
 * @param a - First point
 * @param b - Second point
 * @param c - Third point
 * @returns The output plane
 */
export function fromCoplanarPoints(out: Plane3, a: Vec3, b: Vec3, c: Vec3): Plane3 {
    const v1: Vec3 = vec3.subtract(vec3.create(), b, a);
    const v2: Vec3 = vec3.subtract(vec3.create(), c, a);
    vec3.normalize(out.normal, vec3.cross(out.normal, v1, v2));
    out.constant = -vec3.dot(out.normal, a);

    return out;
}

/**
 * Clones a plane
 * @param plane - The plane to clone
 * @returns A new plane
 */
export function clone(plane: Plane3): Plane3 {
    return {
        normal: vec3.clone(plane.normal),
        constant: plane.constant,
    };
}

/**
 * Copies one plane to another
 * @param out - The output plane
 * @param plane - The source plane
 * @returns The output plane
 */
export function copy(out: Plane3, plane: Plane3): Plane3 {
    vec3.copy(out.normal, plane.normal);
    out.constant = plane.constant;
    return out;
}

/**
 * Normalizes a plane (ensures the normal vector is unit length)
 * @param out - The output plane
 * @param plane - The input plane
 * @returns The normalized plane
 */
export function normalize(out: Plane3, plane: Plane3): Plane3 {
    const invMagnitude = 1.0 / vec3.length(plane.normal);
    vec3.scale(out.normal, plane.normal, invMagnitude);
    out.constant = plane.constant * invMagnitude;
    return out;
}

/**
 * Negates a plane (flips the normal and constant)
 * @param out - The output plane
 * @param plane - The input plane
 * @returns The negated plane
 */
export function negate(out: Plane3, plane: Plane3): Plane3 {
    vec3.negate(out.normal, plane.normal);
    out.constant = -plane.constant;
    return out;
}

/**
 * Offsets a plane by a distance along its normal
 * @param out - The output plane
 * @param plane - The input plane
 * @param distance - The distance to offset (positive = in direction of normal)
 * @returns The offset plane
 */
export function offset(out: Plane3, plane: Plane3, distance: number): Plane3 {
    vec3.copy(out.normal, plane.normal);
    out.constant = plane.constant - distance;
    return out;
}

/**
 * Calculates the signed distance from a point to the plane
 * @param plane - The plane
 * @param point - The point
 * @returns The signed distance (positive = in direction of normal)
 */
export function distanceToPoint(plane: Plane3, point: Vec3): number {
    return vec3.dot(plane.normal, point) + plane.constant;
}

/**
 * Projects a point onto the plane
 * @param out - The output point
 * @param plane - The plane
 * @param point - The point to project
 * @returns The projected point
 */
export function projectPoint(out: Vec3, plane: Plane3, point: Vec3): Vec3 {
    const distance = distanceToPoint(plane, point);
    return vec3.scaleAndAdd(out, point, plane.normal, -distance);
}

/**
 * Transforms a plane by a 4x4 matrix
 * @param out - The output plane
 * @param plane - The plane to transform
 * @param matrix - The transformation matrix
 * @returns The transformed plane
 */
export function transform(out: Plane3, plane: Plane3, matrix: Mat4): Plane3 {
    // Transform the normal by the inverse transpose of the matrix
    // For a proper implementation, you'd need mat4.invert and proper normal transformation
    // This is a simplified version
    const point: Vec3 = vec3.scale(vec3.create(), plane.normal, -plane.constant);

    // Transform normal (rotation only)
    const nx = plane.normal[0],
        ny = plane.normal[1],
        nz = plane.normal[2];
    out.normal[0] = matrix[0] * nx + matrix[4] * ny + matrix[8] * nz;
    out.normal[1] = matrix[1] * nx + matrix[5] * ny + matrix[9] * nz;
    out.normal[2] = matrix[2] * nx + matrix[6] * ny + matrix[10] * nz;

    // Transform point
    const transformedPoint: Vec3 = vec3.transformMat4(vec3.create(), point, matrix);

    // Recalculate constant
    vec3.normalize(out.normal, out.normal);
    out.constant = -vec3.dot(out.normal, transformedPoint);

    return out;
}

/**
 * Tests if a sphere intersects the plane
 * @param plane - The plane
 * @param sphere - The sphere
 * @returns True if they intersect
 */
export function intersectsSphere(plane: Plane3, sphere: Sphere): boolean {
    const distance = Math.abs(distanceToPoint(plane, sphere.center));
    return distance <= sphere.radius;
}

/**
 * Tests if two planes are exactly equal
 * @param a - First plane
 * @param b - Second plane
 * @returns True if planes are exactly equal
 */
export function exactEquals(a: Plane3, b: Plane3): boolean {
    return vec3.exactEquals(a.normal, b.normal) && a.constant === b.constant;
}

/**
 * Finds the intersection point of three planes
 * @param p1 - First plane
 * @param p2 - Second plane
 * @param p3 - Third plane
 * @param out - The output point where the three planes intersect
 * @returns True if intersection exists, false if planes are degenerate or parallel
 */
export function intersect(p1: Plane3, p2: Plane3, p3: Plane3, out: Vec3): boolean {
    // Using the formula: point = -(d1*N2×N3 + d2*N3×N1 + d3*N1×N2) / (N1·(N2×N3))
    // where N1, N2, N3 are normals and d1, d2, d3 are constants

    const n1 = p1.normal;
    const n2 = p2.normal;
    const n3 = p3.normal;

    // Calculate N2 × N3
    const n2_cross_n3: Vec3 = vec3.cross(vec3.create(), n2, n3);

    // Calculate the denominator: N1 · (N2 × N3)
    const denom = vec3.dot(n1, n2_cross_n3);

    // Check if planes are parallel or degenerate (determinant is zero)
    if (Math.abs(denom) < 0.000001) {
        return false;
    }

    // Calculate N3 × N1
    const n3_cross_n1: Vec3 = vec3.cross(vec3.create(), n3, n1);

    // Calculate N1 × N2
    const n1_cross_n2: Vec3 = vec3.cross(vec3.create(), n1, n2);

    // Calculate the numerator: -(d1*N2×N3 + d2*N3×N1 + d3*N1×N2)
    const term1: Vec3 = vec3.scale(vec3.create(), n2_cross_n3, p1.constant);
    const term2: Vec3 = vec3.scale(vec3.create(), n3_cross_n1, p2.constant);
    const term3: Vec3 = vec3.scale(vec3.create(), n1_cross_n2, p3.constant);

    vec3.add(out, term1, term2);
    vec3.add(out, out, term3);
    vec3.scale(out, out, -1 / denom);

    return true;
}

/**
 * Tests if two planes are equal
 * @param a - First plane
 * @param b - Second plane
 * @returns True if planes are equal
 */
export function equals(a: Plane3, b: Plane3): boolean {
    return vec3.equals(a.normal, b.normal) && Math.abs(a.constant - b.constant) < 0.000001;
}
