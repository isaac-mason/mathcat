/**
 * State of a Mulberry32 PRNG: a single 32-bit accumulator that {@link sample}
 * advances on each call. Create one with {@link create}.
 *
 * Unlike a closure-based generator, the state is a plain object — so it can be
 * inspected, cloned (to fork a sequence), or serialised.
 */
export type Mulberry32 = {
    a: number;
};
/**
 * Creates Mulberry32 PRNG state seeded with `seed`.
 *
 * Mulberry32 is a simple, fast, and effective PRNG that passes statistical tests
 * and has good distribution properties.
 *
 * @param seed the seed value (32-bit integer)
 * @returns state to pass to {@link sample}
 */
export declare function create(seed: number): Mulberry32;
/**
 * Advances `state` and returns the next number in the range [0, 1).
 *
 * @param state PRNG state created with {@link create}, mutated in place
 * @returns a number in the range [0, 1)
 */
export declare function sample(state: Mulberry32): number;
/**
 * Generates a random 32-bit unsigned integer seed, suitable for use with
 * {@link create}.
 */
export declare function seed(): number;
