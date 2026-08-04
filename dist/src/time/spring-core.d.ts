/**
 * Spring state: a `value` and its `velocity`, of matching rank
 * (`number`, `Vec2`, `Vec3`, or `Vec4`). Allocate once, mutate each frame.
 */
export type Spring<T> = {
    value: T;
    velocity: T;
};
export declare const coef: {
    pp: number;
    pv: number;
    vp: number;
    vv: number;
};
export declare function coefficients(smoothTime: number, dampingRatio: number, delta: number): void;
