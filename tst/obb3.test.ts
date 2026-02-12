import { describe, expect, it } from 'vitest';
import * as box3 from '../src/box3';
import * as euler from '../src/euler';
import * as mat3 from '../src/mat3';
import * as obb3 from '../src/obb3';
import * as quat from '../src/quat';
import * as vec3 from '../src/vec3';

describe('obb3', () => {
    describe('setFromBox3', () => {
        it('converts AABB to OBB with identity rotation', () => {
            const aabb = box3.create();
            box3.set(aabb, [-1, -2, -3], [1, 2, 3]);
            const obb = obb3.create();
            obb3.setFromBox3(obb, aabb);

            // Center should be at origin
            expect(obb.center[0]).toBeCloseTo(0);
            expect(obb.center[1]).toBeCloseTo(0);
            expect(obb.center[2]).toBeCloseTo(0);

            // Half extents should be half of the box dimensions
            expect(obb.halfExtents[0]).toBeCloseTo(1);
            expect(obb.halfExtents[1]).toBeCloseTo(2);
            expect(obb.halfExtents[2]).toBeCloseTo(3);

            // Should have identity rotation
            const identity = mat3.create();
            for (let i = 0; i < 9; i++) {
                expect(obb.rotation[i]).toBeCloseTo(identity[i]);
            }
        });
    });

    describe('containsPoint', () => {
        it('returns true for point inside axis-aligned OBB', () => {
            const obb = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            expect(obb3.containsPoint(obb, [0, 0, 0])).toBe(true);
            expect(obb3.containsPoint(obb, [0.5, 0.5, 0.5])).toBe(true);
            expect(obb3.containsPoint(obb, [-0.5, -0.5, -0.5])).toBe(true);
        });

        it('returns false for point outside axis-aligned OBB', () => {
            const obb = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            expect(obb3.containsPoint(obb, [2, 0, 0])).toBe(false);
            expect(obb3.containsPoint(obb, [0, 2, 0])).toBe(false);
            expect(obb3.containsPoint(obb, [0, 0, 2])).toBe(false);
        });

        it('returns true for point inside rotated OBB', () => {
            const obb = obb3.create();
            const rotation = quat.create();
            const eulerAngles = euler.fromValues(0, Math.PI / 4, 0, 'xyz'); // Rotate 45° around Y axis
            quat.fromEuler(rotation, eulerAngles);
            obb3.setFromCenterHalfExtentsQuaternion(obb, [0, 0, 0], [1, 1, 1], rotation);

            expect(obb3.containsPoint(obb, [0, 0, 0])).toBe(true);
        });
    });

    describe('clampPoint', () => {
        it('clamps point to OBB surface', () => {
            const obb = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            const result = vec3.create();
            obb3.clampPoint(result, obb, [2, 0, 0]);

            expect(result[0]).toBeCloseTo(1);
            expect(result[1]).toBeCloseTo(0);
            expect(result[2]).toBeCloseTo(0);
        });

        it('returns point if inside OBB', () => {
            const obb = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            const result = vec3.create();
            obb3.clampPoint(result, obb, [0.5, 0.5, 0.5]);

            expect(result[0]).toBeCloseTo(0.5);
            expect(result[1]).toBeCloseTo(0.5);
            expect(result[2]).toBeCloseTo(0.5);
        });
    });

    describe('intersectsOBB', () => {
        it('returns true for overlapping axis-aligned OBBs', () => {
            const obb1 = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb1, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            const obb2 = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb2, [0.5, 0.5, 0.5], [1, 1, 1], [0, 0, 0, 1]);

            expect(obb3.intersectsOBB3(obb1, obb2)).toBe(true);
        });

        it('returns false for non-overlapping axis-aligned OBBs', () => {
            const obb1 = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb1, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            const obb2 = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb2, [3, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            expect(obb3.intersectsOBB3(obb1, obb2)).toBe(false);
        });

        it('returns true for touching OBBs', () => {
            const obb1 = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb1, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            const obb2 = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb2, [2, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            expect(obb3.intersectsOBB3(obb1, obb2)).toBe(true);
        });

        it('returns true for overlapping rotated OBBs', () => {
            const obb1 = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb1, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            const rotation = quat.create();
            const eulerAngles = euler.fromValues(0, Math.PI / 4, 0, 'xyz');
            quat.fromEuler(rotation, eulerAngles);
            const obb2 = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb2, [0, 0, 0], [1, 1, 1], rotation);

            expect(obb3.intersectsOBB3(obb1, obb2)).toBe(true);
        });
    });

    describe('intersectsBox3', () => {
        it('returns true for overlapping OBB and AABB', () => {
            const obb = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            const aabb = box3.create();
            box3.set(aabb, [-0.5, -0.5, -0.5], [0.5, 0.5, 0.5]);

            expect(obb3.intersectsBox3(obb, aabb)).toBe(true);
        });

        it('returns false for non-overlapping OBB and AABB', () => {
            const obb = obb3.create();
            obb3.setFromCenterHalfExtentsQuaternion(obb, [0, 0, 0], [1, 1, 1], [0, 0, 0, 1]);

            const aabb = box3.create();
            box3.set(aabb, [3, 3, 3], [4, 4, 4]);

            expect(obb3.intersectsBox3(obb, aabb)).toBe(false);
        });
    });
});
