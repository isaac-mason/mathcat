![cover](./docs/cover.png)

```sh
> npm install mathcat
```

# mathcat

mathcat is a collection of math helpers for graphics and simulations.

**Features:**

- Vector, Quaternion, Euler, and Matrix math (`mathcat`)
- Shape primitives and spatial queries (`mathcat/shapes`)
- Computational geometry - convex hulls, circumcircle (`mathcat/geometry`)
- Easing and spring functions (`mathcat/time`)
- Seeded randomness utilities (`mathcat/random`)
- Perlin and simplex noise utilities (`mathcat/noise`)
- Color and colorspace utilities (`mathcat/color`)
- Simple JSON-serializable data structures (no classes or typed arrays)
- Consistent output-argument-first API for allocation-free usage
- TypeScript-first, great DX for both JavaScript and TypeScript projects
- Excellent tree-shaking support, with a subpath entrypoint per module group

**Acknowledgements:**

- The vec*, quat*, mat* code started as a typescript port of glMatrix (https://glmatrix.net/). This library doesn't aim to stay in sync with glMatrix however.
- The noise, and easing utilities are adapted from https://github.com/pmndrs/maath (which adapted its simplex noise from https://github.com/josephg/noisejs) :)

## Quick Start

<Snippet source="./quick-start.ts" select="quick-start" />

## API Documentation

<RenderAPI />
