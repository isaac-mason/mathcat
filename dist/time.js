import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { i as deltaAngle } from "./scalar-BGTmo5GO.js";
//#region src/time/easing.ts
var easing_exports = /* @__PURE__ */ __exportAll({
	circIn: () => circIn,
	circInOut: () => circInOut,
	circOut: () => circOut,
	cubicIn: () => cubicIn,
	cubicInOut: () => cubicInOut,
	cubicOut: () => cubicOut,
	exp: () => exp,
	expoIn: () => expoIn,
	expoInOut: () => expoInOut,
	expoOut: () => expoOut,
	linear: () => linear,
	quartIn: () => quartIn,
	quartInOut: () => quartInOut,
	quartOut: () => quartOut,
	quintIn: () => quintIn,
	quintInOut: () => quintInOut,
	quintOut: () => quintOut,
	rsqw: () => rsqw,
	sineIn: () => sineIn,
	sineInOut: () => sineInOut,
	sineOut: () => sineOut
});
const exp = (t) => 1 / (1 + t + .48 * t * t + .235 * t * t * t);
const linear = (t) => t;
const sineIn = (x) => 1 - Math.cos(x * Math.PI / 2);
const sineOut = (x) => Math.sin(x * Math.PI / 2);
const sineInOut = (x) => -(Math.cos(Math.PI * x) - 1) / 2;
const cubicIn = (x) => x * x * x;
const cubicOut = (x) => 1 - (1 - x) ** 3;
const cubicInOut = (x) => x < .5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2;
const quintIn = (x) => x ** 5;
const quintOut = (x) => 1 - (1 - x) ** 5;
const quintInOut = (x) => x < .5 ? 16 * x ** 5 : 1 - (-2 * x + 2) ** 5 / 2;
const circIn = (x) => 1 - Math.sqrt(1 - x * x);
const circOut = (x) => Math.sqrt(1 - (x - 1) * (x - 1));
const circInOut = (x) => x < .5 ? (1 - Math.sqrt(1 - 2 * x * (2 * x))) / 2 : (Math.sqrt(1 - (-2 * x + 2) * (-2 * x + 2)) + 1) / 2;
const quartIn = (t) => t * t * t * t;
const quartOut = (t) => 1 - --t * t * t * t;
const quartInOut = (t) => t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
const expoIn = (x) => x === 0 ? 0 : 2 ** (10 * x - 10);
const expoOut = (x) => x === 1 ? 1 : 1 - 2 ** (-10 * x);
const expoInOut = (x) => x === 0 ? 0 : x === 1 ? 1 : x < .5 ? 2 ** (20 * x - 10) / 2 : (2 - 2 ** (-20 * x + 10)) / 2;
const rsqw = (t, delta = .01, a = 1, f = 1 / (2 * Math.PI)) => a / Math.atan(1 / delta) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
//#endregion
//#region src/time/spring.ts
var spring_exports = /* @__PURE__ */ __exportAll({
	create: () => create,
	create2: () => create2,
	create3: () => create3,
	create4: () => create4,
	damp: () => damp,
	damp2: () => damp2,
	damp3: () => damp3,
	damp4: () => damp4,
	dampAngle: () => dampAngle,
	fromResponse: () => fromResponse,
	spring: () => spring,
	spring2: () => spring2,
	spring3: () => spring3,
	spring4: () => spring4
});
/** Creates a scalar spring at `value`, at rest. */
const create = (value = 0) => ({
	value,
	velocity: 0
});
/** Creates a Vec2 spring at `value` (copied), at rest. */
const create2 = (value = [0, 0]) => ({
	value: [value[0], value[1]],
	velocity: [0, 0]
});
/** Creates a Vec3 spring at `value` (copied), at rest. */
const create3 = (value = [
	0,
	0,
	0
]) => ({
	value: [
		value[0],
		value[1],
		value[2]
	],
	velocity: [
		0,
		0,
		0
	]
});
/** Creates a Vec4 spring at `value` (copied), at rest. */
const create4 = (value = [
	0,
	0,
	0,
	0
]) => ({
	value: [
		value[0],
		value[1],
		value[2],
		value[3]
	],
	velocity: [
		0,
		0,
		0,
		0
	]
});
/**
* Converts a SwiftUI-style `response` — the spring's natural period, in seconds
* — to the `smoothTime` that `spring`/`damp` consume. `dampingRatio` is the
* orthogonal second dial and is passed to `spring` unchanged.
*
* Yields the same stiffness/damping as SwiftUI's `Spring(response:dampingFraction:)`:
*
* ```ts
* spring3(state, target, fromResponse(0.5), 0.3, delta); // bouncy, ~0.5s period
* ```
*/
const fromResponse = (response) => response / Math.PI;
let _pp = 1;
let _pv = 0;
let _vp = 0;
let _vv = 1;
function coefficients(smoothTime, dampingRatio, delta) {
	const omega = 2 / Math.max(1e-4, smoothTime);
	if (Math.abs(dampingRatio - 1) < 1e-4) {
		const e = Math.exp(-omega * delta);
		_pp = e * (1 + omega * delta);
		_pv = e * delta;
		_vp = -e * omega * omega * delta;
		_vv = e * (1 - omega * delta);
	} else if (dampingRatio < 1) {
		const za = -omega * dampingRatio;
		const wd = omega * Math.sqrt(1 - dampingRatio * dampingRatio);
		const e = Math.exp(za * delta);
		const c = Math.cos(wd * delta);
		const s = Math.sin(wd * delta);
		_pp = e * (c - za * s / wd);
		_pv = e * s / wd;
		_vp = -e * omega * omega * s / wd;
		_vv = e * (c + za * s / wd);
	} else {
		const za = -omega * dampingRatio;
		const zb = omega * Math.sqrt(dampingRatio * dampingRatio - 1);
		const r1 = za - zb;
		const r2 = za + zb;
		const den = r1 - r2;
		const e1 = Math.exp(r1 * delta);
		const e2 = Math.exp(r2 * delta);
		_pp = (r1 * e2 - r2 * e1) / den;
		_pv = (e1 - e2) / den;
		_vp = omega * omega * (e2 - e1) / den;
		_vv = (r1 * e1 - r2 * e2) / den;
	}
}
/**
* Springs `state.value` toward `target`, mutating `state` in place. Returns it.
*
* @param state spring state, mutated in place
* @param target goal value
* @param smoothTime approximate time to reach the target; smaller is faster
* @param dampingRatio 1 = critically damped (no overshoot), <1 bouncy, >1 sluggish
* @param delta frame delta, for refresh-rate independence
* @returns state
*/
function spring(state, target, smoothTime, dampingRatio, delta) {
	coefficients(smoothTime, dampingRatio, delta);
	const d = state.value - target;
	const v = state.velocity;
	state.value = target + _pp * d + _pv * v;
	state.velocity = _vp * d + _vv * v;
	return state;
}
/**
* Critically-damped {@link spring} (dampingRatio = 1): moves toward `target`
* as fast as possible without overshooting.
*/
function damp(state, target, smoothTime, delta) {
	return spring(state, target, smoothTime, 1, delta);
}
/**
* Like {@link damp}, but takes the shortest angular path to `target` (radians),
* wrapping across the ±π seam rather than unwinding the long way around.
*/
function dampAngle(state, target, smoothTime, delta) {
	return damp(state, state.value + deltaAngle(state.value, target), smoothTime, delta);
}
/** Vec2 {@link spring}: springs `state.value` toward `target`, mutating `state` in place. */
function spring2(state, target, smoothTime, dampingRatio, delta) {
	coefficients(smoothTime, dampingRatio, delta);
	const val = state.value;
	const vel = state.velocity;
	let d = val[0] - target[0];
	let v = vel[0];
	val[0] = target[0] + _pp * d + _pv * v;
	vel[0] = _vp * d + _vv * v;
	d = val[1] - target[1];
	v = vel[1];
	val[1] = target[1] + _pp * d + _pv * v;
	vel[1] = _vp * d + _vv * v;
	return state;
}
/** Critically-damped Vec2 spring (dampingRatio = 1). See {@link damp}. */
function damp2(state, target, smoothTime, delta) {
	return spring2(state, target, smoothTime, 1, delta);
}
/** Vec3 {@link spring}: springs `state.value` toward `target`, mutating `state` in place. */
function spring3(state, target, smoothTime, dampingRatio, delta) {
	coefficients(smoothTime, dampingRatio, delta);
	const val = state.value;
	const vel = state.velocity;
	for (let i = 0; i < 3; i++) {
		const d = val[i] - target[i];
		const v = vel[i];
		val[i] = target[i] + _pp * d + _pv * v;
		vel[i] = _vp * d + _vv * v;
	}
	return state;
}
/** Critically-damped Vec3 spring (dampingRatio = 1). See {@link damp}. */
function damp3(state, target, smoothTime, delta) {
	return spring3(state, target, smoothTime, 1, delta);
}
/** Vec4 {@link spring}: springs `state.value` toward `target`, mutating `state` in place. */
function spring4(state, target, smoothTime, dampingRatio, delta) {
	coefficients(smoothTime, dampingRatio, delta);
	const val = state.value;
	const vel = state.velocity;
	for (let i = 0; i < 4; i++) {
		const d = val[i] - target[i];
		const v = vel[i];
		val[i] = target[i] + _pp * d + _pv * v;
		vel[i] = _vp * d + _vv * v;
	}
	return state;
}
/** Critically-damped Vec4 spring (dampingRatio = 1). See {@link damp}. */
function damp4(state, target, smoothTime, delta) {
	return spring4(state, target, smoothTime, 1, delta);
}
//#endregion
export { easing_exports as easing, spring_exports as spring };

//# sourceMappingURL=time.js.map