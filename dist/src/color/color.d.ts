export * from './parse.js';
/** A linear-sRGB color: [r, g, b] floats in [0, 1]. */
export type Color = [r: number, g: number, b: number];
/** Accepted input types for creating or parsing a Color. */
export type ColorInput = string | number | [number, number, number];
/** Create a new Color initialized to black [0, 0, 0]. */
export declare function create(): Color;
/** Create a new Color with the given linear r, g, b values. */
export declare function fromValues(r: number, g: number, b: number): Color;
/** Create a new Color that is a copy of `c`. */
export declare function clone(c: Color): Color;
/** Copy the values from `src` into `out`. Returns `out`. */
export declare function copy(out: Color, src: Color): Color;
/** Set the linear r, g, b components of `out` directly. Returns `out`. */
export declare function set(out: Color, r: number, g: number, b: number): Color;
/** Set all three channels of `out` to the same linear value `s` (a gray). Returns `out`. */
export declare function setScalar(out: Color, s: number): Color;
/**
 * Set `out` from an sRGB gamma-encoded [r, g, b] array with values in [0, 1].
 * Converts from sRGB gamma space to linear. Returns `out`.
 */
export declare function setFromSRGB(out: Color, srgb: [number, number, number]): Color;
/** Create a new Color from an sRGB gamma-encoded [r, g, b] array with values in [0, 1]. */
export declare function fromSRGB(srgb: [number, number, number]): Color;
/** Write the sRGB gamma-encoded [r, g, b] of a linear Color into `out` (values [0, 1]). */
export declare function toSRGB(out: [number, number, number], c: Color): [number, number, number];
/** Create a CSS `rgb(...)` string in sRGB gamma space (for HTML/canvas use). */
export declare function toCSS(c: Color): string;
/** Convert to a 0xRRGGBB integer in sRGB gamma space. */
export declare function toHex(c: Color): number;
/** Convert to a 6-digit sRGB hex string without a leading '#', e.g. 'ff8800'. */
export declare function toHexString(c: Color): string;
/** Add `a + b` component-wise into `out`. Returns `out`. */
export declare function add(out: Color, a: Color, b: Color): Color;
/** Add scalar `s` to each channel of `a` into `out`. Returns `out`. */
export declare function addScalar(out: Color, a: Color, s: number): Color;
/** Subtract `a - b` component-wise into `out`. Returns `out`. */
export declare function sub(out: Color, a: Color, b: Color): Color;
/** Multiply `a * b` component-wise into `out` (tinting). Returns `out`. */
export declare function multiply(out: Color, a: Color, b: Color): Color;
/** Scale each channel of `a` by `s` into `out` (brightness). Returns `out`. */
export declare function multiplyScalar(out: Color, a: Color, s: number): Color;
/** Linearly interpolate from `a` to `b` by `t` into `out` (physically-correct blend). Returns `out`. */
export declare function lerp(out: Color, a: Color, b: Color, t: number): Color;
/** Clamp each channel of `c` to [0, 1] into `out`. Returns `out`. */
export declare function clamp(out: Color, c: Color): Color;
/** Whether `a` and `b` are equal, within an optional per-channel `epsilon` (default exact). */
export declare function equals(a: Color, b: Color, epsilon?: number): boolean;
/** Relative luminance in [0, 1] (Rec. 709 weights, on linear light). */
export declare function luminance(c: Color): number;
