import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
//#region src/random/mulberry32.ts
var mulberry32_exports = /* @__PURE__ */ __exportAll({
	create: () => create,
	sample: () => sample,
	seed: () => seed
});
/**
* Creates Mulberry32 PRNG state seeded with `seed`.
*
* Mulberry32 is a simple, fast, and effective PRNG that passes statistical tests
* and has good distribution properties.
*
* @param seed the seed value (32-bit integer)
* @returns state to pass to {@link sample}
*/
function create(seed) {
	return { a: seed };
}
/**
* Advances `state` and returns the next number in the range [0, 1).
*
* @param state PRNG state created with {@link create}, mutated in place
* @returns a number in the range [0, 1)
*/
function sample(state) {
	state.a += 1831565813;
	let t = state.a;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
/**
* Generates a random 32-bit unsigned integer seed, suitable for use with
* {@link create}.
*/
function seed() {
	return Math.random() * 2 ** 32 >>> 0;
}
//#endregion
//#region src/random/random.ts
var random_exports = /* @__PURE__ */ __exportAll({
	bool: () => bool,
	choice: () => choice,
	float: () => float,
	int: () => int,
	quat: () => quat,
	sign: () => sign,
	vec2: () => vec2,
	vec3: () => vec3,
	vec4: () => vec4
});
/**
* Returns a random float in the range [min, max).
* @param random the random generator to use
* @param min the minimum value (inclusive)
* @param max the maximum value (exclusive)
*/
function float(random, min, max) {
	return random() * (max - min) + min;
}
/**
* Returns a random integer in the range [min, max] (inclusive).
* @param random the random generator to use
* @param min the minimum value (inclusive)
* @param max the maximum value (inclusive)
*/
function int(random, min, max) {
	return Math.floor(random() * (max - min + 1)) + min;
}
/**
* Returns a random boolean.
* @param random the random generator to use
* @param chance the probability of returning true, in the range [0, 1]. Defaults to 0.5.
*/
function bool(random, chance = .5) {
	return random() < chance;
}
/**
* Returns a random sign, either 1 or -1.
* @param random the random generator to use
* @param plusChance the probability of returning 1, in the range [0, 1]. Defaults to 0.5.
*/
function sign(random, plusChance = .5) {
	return random() < plusChance ? 1 : -1;
}
/**
* Returns a random item from an array.
* @param random the random generator to use
* @param items the array to choose from
* @throws if the array is empty
*/
function choice(random, items) {
	if (items.length === 0) throw new Error("cannot choose from an empty array");
	return items[Math.floor(random() * items.length) % items.length];
}
/**
* Writes a random unit-length Vec2 into out.
* @param out the receiving vector
* @param random the random generator to use
* @returns out
*/
function vec2(out, random) {
	const r = random() * 2 * Math.PI;
	out[0] = Math.cos(r);
	out[1] = Math.sin(r);
	return out;
}
/**
* Writes a random unit-length Vec3 into out.
* @param out the receiving vector
* @param random the random generator to use
* @returns out
*/
function vec3(out, random) {
	const r = random() * 2 * Math.PI;
	const z = random() * 2 - 1;
	const zScale = Math.sqrt(1 - z * z);
	out[0] = Math.cos(r) * zScale;
	out[1] = Math.sin(r) * zScale;
	out[2] = z;
	return out;
}
/**
* Writes a random unit-length Vec4 into out.
* @param out the receiving vector
* @param random the random generator to use
* @returns out
*/
function vec4(out, random) {
	let rand = random();
	const v1 = rand * 2 - 1;
	const v2 = (4 * random() - 2) * Math.sqrt(rand * -rand + rand);
	const s1 = v1 * v1 + v2 * v2;
	rand = random();
	const v3 = rand * 2 - 1;
	const v4 = (4 * random() - 2) * Math.sqrt(rand * -rand + rand);
	const s2 = v3 * v3 + v4 * v4;
	const d = Math.sqrt((1 - s1) / s2);
	out[0] = v1;
	out[1] = v2;
	out[2] = v3 * d;
	out[3] = v4 * d;
	return out;
}
/**
* Writes a random unit quaternion into out.
* @param out the receiving quaternion
* @param random the random generator to use
* @returns out
*/
function quat(out, random) {
	const u1 = random();
	const u2 = random();
	const u3 = random();
	const sqrt1MinusU1 = Math.sqrt(1 - u1);
	const sqrtU1 = Math.sqrt(u1);
	out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
	out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
	out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
	out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
	return out;
}
//#endregion
export { mulberry32_exports as mulberry32, random_exports as random };

//# sourceMappingURL=random.js.map