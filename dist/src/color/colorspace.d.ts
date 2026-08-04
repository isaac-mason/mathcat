import type { Color } from './color.js';
/** Convert a single sRGB gamma-encoded channel [0, 1] to linear light [0, 1]. */
export declare function srgbToLinear(c: number): number;
/** Convert a single linear light channel [0, 1] to sRGB gamma-encoded [0, 1]. */
export declare function linearToSrgb(c: number): number;
/**
 * Convert a linear-sRGB Color to linear Display-P3 primaries, into `out`. Returns `out`.
 * (Both spaces share the sRGB transfer curve; this changes only the primaries.)
 */
export declare function linearSrgbToLinearDisplayP3(out: Color, c: Color): Color;
/**
 * Convert a linear Display-P3 Color to linear-sRGB primaries, into `out`. Returns `out`.
 * Colors outside the sRGB gamut yield channels outside [0, 1] — clamp if needed.
 */
export declare function linearDisplayP3ToLinearSrgb(out: Color, c: Color): Color;
