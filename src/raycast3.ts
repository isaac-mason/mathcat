import type { Box3, Raycast3, Vec3 } from './types';
import * as vec3 from './vec3';

/**
 * Creates a new Raycast3 with default values (origin at (0,0,0), direction (0,0,0), length 1.
 * @returns A new Raycast3.
 */
export function create(): Raycast3 {
    return {
        origin: vec3.create(),
        direction: vec3.fromValues(0, 0, 0),
        length: 1,
    };
}

/**
 * Creates a new Raycast3 from given values.
 * @param origin The origin Vec3.
 * @param direction The direction Vec3.
 * @param length The length of the ray.
 * @returns A new Raycast3.
 */
export function fromValues(origin: Vec3, direction: Vec3, length: number): Raycast3 {
    return {
        origin: vec3.clone(origin),
        direction: vec3.clone(direction),
        length,
    };
}

/**
 * Sets the components of a Raycast3.
 * @param out The output Raycast3.
 * @param origin The origin Vec3.
 * @param direction The direction Vec3.
 * @param length The length of the ray.
 * @returns The output Raycast3.
 */
export function set(out: Raycast3, origin: Vec3, direction: Vec3, length: number): Raycast3 {
    vec3.copy(out.origin, origin);
    vec3.copy(out.direction, direction);
    out.length = length;
    return out;
}

/**
 * Copies a Raycast3.
 * @param out The output Raycast3.
 * @param a The input Raycast3.
 * @returns The output Raycast3.
 */
export function copy(out: Raycast3, a: Raycast3): Raycast3 {
    vec3.copy(out.origin, a.origin);
    vec3.copy(out.direction, a.direction);
    out.length = a.length;
    return out;
}

/**
 * Creates a Raycast3 from two points.
 * @param out The output Raycast3.
 * @param a The starting point.
 * @param b The ending point.
 * @returns The output Raycast3.
 */
export function fromSegment(out: Raycast3, a: Vec3, b: Vec3): Raycast3 {
    vec3.copy(out.origin, a);
    vec3.subtract(out.direction, b, a);
    out.length = vec3.length(out.direction);
    vec3.normalize(out.direction, out.direction);
    return out;
}

const _rayIntersectsTriangle_edge1 = /*@__PURE__*/ vec3.create();
const _rayIntersectsTriangle_edge2 = /*@__PURE__*/ vec3.create();
const _rayIntersectsTriangle_normal = /*@__PURE__*/ vec3.create();
const _rayIntersectsTriangle_diff = /*@__PURE__*/ vec3.create();
const _rayIntersectsTriangle_temp = /*@__PURE__*/ vec3.create();

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
export function createIntersectsTriangleResult(): IntersectsTriangleResult {
    return {
        fraction: 0,
        hit: false,
        frontFacing: false,
    };
}

/**
 * Ray-triangle intersection test.
 * Based on https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
 *
 * @param out Output object to store result (hit boolean, fraction, frontFacing)
 * @param ray Ray to test (with origin, direction, and length)
 * @param a First vertex of triangle
 * @param b Second vertex of triangle
 * @param c Third vertex of triangle
 * @param backfaceCulling If true, backfaces will not be considered hits
 */
export function intersectsTriangle(out: IntersectsTriangleResult, ray: Raycast3, a: Vec3, b: Vec3, c: Vec3, backfaceCulling: boolean): void {
    // Compute edges and normal
    vec3.subtract(_rayIntersectsTriangle_edge1, b, a);
    vec3.subtract(_rayIntersectsTriangle_edge2, c, a);
    vec3.cross(_rayIntersectsTriangle_normal, _rayIntersectsTriangle_edge1, _rayIntersectsTriangle_edge2);

    // Determine front vs back facing
    let DdN = vec3.dot(ray.direction, _rayIntersectsTriangle_normal);
    let sign: number;

    if (DdN > 0) {
        // Backface
        if (backfaceCulling) {
            out.hit = false;
            out.fraction = 0;
            out.frontFacing = false;
            return;
        }
        sign = 1;
    } else if (DdN < 0) {
        // Frontface
        sign = -1;
        DdN = -DdN;
    } else {
        // Ray is parallel to triangle
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    vec3.subtract(_rayIntersectsTriangle_diff, ray.origin, a);

    // Compute barycentric coordinate b1
    // DdQxE2 = sign * D · (diff × edge2)
    vec3.cross(_rayIntersectsTriangle_temp, _rayIntersectsTriangle_diff, _rayIntersectsTriangle_edge2);
    const DdQxE2 = sign * vec3.dot(ray.direction, _rayIntersectsTriangle_temp);

    if (DdQxE2 < 0) {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    // Compute barycentric coordinate b2
    // DdE1xQ = sign * D · (edge1 × diff)
    vec3.cross(_rayIntersectsTriangle_temp, _rayIntersectsTriangle_edge1, _rayIntersectsTriangle_diff);
    const DdE1xQ = sign * vec3.dot(ray.direction, _rayIntersectsTriangle_temp);

    if (DdE1xQ < 0) {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    // Check if b1 + b2 > 1
    if (DdQxE2 + DdE1xQ > DdN) {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    // Compute intersection distance
    const QdN = -sign * vec3.dot(_rayIntersectsTriangle_diff, _rayIntersectsTriangle_normal);

    if (QdN < 0) {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    const t = QdN / DdN;

    // Check if intersection is within ray length
    if (t <= ray.length) {
        out.hit = true;
        out.fraction = t / ray.length;
        out.frontFacing = sign < 0;
    } else {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
    }
}

/**
 * Test if a ray intersects an axis-aligned bounding box.
 * Uses slab-based algorithm that handles parallel rays correctly.
 *
 * @param ray Ray to test (with origin, direction, and length)
 * @param aabb AABB to test against
 * @returns true if ray intersects the AABB, false otherwise
 */
export function intersectsBox3(ray: Raycast3, aabb: Box3): boolean {
    let tmin = 0;
    let tmax = ray.length;

    for (let i = 0; i < 3; i++) {
        const d = ray.direction[i];

        if (Math.abs(d) < 1e-10) {
            // ray is parallel to slab: check if origin is within slab
            if (ray.origin[i] < aabb[0][i] || ray.origin[i] > aabb[1][i]) {
                return false;
            }
        } else {
            // compute intersection times with slab
            const invD = 1 / d;
            let t0 = (aabb[0][i] - ray.origin[i]) * invD;
            let t1 = (aabb[1][i] - ray.origin[i]) * invD;

            if (invD < 0) {
                [t0, t1] = [t1, t0];
            }

            tmin = Math.max(tmin, t0);
            tmax = Math.min(tmax, t1);

            if (tmax < tmin) {
                return false;
            }
        }
    }

    return true;
}
