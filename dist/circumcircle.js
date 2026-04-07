import { EPSILON } from './common.js';
import { set, create, subtract, dot, distance, add, copy } from './vec2.js';

const _circumcircleV1 = /*@__PURE__*/ create();
const _circumcircleV2 = /*@__PURE__*/ create();
const _circumcircleV3 = /*@__PURE__*/ create();
/**
 * Calculates the circumcircle of three points and stores the center in the output parameter.
 * @param out The circle to store the result in
 * @param triangle The triangle defined by three points
 * @returns
 */
function circumcircle(out, a, b, c) {
    // calculate the circle relative to p1, to avoid some precision issues.
    const v1 = _circumcircleV1;
    const v2 = _circumcircleV2;
    const v3 = _circumcircleV3;
    // v1 is the origin (p1 - p1 = 0), v2 and v3 are relative to p1
    set(v1, 0, 0);
    subtract(v2, b, a);
    subtract(v3, c, a);
    // calculate cross product for 2D vectors (v2 - v1) × (v3 - v1)
    subtract(v2, v2, v1); // v2 - v1
    subtract(v3, v3, v1); // v3 - v1
    const cp = v2[0] * v3[1] - v2[1] * v3[0];
    if (Math.abs(cp) > EPSILON) {
        const v1Sq = dot(_circumcircleV1, _circumcircleV1);
        const v2Sq = dot(_circumcircleV2, _circumcircleV2);
        const v3Sq = dot(_circumcircleV3, _circumcircleV3);
        out.center[0] = (v1Sq * (v2[1] - v3[1]) + v2Sq * (v3[1] - v1[1]) + v3Sq * (v1[1] - v2[1])) / (2 * cp);
        out.center[1] = (v1Sq * (v3[0] - v2[0]) + v2Sq * (v1[0] - v3[0]) + v3Sq * (v2[0] - v1[0])) / (2 * cp);
        const r = distance(out.center, v1);
        add(out.center, out.center, a);
        out.radius = r;
        return out;
    }
    copy(out.center, a);
    out.radius = 0;
    return out;
}

export { circumcircle };
//# sourceMappingURL=circumcircle.js.map
