import type { Vec4 } from '../core/index.js';
import { type Spring } from './spring-core.js';
/** Creates a Vec4 spring at `value` (copied), at rest. */
export declare const create: (value?: Vec4) => Spring<Vec4>;
/**
 * Springs `state.value` toward `target`, mutating `state` in place. Returns it.
 * @param dampingRatio 1 = critically damped (no overshoot), <1 bouncy, >1 sluggish
 */
export declare function update(state: Spring<Vec4>, target: Vec4, smoothTime: number, dampingRatio: number, delta: number): Spring<Vec4>;
/** Critically-damped Vec4 spring (dampingRatio = 1). See {@link update}. */
export declare function damp(state: Spring<Vec4>, target: Vec4, smoothTime: number, delta: number): Spring<Vec4>;
