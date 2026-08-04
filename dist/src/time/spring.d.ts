import type { Vec2, Vec3, Vec4 } from '../core/index.js';
/**
 * Spring state: a `value` and its `velocity`, of matching rank
 * (`number`, `Vec2`, `Vec3`, or `Vec4`). Allocate once, mutate each frame.
 */
export type Spring<T> = {
    value: T;
    velocity: T;
};
/** Creates a scalar spring at `value`, at rest. */
export declare const create: (value?: number) => Spring<number>;
/** Creates a Vec2 spring at `value` (copied), at rest. */
export declare const create2: (value?: Vec2) => Spring<Vec2>;
/** Creates a Vec3 spring at `value` (copied), at rest. */
export declare const create3: (value?: Vec3) => Spring<Vec3>;
/** Creates a Vec4 spring at `value` (copied), at rest. */
export declare const create4: (value?: Vec4) => Spring<Vec4>;
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
export declare const fromResponse: (response: number) => number;
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
export declare function spring(state: Spring<number>, target: number, smoothTime: number, dampingRatio: number, delta: number): Spring<number>;
/**
 * Critically-damped {@link spring} (dampingRatio = 1): moves toward `target`
 * as fast as possible without overshooting.
 */
export declare function damp(state: Spring<number>, target: number, smoothTime: number, delta: number): Spring<number>;
/**
 * Like {@link damp}, but takes the shortest angular path to `target` (radians),
 * wrapping across the ±π seam rather than unwinding the long way around.
 */
export declare function dampAngle(state: Spring<number>, target: number, smoothTime: number, delta: number): Spring<number>;
/** Vec2 {@link spring}: springs `state.value` toward `target`, mutating `state` in place. */
export declare function spring2(state: Spring<Vec2>, target: Vec2, smoothTime: number, dampingRatio: number, delta: number): Spring<Vec2>;
/** Critically-damped Vec2 spring (dampingRatio = 1). See {@link damp}. */
export declare function damp2(state: Spring<Vec2>, target: Vec2, smoothTime: number, delta: number): Spring<Vec2>;
/** Vec3 {@link spring}: springs `state.value` toward `target`, mutating `state` in place. */
export declare function spring3(state: Spring<Vec3>, target: Vec3, smoothTime: number, dampingRatio: number, delta: number): Spring<Vec3>;
/** Critically-damped Vec3 spring (dampingRatio = 1). See {@link damp}. */
export declare function damp3(state: Spring<Vec3>, target: Vec3, smoothTime: number, delta: number): Spring<Vec3>;
/** Vec4 {@link spring}: springs `state.value` toward `target`, mutating `state` in place. */
export declare function spring4(state: Spring<Vec4>, target: Vec4, smoothTime: number, dampingRatio: number, delta: number): Spring<Vec4>;
/** Critically-damped Vec4 spring (dampingRatio = 1). See {@link damp}. */
export declare function damp4(state: Spring<Vec4>, target: Vec4, smoothTime: number, delta: number): Spring<Vec4>;
