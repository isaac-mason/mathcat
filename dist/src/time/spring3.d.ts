import type { Vec3 } from '../core/index.js';
import { type Spring } from './spring-core.js';
/** Creates a Vec3 spring at `value` (copied), at rest. */
export declare const create: (value?: Vec3) => Spring<Vec3>;
/**
 * Springs `state.value` toward `target`, mutating `state` in place. Returns it.
 * @param dampingRatio 1 = critically damped (no overshoot), <1 bouncy, >1 sluggish
 */
export declare function update(state: Spring<Vec3>, target: Vec3, smoothTime: number, dampingRatio: number, delta: number): Spring<Vec3>;
/** Critically-damped Vec3 spring (dampingRatio = 1). See {@link update}. */
export declare function damp(state: Spring<Vec3>, target: Vec3, smoothTime: number, delta: number): Spring<Vec3>;
