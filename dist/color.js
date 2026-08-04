import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
//#region src/color/colorspace.ts
var colorspace_exports = /* @__PURE__ */ __exportAll({
	linearDisplayP3ToLinearSrgb: () => linearDisplayP3ToLinearSrgb,
	linearSrgbToLinearDisplayP3: () => linearSrgbToLinearDisplayP3,
	linearToSrgb: () => linearToSrgb,
	srgbToLinear: () => srgbToLinear
});
/** Convert a single sRGB gamma-encoded channel [0, 1] to linear light [0, 1]. */
function srgbToLinear(c) {
	return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
}
/** Convert a single linear light channel [0, 1] to sRGB gamma-encoded [0, 1]. */
function linearToSrgb(c) {
	return c <= .0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - .055;
}
/**
* Convert a linear-sRGB Color to linear Display-P3 primaries, into `out`. Returns `out`.
* (Both spaces share the sRGB transfer curve; this changes only the primaries.)
*/
function linearSrgbToLinearDisplayP3(out, c) {
	const r = c[0];
	const g = c[1];
	const b = c[2];
	out[0] = .8224621 * r + .177538 * g;
	out[1] = .0331941 * r + .9668058 * g;
	out[2] = .0170827 * r + .0723974 * g + .9105199 * b;
	return out;
}
/**
* Convert a linear Display-P3 Color to linear-sRGB primaries, into `out`. Returns `out`.
* Colors outside the sRGB gamut yield channels outside [0, 1] — clamp if needed.
*/
function linearDisplayP3ToLinearSrgb(out, c) {
	const r = c[0];
	const g = c[1];
	const b = c[2];
	out[0] = 1.2249401 * r - .2249404 * g;
	out[1] = -.0420569 * r + 1.0420571 * g;
	out[2] = -.0196376 * r - .0786361 * g + 1.0982735 * b;
	return out;
}
//#endregion
//#region src/color/parse.ts
const CSS_COLORS = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7566195,
	slategrey: 7566195,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
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
function setFromColorInput(out, input) {
	const parsed = parse(input);
	if (parsed === null) return out;
	out[0] = parsed[0];
	out[1] = parsed[1];
	out[2] = parsed[2];
	return out;
}
/** Parse any supported color input into a new Color, or null if unrecognised. */
function fromColorInput(input) {
	return parse(input);
}
function parse(input) {
	if (Array.isArray(input)) return [
		input[0] ?? 0,
		input[1] ?? 0,
		input[2] ?? 0
	];
	if (typeof input === "number") {
		const r = (input >> 16 & 255) / 255;
		const g = (input >> 8 & 255) / 255;
		const b = (input & 255) / 255;
		return [
			srgbToLinear(r),
			srgbToLinear(g),
			srgbToLinear(b)
		];
	}
	const s = input.trim().toLowerCase();
	if (/^#[0-9a-f]{3}$/i.test(s)) return parseHex3(s);
	if (/^#[0-9a-f]{6}$/i.test(s)) return parseHex6(s);
	if (s.startsWith("rgb(")) {
		const result = parseRgbString(s);
		if (result) return result;
	}
	if (s.startsWith("hsl(")) {
		const result = parseHslString(s);
		if (result) return result;
	}
	const hex = CSS_COLORS[s];
	if (hex !== void 0) return parseHex6(`#${hex.toString(16).padStart(6, "0")}`);
	console.warn(`[mathcat] color: unrecognised color input: "${input}"`);
	return null;
}
function parseHex3(hex) {
	const r = parseInt(hex[1] + hex[1], 16) / 255;
	const g = parseInt(hex[2] + hex[2], 16) / 255;
	const b = parseInt(hex[3] + hex[3], 16) / 255;
	return [
		srgbToLinear(r),
		srgbToLinear(g),
		srgbToLinear(b)
	];
}
function parseHex6(hex) {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;
	return [
		srgbToLinear(r),
		srgbToLinear(g),
		srgbToLinear(b)
	];
}
function parseRgbString(str) {
	const m = str.match(/^rgb\(\s*([^,]+),\s*([^,]+),\s*([^)]+)\)$/i);
	if (!m) return null;
	const parseChannel = (s) => {
		s = s.trim();
		if (s.endsWith("%")) return parseFloat(s) / 100;
		return parseFloat(s) / 255;
	};
	return [
		srgbToLinear(parseChannel(m[1])),
		srgbToLinear(parseChannel(m[2])),
		srgbToLinear(parseChannel(m[3]))
	];
}
function parseHslString(str) {
	const m = str.match(/^hsl\(\s*([^,]+),\s*([^,]+),\s*([^)]+)\)$/i);
	if (!m) return null;
	return hslToLinear(parseFloat(m[1]) / 360, parseFloat(m[2]) / 100, parseFloat(m[3]) / 100);
}
function hslToLinear(h, s, l) {
	let r;
	let g;
	let b;
	if (s === 0) r = g = b = l;
	else {
		const q = l < .5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	return [
		srgbToLinear(r),
		srgbToLinear(g),
		srgbToLinear(b)
	];
}
function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
//#endregion
//#region src/color/color.ts
var color_exports = /* @__PURE__ */ __exportAll({
	add: () => add,
	addScalar: () => addScalar,
	clamp: () => clamp,
	clone: () => clone$1,
	copy: () => copy$1,
	create: () => create$1,
	equals: () => equals,
	fromColorInput: () => fromColorInput,
	fromSRGB: () => fromSRGB,
	fromValues: () => fromValues$1,
	lerp: () => lerp$1,
	luminance: () => luminance,
	multiply: () => multiply,
	multiplyScalar: () => multiplyScalar,
	set: () => set$1,
	setFromColorInput: () => setFromColorInput,
	setFromSRGB: () => setFromSRGB,
	setScalar: () => setScalar,
	sub: () => sub,
	toCSS: () => toCSS,
	toHex: () => toHex,
	toHexString: () => toHexString,
	toSRGB: () => toSRGB
});
/** Create a new Color initialized to black [0, 0, 0]. */
function create$1() {
	return [
		0,
		0,
		0
	];
}
/** Create a new Color with the given linear r, g, b values. */
function fromValues$1(r, g, b) {
	return [
		r,
		g,
		b
	];
}
/** Create a new Color that is a copy of `c`. */
function clone$1(c) {
	return [
		c[0],
		c[1],
		c[2]
	];
}
/** Copy the values from `src` into `out`. Returns `out`. */
function copy$1(out, src) {
	out[0] = src[0];
	out[1] = src[1];
	out[2] = src[2];
	return out;
}
/** Set the linear r, g, b components of `out` directly. Returns `out`. */
function set$1(out, r, g, b) {
	out[0] = r;
	out[1] = g;
	out[2] = b;
	return out;
}
/** Set all three channels of `out` to the same linear value `s` (a gray). Returns `out`. */
function setScalar(out, s) {
	out[0] = s;
	out[1] = s;
	out[2] = s;
	return out;
}
/**
* Set `out` from an sRGB gamma-encoded [r, g, b] array with values in [0, 1].
* Converts from sRGB gamma space to linear. Returns `out`.
*/
function setFromSRGB(out, srgb) {
	out[0] = srgbToLinear(srgb[0]);
	out[1] = srgbToLinear(srgb[1]);
	out[2] = srgbToLinear(srgb[2]);
	return out;
}
/** Create a new Color from an sRGB gamma-encoded [r, g, b] array with values in [0, 1]. */
function fromSRGB(srgb) {
	return setFromSRGB(create$1(), srgb);
}
/** Write the sRGB gamma-encoded [r, g, b] of a linear Color into `out` (values [0, 1]). */
function toSRGB(out, c) {
	out[0] = linearToSrgb(c[0]);
	out[1] = linearToSrgb(c[1]);
	out[2] = linearToSrgb(c[2]);
	return out;
}
/** Create a CSS `rgb(...)` string in sRGB gamma space (for HTML/canvas use). */
function toCSS(c) {
	return `rgb(${to255(c[0])}, ${to255(c[1])}, ${to255(c[2])})`;
}
/** Convert to a 0xRRGGBB integer in sRGB gamma space. */
function toHex(c) {
	return to255(c[0]) << 16 | to255(c[1]) << 8 | to255(c[2]);
}
/** Convert to a 6-digit sRGB hex string without a leading '#', e.g. 'ff8800'. */
function toHexString(c) {
	return toHex(c).toString(16).padStart(6, "0");
}
/** Add `a + b` component-wise into `out`. Returns `out`. */
function add(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	return out;
}
/** Add scalar `s` to each channel of `a` into `out`. Returns `out`. */
function addScalar(out, a, s) {
	out[0] = a[0] + s;
	out[1] = a[1] + s;
	out[2] = a[2] + s;
	return out;
}
/** Subtract `a - b` component-wise into `out`. Returns `out`. */
function sub(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	return out;
}
/** Multiply `a * b` component-wise into `out` (tinting). Returns `out`. */
function multiply(out, a, b) {
	out[0] = a[0] * b[0];
	out[1] = a[1] * b[1];
	out[2] = a[2] * b[2];
	return out;
}
/** Scale each channel of `a` by `s` into `out` (brightness). Returns `out`. */
function multiplyScalar(out, a, s) {
	out[0] = a[0] * s;
	out[1] = a[1] * s;
	out[2] = a[2] * s;
	return out;
}
/** Linearly interpolate from `a` to `b` by `t` into `out` (physically-correct blend). Returns `out`. */
function lerp$1(out, a, b, t) {
	out[0] = a[0] + (b[0] - a[0]) * t;
	out[1] = a[1] + (b[1] - a[1]) * t;
	out[2] = a[2] + (b[2] - a[2]) * t;
	return out;
}
/** Clamp each channel of `c` to [0, 1] into `out`. Returns `out`. */
function clamp(out, c) {
	out[0] = clamp01$1(c[0]);
	out[1] = clamp01$1(c[1]);
	out[2] = clamp01$1(c[2]);
	return out;
}
/** Whether `a` and `b` are equal, within an optional per-channel `epsilon` (default exact). */
function equals(a, b, epsilon = 0) {
	return Math.abs(a[0] - b[0]) <= epsilon && Math.abs(a[1] - b[1]) <= epsilon && Math.abs(a[2] - b[2]) <= epsilon;
}
/** Relative luminance in [0, 1] (Rec. 709 weights, on linear light). */
function luminance(c) {
	return .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
}
function clamp01$1(x) {
	return x < 0 ? 0 : x > 1 ? 1 : x;
}
/** linear channel -> clamped sRGB byte [0, 255]. */
function to255(c) {
	return Math.max(0, Math.min(255, Math.round(linearToSrgb(c) * 255)));
}
//#endregion
//#region src/color/hsl.ts
var hsl_exports = /* @__PURE__ */ __exportAll({
	clone: () => clone,
	copy: () => copy,
	create: () => create,
	fromColor: () => fromColor,
	fromValues: () => fromValues,
	lerp: () => lerp,
	offset: () => offset,
	set: () => set,
	toColor: () => toColor
});
/** Create a new HSL initialized to [0, 0, 0] (black). */
function create() {
	return [
		0,
		0,
		0
	];
}
/** Create a new HSL with the given h, s, l values (all in [0, 1]). */
function fromValues(h, s, l) {
	return [
		h,
		s,
		l
	];
}
/** Create a new HSL that is a copy of `a`. */
function clone(a) {
	return [
		a[0],
		a[1],
		a[2]
	];
}
/** Copy the values from `src` into `out`. Returns `out`. */
function copy(out, src) {
	out[0] = src[0];
	out[1] = src[1];
	out[2] = src[2];
	return out;
}
/** Set the h, s, l components of `out` directly. Returns `out`. */
function set(out, h, s, l) {
	out[0] = h;
	out[1] = s;
	out[2] = l;
	return out;
}
/** Write the HSL of a linear Color into `out`. Returns `out`. */
function fromColor(out, c) {
	const r = linearToSrgb(c[0]);
	const g = linearToSrgb(c[1]);
	const b = linearToSrgb(c[2]);
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	let h = 0;
	let s = 0;
	if (max !== min) {
		const d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
		else if (max === g) h = (b - r) / d + 2;
		else h = (r - g) / d + 4;
		h /= 6;
	}
	out[0] = h;
	out[1] = s;
	out[2] = l;
	return out;
}
/** Write the linear Color of an HSL into `out`. Returns `out`. */
function toColor(out, a) {
	const h = a[0];
	const s = a[1];
	const l = a[2];
	if (s === 0) {
		const v = srgbToLinear(l);
		out[0] = v;
		out[1] = v;
		out[2] = v;
		return out;
	}
	const q = l < .5 ? l * (1 + s) : l + s - l * s;
	const p = 2 * l - q;
	out[0] = srgbToLinear(hue(p, q, h + 1 / 3));
	out[1] = srgbToLinear(hue(p, q, h));
	out[2] = srgbToLinear(hue(p, q, h - 1 / 3));
	return out;
}
/**
* Interpolate from `a` to `b` by `t` into `out`, taking the shortest path around
* the hue wheel (so e.g. 350°→10° passes through 0°, not all the way back).
* Returns `out`.
*/
function lerp(out, a, b, t) {
	let dh = b[0] - a[0];
	if (dh > .5) dh -= 1;
	else if (dh < -.5) dh += 1;
	let h = a[0] + dh * t;
	h -= Math.floor(h);
	out[0] = h;
	out[1] = a[1] + (b[1] - a[1]) * t;
	out[2] = a[2] + (b[2] - a[2]) * t;
	return out;
}
/**
* Offset `a` by (dh, ds, dl) into `out`: hue wraps into [0, 1), saturation and
* lightness are clamped to [0, 1]. Returns `out`.
*/
function offset(out, a, dh, ds, dl) {
	let h = a[0] + dh;
	h -= Math.floor(h);
	out[0] = h;
	out[1] = clamp01(a[1] + ds);
	out[2] = clamp01(a[2] + dl);
	return out;
}
function clamp01(x) {
	return x < 0 ? 0 : x > 1 ? 1 : x;
}
function hue(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
//#endregion
export { color_exports as color, colorspace_exports as colorspace, hsl_exports as hsl };

//# sourceMappingURL=color.js.map