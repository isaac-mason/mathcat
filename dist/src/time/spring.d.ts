import { type Spring } from './spring-core.js';
/** Creates a scalar spring at `value`, at rest. */
export declare const create: (value?: number) => Spring<number>;
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
export declare function update(state: Spring<number>, target: number, smoothTime: number, dampingRatio: number, delta: number): Spring<number>;
/**
 * Critically-damped {@link update} (dampingRatio = 1): moves toward `target` as
 * fast as possible without overshooting.
 */
export declare function damp(state: Spring<number>, target: number, smoothTime: number, delta: number): Spring<number>;
/**
 * Like {@link damp}, but takes the shortest angular path to `target` (radians),
 * wrapping across the ±π seam rather than unwinding the long way around.
 */
export declare function dampAngle(state: Spring<number>, target: number, smoothTime: number, delta: number): Spring<number>;
/**
 * Converts a SwiftUI-style `response` — the spring's natural period, in seconds
 * — to the `smoothTime` that `update`/`damp` consume. `dampingRatio` is the
 * orthogonal second dial and is passed to `update` unchanged.
 *
 * Yields the same stiffness/damping as SwiftUI's `Spring(response:dampingFraction:)`:
 *
 * ```ts
 * spring3.update(state, target, spring.fromResponse(0.5), 0.3, delta); // bouncy, ~0.5s period
 * ```
 */
export declare const fromResponse: (response: number) => number;
