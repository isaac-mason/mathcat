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
 * @param out output object to store result (hit boolean, fraction, frontFacing)
 * @param ray ray to test (with origin, direction, and length)
 * @param a first vertex of triangle
 * @param b second vertex of triangle
 * @param c third vertex of triangle
 * @param backfaceCulling if true, backfaces will not be considered hits
 */
export function intersectsTriangle(out: IntersectsTriangleResult, ray: Raycast3, a: Vec3, b: Vec3, c: Vec3, backfaceCulling: boolean): void {
    // compute edge1 = b - a
    const e1x = b[0] - a[0];
    const e1y = b[1] - a[1];
    const e1z = b[2] - a[2];

    // compute edge2 = c - a
    const e2x = c[0] - a[0];
    const e2y = c[1] - a[1];
    const e2z = c[2] - a[2];

    // compute normal = edge1 × edge2
    const nx = e1y * e2z - e1z * e2y;
    const ny = e1z * e2x - e1x * e2z;
    const nz = e1x * e2y - e1y * e2x;

    // determine front vs back facing
    const dx = ray.direction[0];
    const dy = ray.direction[1];
    const dz = ray.direction[2];
    let DdN = dx * nx + dy * ny + dz * nz;
    let sign: number;

    if (DdN > 0) {
        // backface
        if (backfaceCulling) {
            out.hit = false;
            out.fraction = 0;
            out.frontFacing = false;
            return;
        }
        sign = 1;
    } else if (DdN < 0) {
        // frontface
        sign = -1;
        DdN = -DdN;
    } else {
        // ray is parallel to triangle
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    // compute diff = ray.origin - a
    const diffx = ray.origin[0] - a[0];
    const diffy = ray.origin[1] - a[1];
    const diffz = ray.origin[2] - a[2];

    // compute barycentric coordinate b1
    // DdQxE2 = sign * D · (diff × edge2)
    const diffCrossE2x = diffy * e2z - diffz * e2y;
    const diffCrossE2y = diffz * e2x - diffx * e2z;
    const diffCrossE2z = diffx * e2y - diffy * e2x;
    const DdQxE2 = sign * (dx * diffCrossE2x + dy * diffCrossE2y + dz * diffCrossE2z);

    if (DdQxE2 < 0) {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    // compute barycentric coordinate b2
    // DdE1xQ = sign * D · (edge1 × diff)
    const e1CrossDiffx = e1y * diffz - e1z * diffy;
    const e1CrossDiffy = e1z * diffx - e1x * diffz;
    const e1CrossDiffz = e1x * diffy - e1y * diffx;
    const DdE1xQ = sign * (dx * e1CrossDiffx + dy * e1CrossDiffy + dz * e1CrossDiffz);

    if (DdE1xQ < 0) {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    // check if b1 + b2 > 1
    if (DdQxE2 + DdE1xQ > DdN) {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    // compute intersection distance
    const QdN = -sign * (diffx * nx + diffy * ny + diffz * nz);

    if (QdN < 0) {
        out.hit = false;
        out.fraction = 0;
        out.frontFacing = false;
        return;
    }

    const t = QdN / DdN;

    // check if intersection is within ray length
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
                const temp = t0;
                t0 = t1;
                t1 = temp;
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
