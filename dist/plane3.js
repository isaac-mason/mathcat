import { copy as copy$1, dot, subtract, create as create$1, normalize as normalize$1, cross, clone as clone$1, length, scale, negate as negate$1, scaleAndAdd, transformMat4, exactEquals as exactEquals$1, add, equals as equals$1 } from './vec3.js';

/**
 * Creates a new plane with normal (0, 1, 0) and constant 0
 * @returns A new plane
 */
function create() {
    return { normal: [0, 1, 0], constant: 0 };
}
/**
 * Creates a plane from a normal and constant
 * @param out - The output plane
 * @param normal - The plane normal (should be unit length)
 * @param constant - The signed distance from origin
 * @returns The output plane
 */
function fromNormalAndConstant(out, normal, constant) {
    copy$1(out.normal, normal);
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
function fromNormalAndPoint(out, normal, point) {
    copy$1(out.normal, normal);
    out.constant = -dot(normal, point);
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
function fromCoplanarPoints(out, a, b, c) {
    const v1 = subtract(create$1(), b, a);
    const v2 = subtract(create$1(), c, a);
    normalize$1(out.normal, cross(out.normal, v1, v2));
    out.constant = -dot(out.normal, a);
    return out;
}
/**
 * Clones a plane
 * @param plane - The plane to clone
 * @returns A new plane
 */
function clone(plane) {
    return {
        normal: clone$1(plane.normal),
        constant: plane.constant,
    };
}
/**
 * Copies one plane to another
 * @param out - The output plane
 * @param plane - The source plane
 * @returns The output plane
 */
function copy(out, plane) {
    copy$1(out.normal, plane.normal);
    out.constant = plane.constant;
    return out;
}
/**
 * Normalizes a plane (ensures the normal vector is unit length)
 * @param out - The output plane
 * @param plane - The input plane
 * @returns The normalized plane
 */
function normalize(out, plane) {
    const invMagnitude = 1.0 / length(plane.normal);
    scale(out.normal, plane.normal, invMagnitude);
    out.constant = plane.constant * invMagnitude;
    return out;
}
/**
 * Negates a plane (flips the normal and constant)
 * @param out - The output plane
 * @param plane - The input plane
 * @returns The negated plane
 */
function negate(out, plane) {
    negate$1(out.normal, plane.normal);
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
function offset(out, plane, distance) {
    copy$1(out.normal, plane.normal);
    out.constant = plane.constant - distance;
    return out;
}
/**
 * Calculates the signed distance from a point to the plane
 * @param plane - The plane
 * @param point - The point
 * @returns The signed distance (positive = in direction of normal)
 */
function distanceToPoint(plane, point) {
    return dot(plane.normal, point) + plane.constant;
}
/**
 * Projects a point onto the plane
 * @param out - The output point
 * @param plane - The plane
 * @param point - The point to project
 * @returns The projected point
 */
function projectPoint(out, plane, point) {
    const distance = distanceToPoint(plane, point);
    return scaleAndAdd(out, point, plane.normal, -distance);
}
/**
 * Transforms a plane by a 4x4 matrix
 * @param out - The output plane
 * @param plane - The plane to transform
 * @param matrix - The transformation matrix
 * @returns The transformed plane
 */
function transform(out, plane, matrix) {
    // Transform the normal by the inverse transpose of the matrix
    // For a proper implementation, you'd need mat4.invert and proper normal transformation
    // This is a simplified version
    const point = scale(create$1(), plane.normal, -plane.constant);
    // Transform normal (rotation only)
    const nx = plane.normal[0], ny = plane.normal[1], nz = plane.normal[2];
    out.normal[0] = matrix[0] * nx + matrix[4] * ny + matrix[8] * nz;
    out.normal[1] = matrix[1] * nx + matrix[5] * ny + matrix[9] * nz;
    out.normal[2] = matrix[2] * nx + matrix[6] * ny + matrix[10] * nz;
    // Transform point
    const transformedPoint = transformMat4(create$1(), point, matrix);
    // Recalculate constant
    normalize$1(out.normal, out.normal);
    out.constant = -dot(out.normal, transformedPoint);
    return out;
}
/**
 * Tests if a sphere intersects the plane
 * @param plane - The plane
 * @param sphere - The sphere
 * @returns True if they intersect
 */
function intersectsSphere(plane, sphere) {
    const distance = Math.abs(distanceToPoint(plane, sphere.center));
    return distance <= sphere.radius;
}
/**
 * Tests if two planes are exactly equal
 * @param a - First plane
 * @param b - Second plane
 * @returns True if planes are exactly equal
 */
function exactEquals(a, b) {
    return exactEquals$1(a.normal, b.normal) && a.constant === b.constant;
}
/**
 * Finds the intersection point of three planes
 * @param p1 - First plane
 * @param p2 - Second plane
 * @param p3 - Third plane
 * @param out - The output point where the three planes intersect
 * @returns True if intersection exists, false if planes are degenerate or parallel
 */
function intersect(p1, p2, p3, out) {
    // Using the formula: point = -(d1*N2×N3 + d2*N3×N1 + d3*N1×N2) / (N1·(N2×N3))
    // where N1, N2, N3 are normals and d1, d2, d3 are constants
    const n1 = p1.normal;
    const n2 = p2.normal;
    const n3 = p3.normal;
    // Calculate N2 × N3
    const n2_cross_n3 = cross(create$1(), n2, n3);
    // Calculate the denominator: N1 · (N2 × N3)
    const denom = dot(n1, n2_cross_n3);
    // Check if planes are parallel or degenerate (determinant is zero)
    if (Math.abs(denom) < 0.000001) {
        return false;
    }
    // Calculate N3 × N1
    const n3_cross_n1 = cross(create$1(), n3, n1);
    // Calculate N1 × N2
    const n1_cross_n2 = cross(create$1(), n1, n2);
    // Calculate the numerator: -(d1*N2×N3 + d2*N3×N1 + d3*N1×N2)
    const term1 = scale(create$1(), n2_cross_n3, p1.constant);
    const term2 = scale(create$1(), n3_cross_n1, p2.constant);
    const term3 = scale(create$1(), n1_cross_n2, p3.constant);
    add(out, term1, term2);
    add(out, out, term3);
    scale(out, out, -1 / denom);
    return true;
}
/**
 * Tests if two planes are equal
 * @param a - First plane
 * @param b - Second plane
 * @returns True if planes are equal
 */
function equals(a, b) {
    return equals$1(a.normal, b.normal) && Math.abs(a.constant - b.constant) < 0.000001;
}

export { clone, copy, create, distanceToPoint, equals, exactEquals, fromCoplanarPoints, fromNormalAndConstant, fromNormalAndPoint, intersect, intersectsSphere, negate, normalize, offset, projectPoint, transform };
//# sourceMappingURL=plane3.js.map
