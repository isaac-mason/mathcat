const exp = (t) => 1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t);
const linear = (t) => t;
const sineIn = (x) => 1 - Math.cos((x * Math.PI) / 2);
const sineOut = (x) => Math.sin((x * Math.PI) / 2);
const sineInOut = (x) => -(Math.cos(Math.PI * x) - 1) / 2;
const cubicIn = (x) => x * x * x;
const cubicOut = (x) => 1 - (1 - x) ** 3;
const cubicInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);
const quintIn = (x) => x ** 5;
const quintOut = (x) => 1 - (1 - x) ** 5;
const quintInOut = (x) => (x < 0.5 ? 16 * x ** 5 : 1 - (-2 * x + 2) ** 5 / 2);
const circIn = (x) => 1 - Math.sqrt(1 - x * x);
const circOut = (x) => Math.sqrt(1 - (x - 1) * (x - 1));
const circInOut = (x) => x < 0.5 ? (1 - Math.sqrt(1 - 2 * x * (2 * x))) / 2 : (Math.sqrt(1 - (-2 * x + 2) * (-2 * x + 2)) + 1) / 2;
const quartIn = (t) => t * t * t * t;
const quartOut = (t) => 1 - --t * t * t * t;
const quartInOut = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t);
const expoIn = (x) => (x === 0 ? 0 : 2 ** (10 * x - 10));
const expoOut = (x) => (x === 1 ? 1 : 1 - 2 ** (-10 * x));
const expoInOut = (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? 2 ** (20 * x - 10) / 2 : (2 - 2 ** (-20 * x + 10)) / 2;
const rsqw = (t, delta = 0.01, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

export { circIn, circInOut, circOut, cubicIn, cubicInOut, cubicOut, exp, expoIn, expoInOut, expoOut, linear, quartIn, quartInOut, quartOut, quintIn, quintInOut, quintOut, rsqw, sineIn, sineInOut, sineOut };
//# sourceMappingURL=easing.js.map
