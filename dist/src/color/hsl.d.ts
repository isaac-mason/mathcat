import type { Color } from './color.js';
/** A hue-saturation-lightness color: [h, s, l], all in [0, 1] (hue wraps). */
export type HSL = [hue: number, saturation: number, lightness: number];
/** Create a new HSL initialized to [0, 0, 0] (black). */
export declare function create(): HSL;
/** Create a new HSL with the given h, s, l values (all in [0, 1]). */
export declare function fromValues(h: number, s: number, l: number): HSL;
/** Create a new HSL that is a copy of `a`. */
export declare function clone(a: HSL): HSL;
/** Copy the values from `src` into `out`. Returns `out`. */
export declare function copy(out: HSL, src: HSL): HSL;
/** Set the h, s, l components of `out` directly. Returns `out`. */
export declare function set(out: HSL, h: number, s: number, l: number): HSL;
/** Write the HSL of a linear Color into `out`. Returns `out`. */
export declare function fromColor(out: HSL, c: Color): HSL;
/** Write the linear Color of an HSL into `out`. Returns `out`. */
export declare function toColor(out: Color, a: HSL): Color;
/**
 * Interpolate from `a` to `b` by `t` into `out`, taking the shortest path around
 * the hue wheel (so e.g. 350°→10° passes through 0°, not all the way back).
 * Returns `out`.
 */
export declare function lerp(out: HSL, a: HSL, b: HSL, t: number): HSL;
/**
 * Offset `a` by (dh, ds, dl) into `out`: hue wraps into [0, 1), saturation and
 * lightness are clamped to [0, 1]. Returns `out`.
 */
export declare function offset(out: HSL, a: HSL, dh: number, ds: number, dl: number): HSL;
