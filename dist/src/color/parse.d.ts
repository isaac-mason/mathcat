import type { Color, ColorInput } from './color.js';
/**
 * Parse any supported color input and write the result into `out`. Returns `out`.
 *
 * Supported inputs:
 *   - CSS hex strings:       '#f00', '#ff0000'
 *   - CSS rgb():             'rgb(255, 0, 0)', 'rgb(100%, 0%, 0%)'
 *   - CSS hsl():             'hsl(0, 100%, 50%)'
 *   - 0xRRGGBB integers:     0xff0000 (sRGB gamma)
 *   - Named CSS colors:      'red', 'lime', 'deepskyblue', ...
 *   - [r, g, b] array:       treated as already-linear [0, 1]
 */
export declare function setFromColorInput(out: Color, input: ColorInput): Color;
/** Parse any supported color input into a new Color, or null if unrecognised. */
export declare function fromColorInput(input: ColorInput): Color | null;
