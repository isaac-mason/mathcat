import { describe, expect, it } from 'vitest';
import { type Circle, circumcircle, type Triangle2 } from '../dist';

describe('circumcircle', () => {
    it('calculates circumcircle for a simple triangle', () => {
        const triangle: Triangle2 = [
            [0, 0],
            [1, 0],
            [0, 1],
        ];
        const out: Circle = { center: [0, 0], radius: 0 };
        const result = circumcircle(out, triangle[0], triangle[1], triangle[2]);
        expect(result.center[0]).toBeCloseTo(0.5);
        expect(result.center[1]).toBeCloseTo(0.5);
        expect(result.radius).toBeCloseTo(Math.sqrt(0.5));
    });

    it('returns radius 0 for collinear points', () => {
        const triangle: Triangle2 = [
            [0, 0],
            [1, 0],
            [2, 0],
        ];
        const out: Circle = { center: [0, 0], radius: 0 };
        const result = circumcircle(out, triangle[0], triangle[1], triangle[2]);
        expect(result.radius).toBe(0);
        expect(result.center[0]).toBeCloseTo(0);
        expect(result.center[1]).toBeCloseTo(0);
    });

    it('calculates circumcircle for an equilateral triangle', () => {
        const triangle: Triangle2 = [
            [0, 0],
            [1, 0],
            [0.5, Math.sqrt(3) / 2],
        ];
        const out: Circle = { center: [0, 0], radius: 0 };
        const result = circumcircle(out, triangle[0], triangle[1], triangle[2]);
        expect(result.center[0]).toBeCloseTo(0.5);
        expect(result.center[1]).toBeCloseTo(Math.sqrt(3) / 6);
        expect(result.radius).toBeCloseTo(1 / Math.sqrt(3));
    });
});
