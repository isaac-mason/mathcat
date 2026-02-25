# CHANGELOG

## 0.0.11 (Unreleased)

- feat: change `Box3` from `[Vec3, Vec3]` to a flat array `[minX, minY, minZ, maxX, maxY, maxZ]`, for performance improvement

## 0.0.10

- feat: change `OBB3` to store rotation as a `Mat3` instead of a `Quat`
- fix: obb3.applyMatrix4 calculation errors

## 0.0.9

- fix: tree-shaking, preserve modules in the build output so that namespaces like `vec3`, `quat` can be properly treeshaken when using individual functions like `vec3.add` or `quat.multiply`
- fix: added missing `/*@__PURE__*/` annotations to IIFEs for tree-shaking 

## 0.0.8

- feat: documentation regeneration, no functional changes to 0.0.7

## 0.0.7

- feat: add `raycast3` module and `Raycast3` type for rays with origin, direction, and length in 3D space
    - add `raycast3.create`, `raycast3.set`, `raycast3.copy`, `raycast3.fromSegment`
    - replace `box3.intersectsRay` with `raycast3.intersectsBox3` for ray-box intersection tests
    - add `raycast3.intersectsTriangle` for ray-triangle intersection tests in 3D space
- feat: move `circumcircle` module out of `triangle2`, export standalone
- feat: add `box3.copy` function to copy Box3 values to another Box3
- feat: add `box3.transformMat4`
- feat: add `triangle3.centroid`, `triangle3.normal`, `triangle3.bounds`
- feat: add `triangle3.copy`
- feat: add `box3.expandByExtents`
- feat: add `vec3.setScalar`
- feat: add `box3.extents`, `box3.center`
- feat: add `vec3.isScaleInsideOut`
- feat: remove unnecessary allocations in `obb3` functions
- feat: add `/*@__PURE__*/` annotations to internal temporary variables for better tree-shaking
- feat: remove `Triangle2` and `Triangle3` types, passing individual Vec2/Vec3 arguments has been generally more practical instead
- feat: add `quat.fromDegrees` convenience function to set quaternion from Euler angles in degrees
- feat: add `box3.union` to compute the union of two Box3s
- feat: add `box3.size` to compute the size or dimensions of a Box3
- feat: add `box3.expandByMargin` to expand a Box3 by a uniform margin in all directions
- feat: add `box3.surfaceArea` to compute the surface area of a Box3
- feat: add `box3.empty` to set a Box3 to an empty state (min at +Infinity, max at -Infinity)
- feat: add `box3.equals` and `box3.exactEquals` for Box3 equality checks
- feat: change `raycast3.intersectsTriangle` to hit backfaces and set a `frontFacing` property on the output result
- feat: add `createIntersectsTriangleResult`, `IntersectsTriangleResult` type
- feat: add `plane3` module with common plane operations for `Plane3` type
- feat: add `mat4.multiply3x3`, `mat4.multiply3x3RightTransposed`
- feat: add `raycast3.fromValues` to create a Raycast3 from individual components
- feat: add `mat3.zero` and `mat4.zero` to set all elements to zero
- feat: add `mat4.multiply3x3TransposedVec`, `mat4.multiply3x3Vec`, `mat4.crossProductMatrix`
- feat: add `quat.fromMat4` to set a quaternion from 3x3 part of a Mat4
- feat: add `mat4.invert3x3`
- feat: add `vec3.perpendicular`
- feat: make `startIndex` required for `vec3.fromBuffer` and `vec3.toBuffer`
- feat: add `euler.set`

## 0.0.6

- `maaths` has been renamed to `mathcat` to avoid confusion with `maath` from pmndrs.

## 0.0.5

- feat: add `OBB3` type and `obb3` APIs for 3D oriented bounding boxes
- feat: add `quickhull3` for computing 3D convex hulls
- feat: add `quickhull2` for computing 2D convex hulls
- feat: remove `Segment2` and `Segment3` types for now, pass Vec2/Vec3 pairs instead

## 0.0.1 - 0.0.4

- very early development, see git history
