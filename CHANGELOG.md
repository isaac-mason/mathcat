# CHANGELOG

## 0.0.7 (Unreleased)

- feat: add `ray3` module and `Ray3` type for rays with origin, direction, and length in 3D space
- feat: replace `box3.intersectsRay` with `ray3.intersectsBox3` for ray-box intersection tests
- feat: add `ray3.intersectsTriangle` for ray-triangle intersection tests in 3D space
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
- feat: add `ray3.create`, `ray3.set`, `ray3.copy`, `ray3.fromSegment`
- feat: add `box3.expandByMargin` to expand a Box3 by a uniform margin in all directions
- feat: rename `ray3` / `Ray3` to `raycast3` / `Raycast3` to better reflect its purpose as a ray used for raycasting, including a length component
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

## 0.0.6

- `maaths` has been renamed to `mathcat` to avoid confusion with `maath` from pmndrs.

## 0.0.5

- feat: add `OBB3` type and `obb3` APIs for 3D oriented bounding boxes
- feat: add `quickhull3` for computing 3D convex hulls
- feat: add `quickhull2` for computing 2D convex hulls
- feat: remove `Segment2` and `Segment3` types for now, pass Vec2/Vec3 pairs instead

## 0.0.1 - 0.0.4

- very early development, see git history
