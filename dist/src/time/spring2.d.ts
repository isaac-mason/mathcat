import type { Vec2 } from '../core/index.js';
import { type Spring } from './spring-core.js';
/** Creates a Vec2 spring at `value` (copied), at rest. */
export declare const create: (value?: Vec2) => Spring<Vec2>;
/**
 * Springs `state.value` toward `target`, mutating `state` in place. Returns it.
 * @param dampingRatio 1 = critically damped (no overshoot), <1 bouncy, >1 sluggish
 */
export declare function update(state: Spring<Vec2>, target: Vec2, smoothTime: number, dampingRatio: number, delta: number): Spring<Vec2>;
/** Critically-damped Vec2 spring (dampingRatio = 1). See {@link update}. */
export declare function damp(state: Spring<Vec2>, target: Vec2, smoothTime: number, delta: number): Spring<Vec2>;
