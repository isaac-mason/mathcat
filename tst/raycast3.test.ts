import { describe, expect, it } from 'vitest';
import type { Box3, Vec3, Raycast3 } from '../dist';
import { raycast3, vec3 } from '../dist';

describe('raycast3', () => {
    describe('create', () => {
        it('should create a default ray', () => {
            const ray = raycast3.create();

            expect(ray.origin).toEqual([0, 0, 0]);
            expect(ray.direction).toEqual([0, 0, 0]);
            expect(ray.length).toBe(1);
        });
    });

    describe('set', () => {
        it('should set ray origin, direction, and length', () => {
            const ray = raycast3.create();
            const origin: Vec3 = [1, 2, 3];
            const direction: Vec3 = [0, 0, 1];

            const result = raycast3.set(ray, origin, direction, 5);

            expect(result).toBe(ray);
            expect(ray.origin).toEqual([1, 2, 3]);
            expect(ray.direction).toEqual([0, 0, 1]);
            expect(ray.length).toBe(5);
        });
    });

    describe('fromSegment', () => {
        it('should create ray from two points', () => {
            const ray = raycast3.create();
            const a: Vec3 = [0, 0, 0];
            const b: Vec3 = [3, 4, 0];

            const result = raycast3.fromSegment(ray, a, b);

            expect(result).toBe(ray);
            expect(ray.origin).toEqual([0, 0, 0]);
            expect(ray.direction[0]).toBeCloseTo(0.6, 5);
            expect(ray.direction[1]).toBeCloseTo(0.8, 5);
            expect(ray.direction[2]).toBeCloseTo(0, 5);
            expect(ray.length).toBeCloseTo(5, 5);
        });
    });

    describe('copy', () => {
        it('should copy ray to another ray', () => {
            const source: Raycast3 = {
                origin: [1, 2, 3],
                direction: [0, 0, 1],
                length: 5,
            };
            const dest = raycast3.create();

            const result = raycast3.copy(dest, source);

            expect(result).toBe(dest);
            expect(dest.origin).toEqual([1, 2, 3]);
            expect(dest.direction).toEqual([0, 0, 1]);
            expect(dest.length).toBe(5);
        });
    });

    describe('intersectsTriangle', () => {
        it('DdN == 0 (ray parallel to triangle)', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: [0, 0, 0],
                length: 10,
            };

            const a: Vec3 = [1, 1, 0];
            const b: Vec3 = [0, 1, 1];
            const c: Vec3 = [1, 0, 1];

            const result = { hit: false, fraction: 0, frontFacing: false };
            raycast3.intersectsTriangle(result, ray, a, b, c, false);

            expect(result.hit).toBe(false);
        });

        it('DdN > 0, backfaceCulling = true (no intersection with backside)', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: vec3.normalize(vec3.create(), [1, 1, 1]),
                length: 10,
            };

            const a: Vec3 = [1, 1, 0];
            const b: Vec3 = [0, 1, 1];
            const c: Vec3 = [1, 0, 1];

            const result = { hit: false, fraction: 0, frontFacing: false };
            raycast3.intersectsTriangle(result, ray, a, b, c, true);

            expect(result.hit).toBe(false);
        });

        it('DdN > 0, backfaceCulling = false (successful backface intersection)', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: vec3.normalize(vec3.create(), [1, 1, 1]),
                length: 10,
            };

            const a: Vec3 = [1, 1, 0];
            const b: Vec3 = [0, 1, 1];
            const c: Vec3 = [1, 0, 1];

            const result = { hit: false, fraction: 0, frontFacing: false };
            raycast3.intersectsTriangle(result, ray, a, b, c, false);

            expect(result.hit).toBe(true);
            expect(result.frontFacing).toBe(false);
        });

        it('DdN > 0, DdQxE2 < 0 (no intersection)', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: vec3.normalize(vec3.create(), [1, 1, 1]),
                length: 10,
            };

            const a: Vec3 = [1, 1, 0];
            const b: Vec3 = [0, -1, -1];
            const c: Vec3 = [1, 0, 1];

            const result = { hit: false, fraction: 0, frontFacing: false };
            raycast3.intersectsTriangle(result, ray, a, b, c, false);

            expect(result.hit).toBe(false);
        });

        it('DdN > 0, DdE1xQ < 0 (no intersection)', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: vec3.normalize(vec3.create(), [1, 1, 1]),
                length: 10,
            };

            const a: Vec3 = [-1, -1, 0];
            const b: Vec3 = [0, -1, -1];
            const c: Vec3 = [1, 0, 1];

            const result = { hit: false, fraction: 0, frontFacing: false };
            raycast3.intersectsTriangle(result, ray, a, b, c, false);

            expect(result.hit).toBe(false);
        });

        it('DdN > 0, DdQxE2 + DdE1xQ > DdN (no intersection)', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: vec3.normalize(vec3.create(), [1, 1, 1]),
                length: 10,
            };

            const a: Vec3 = [-1, -1, 0];
            const b: Vec3 = [0, 1, 1];
            const c: Vec3 = [1, 0, 1];

            const result = { hit: false, fraction: 0, frontFacing: false };
            raycast3.intersectsTriangle(result, ray, a, b, c, false);

            expect(result.hit).toBe(false);
        });

        it('DdN < 0, QdN < 0 (no intersection when looking in wrong direction)', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: vec3.normalize(vec3.create(), [-1, -1, -1]),
                length: 10,
            };

            const a: Vec3 = [-1, -1, 0];
            const b: Vec3 = [0, -1, -1];
            const c: Vec3 = [1, 0, 1];

            const result = { hit: false, fraction: 0, frontFacing: false };
            raycast3.intersectsTriangle(result, ray, a, b, c, false);

            expect(result.hit).toBe(false);
        });
    });

    describe('intersectsBox3', () => {
        it('detects intersection with axis-aligned box in front of ray', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: [0, 0, 1],
                length: 10,
            };

            const box: Box3 = [
                [-1, -1, 2],
                [1, 1, 4],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(true);
        });

        it('returns false when box is behind ray origin', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 5],
                direction: [0, 0, 1],
                length: 5,
            };

            const box: Box3 = [
                [-1, -1, 0],
                [1, 1, 2],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(false);
        });

        it('returns false when box is beyond ray length', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: [0, 0, 1],
                length: 2,
            };

            const box: Box3 = [
                [-1, -1, 5],
                [1, 1, 7],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(false);
        });

        it('detects intersection when ray origin is inside box', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: [0, 0, 1],
                length: 10,
            };

            const box: Box3 = [
                [-1, -1, -1],
                [1, 1, 1],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(true);
        });

        it('handles ray parallel to box faces (moving along x-axis)', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: [1, 0, 0],
                length: 10,
            };

            const box: Box3 = [
                [-2, -1, -1],
                [2, 1, 1],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(true);
        });

        it('returns false for ray parallel to box outside slab', () => {
            const ray: Raycast3 = {
                origin: [0, 2, 0],
                direction: [1, 0, 0],
                length: 10,
            };

            const box: Box3 = [
                [-1, -1, -1],
                [1, 1, 1],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(false);
        });

        it('detects intersection with diagonal ray through box', () => {
            const ray: Raycast3 = {
                origin: [0, 0, 0],
                direction: [1, 1, 1],
                length: 10,
            };

            const box: Box3 = [
                [-1, -1, -1],
                [1, 1, 1],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(true);
        });

        it('detects intersection when ray grazes box corner', () => {
            const ray: Raycast3 = {
                origin: [-2, -2, -2],
                direction: [1, 1, 1],
                length: 10,
            };

            const box: Box3 = [
                [-1, -1, -1],
                [1, 1, 1],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(true);
        });

        it('handles ray with negative direction components', () => {
            const ray: Raycast3 = {
                origin: [2, 2, 2],
                direction: [-1, -1, -1],
                length: 10,
            };

            const box: Box3 = [
                [-1, -1, -1],
                [1, 1, 1],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(true);
        });

        it('returns false when ray misses box entirely (x-axis)', () => {
            const ray: Raycast3 = {
                origin: [0, 2, 0],
                direction: [1, 0, 0],
                length: 10,
            };

            const box: Box3 = [
                [0, -1, -1],
                [2, 1, 1],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(false);
        });

        it('detects intersection at box boundary', () => {
            const ray: Raycast3 = {
                origin: [-2, 0, 0],
                direction: [1, 0, 0],
                length: 5,
            };

            const box: Box3 = [
                [-1, -1, -1],
                [1, 1, 1],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(true);
        });

        it('handles narrow boxes (line-like)', () => {
            const ray: Raycast3 = {
                origin: [0.2, 0.2, 0],
                direction: [0, 0, 1],
                length: 10,
            };

            const box: Box3 = [
                [0, 0, 2],
                [0.1, 0.1, 4],
            ];

            expect(raycast3.intersectsBox3(ray, box)).toBe(false);
        });
    });
});
