/* SNIPPET_START: quick-start */
import { vec3 } from 'mathcat';
import { mulberry32 } from 'mathcat/random';
import * as time from 'mathcat/time';

// data structures are plain arrays / objects - no classes, no typed arrays
const a = vec3.fromValues(1, 2, 3);
const b = vec3.fromValues(4, 5, 6);

// functions that produce a result take the output as the first argument
const out = vec3.create();
vec3.add(out, a, b); // out = [5, 7, 9]
vec3.normalize(out, out);

// the rest live behind subpath entrypoints: mathcat/time, mathcat/random, ...
const t = time.easing.sineInOut(0.5);

const rng = mulberry32.create(1337);
const r = mulberry32.sample(rng); // deterministic [0, 1)
/* SNIPPET_END: quick-start */

console.log(out, t, r);
