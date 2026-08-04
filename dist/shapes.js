import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import "./scalar-BGTmo5GO.js";
import { C as length, D as scaleAndAdd, E as scale$1, O as sub, _ as create$5, a as identity, b as equals$2, g as copy$3, h as clone$4, i as fromQuat, k as transformMat4$1, l as determinant, m as add, n as create$6, r as fromMat4, s as multiply, t as clone$3, v as cross, w as negate$1, x as exactEquals$2, y as dot } from "./mat3-BRz_EKyg.js";
//#region src/shapes/box3.ts
var box3_exports = /* @__PURE__ */ __exportAll({
	center: () => center,
	clone: () => clone$2,
	containsBox3: () => containsBox3,
	containsPoint: () => containsPoint$1,
	copy: () => copy$2,
	create: () => create$4,
	empty: () => empty,
	equals: () => equals$1,
	exactEquals: () => exactEquals$1,
	expandByExtents: () => expandByExtents,
	expandByMargin: () => expandByMargin,
	expandByPoint: () => expandByPoint,
	extents: () => extents,
	intersectsBox3: () => intersectsBox3$2,
	intersectsPlane3: () => intersectsPlane3,
	intersectsSphere: () => intersectsSphere$1,
	intersectsTriangle3: () => intersectsTriangle3,
	max: () => max,
	min: () => min,
	scale: () => scale,
	set: () => set$1,
	setFromCenterAndSize: () => setFromCenterAndSize,
	setFromVectors: () => setFromVectors,
	size: () => size,
	surfaceArea: () => surfaceArea,
	transformMat4: () => transformMat4,
	union: () => union
});
/**
* Create a new empty Box3 with "min" set to positive infinity and "max" set to negative infinity
* @returns A new Box3
*/
function create$4() {
	return [
		Number.POSITIVE_INFINITY,
		Number.POSITIVE_INFINITY,
		Number.POSITIVE_INFINITY,
		Number.NEGATIVE_INFINITY,
		Number.NEGATIVE_INFINITY,
		Number.NEGATIVE_INFINITY
	];
}
/**
* Clones a Box3
* @param box - A Box3 to clone
* @returns a clone of box
*/
function clone$2(box) {
	return [
		box[0],
		box[1],
		box[2],
		box[3],
		box[4],
		box[5]
	];
}
/**
* Copies a Box3 to another Box3
* @param out the output Box3
* @param box the input Box3
* @returns the output Box3
*/
function copy$2(out, box) {
	out[0] = box[0];
	out[1] = box[1];
	out[2] = box[2];
	out[3] = box[3];
	out[4] = box[4];
	out[5] = box[5];
	return out;
}
/**
* Sets the min and max values of a Box3
* @param out - The output Box3
* @param minX - The minimum X coordinate
* @param minY - The minimum Y coordinate
* @param minZ - The minimum Z coordinate
* @param maxX - The maximum X coordinate
* @param maxY - The maximum Y coordinate
* @param maxZ - The maximum Z coordinate
* @returns The updated Box3
*/
function set$1(out, minX, minY, minZ, maxX, maxY, maxZ) {
	out[0] = minX;
	out[1] = minY;
	out[2] = minZ;
	out[3] = maxX;
	out[4] = maxY;
	out[5] = maxZ;
	return out;
}
/**
* Sets the min and max values of a Box3 from Vec3 vectors
* @param out - The output Box3
* @param min - The minimum corner
* @param max - The maximum corner
* @returns The updated Box3
*/
function setFromVectors(out, min, max) {
	out[0] = min[0];
	out[1] = min[1];
	out[2] = min[2];
	out[3] = max[0];
	out[4] = max[1];
	out[5] = max[2];
	return out;
}
/**
* Extracts the minimum corner of a Box3
* @param out - The output Vec3 for the minimum corner
* @param box - The input Box3
* @returns The minimum corner
*/
function min(out, box) {
	out[0] = box[0];
	out[1] = box[1];
	out[2] = box[2];
	return out;
}
/**
* Extracts the maximum corner of a Box3
* @param out - The output Vec3 for the maximum corner
* @param box - The input Box3
* @returns The maximum corner
*/
function max(out, box) {
	out[0] = box[3];
	out[1] = box[4];
	out[2] = box[5];
	return out;
}
/**
* Set a Box3 to empty (min to positive infinity, max to negative infinity)
* @param out - The Box3 to make empty
* @returns The emptied Box3
*/
function empty(out) {
	out[0] = Number.POSITIVE_INFINITY;
	out[1] = Number.POSITIVE_INFINITY;
	out[2] = Number.POSITIVE_INFINITY;
	out[3] = Number.NEGATIVE_INFINITY;
	out[4] = Number.NEGATIVE_INFINITY;
	out[5] = Number.NEGATIVE_INFINITY;
	return out;
}
/**
* Returns whether or not the boxes have exactly the same elements in the same position (when compared with ===)
* @param a - The first box
* @param b - The second box
* @returns True if the boxes are equal, false otherwise
*/
function exactEquals$1(a, b) {
	return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
* Returns whether or not the boxes have approximately the same elements in the same position
* @param a - The first box
* @param b - The second box
* @returns True if the boxes are equal, false otherwise
*/
function equals$1(a, b) {
	const a0 = a[0];
	const a1 = a[1];
	const a2 = a[2];
	const a3 = a[3];
	const a4 = a[4];
	const a5 = a[5];
	const b0 = b[0];
	const b1 = b[1];
	const b2 = b[2];
	const b3 = b[3];
	const b4 = b[4];
	const b5 = b[5];
	return Math.abs(a0 - b0) <= 1e-6 * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= 1e-6 * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= 1e-6 * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= 1e-6 * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= 1e-6 * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= 1e-6 * Math.max(1, Math.abs(a5), Math.abs(b5));
}
const _setFromCenterAndSize_halfSize = /*@__PURE__*/ create$5();
const _setFromCenterAndSize_min = /*@__PURE__*/ create$5();
const _setFromCenterAndSize_max = /*@__PURE__*/ create$5();
/**
* Sets the box from a center point and size
* @param out - The output Box3
* @param center - The center point
* @param size - The size of the box
* @returns The updated Box3
*/
function setFromCenterAndSize(out, center, size) {
	const halfSize = scale$1(_setFromCenterAndSize_halfSize, size, .5);
	sub(_setFromCenterAndSize_min, center, halfSize);
	add(_setFromCenterAndSize_max, center, halfSize);
	out[0] = _setFromCenterAndSize_min[0];
	out[1] = _setFromCenterAndSize_min[1];
	out[2] = _setFromCenterAndSize_min[2];
	out[3] = _setFromCenterAndSize_max[0];
	out[4] = _setFromCenterAndSize_max[1];
	out[5] = _setFromCenterAndSize_max[2];
	return out;
}
/**
* Expands a Box3 to include a point
* @param out - The output Box3
* @param box - The input Box3
* @param point - The point to include
* @returns The expanded Box3
*/
function expandByPoint(out, box, point) {
	out[0] = Math.min(box[0], point[0]);
	out[1] = Math.min(box[1], point[1]);
	out[2] = Math.min(box[2], point[2]);
	out[3] = Math.max(box[3], point[0]);
	out[4] = Math.max(box[4], point[1]);
	out[5] = Math.max(box[5], point[2]);
	return out;
}
/**
* Widens a Box3 by a vector on both sides
* Subtracts the vector from min and adds it to max
* @param out - The output Box3
* @param box - The input Box3
* @param vector - The vector to expand by
* @returns The expanded Box3
*/
function expandByExtents(out, box, vector) {
	out[0] = box[0] - vector[0];
	out[1] = box[1] - vector[1];
	out[2] = box[2] - vector[2];
	out[3] = box[3] + vector[0];
	out[4] = box[4] + vector[1];
	out[5] = box[5] + vector[2];
	return out;
}
/**
* Expands a Box3 uniformly by a scalar margin on all sides
* Subtracts the margin from min and adds it to max on each axis
* @param out - The output Box3
* @param box - The input Box3
* @param margin - The uniform margin to expand by
* @returns The expanded Box3
*/
function expandByMargin(out, box, margin) {
	out[0] = box[0] - margin;
	out[1] = box[1] - margin;
	out[2] = box[2] - margin;
	out[3] = box[3] + margin;
	out[4] = box[4] + margin;
	out[5] = box[5] + margin;
	return out;
}
/**
* Computes the union of two bounding boxes
* Returns a Box3 that encompasses both input boxes
* @param out - The output Box3
* @param boxA - The first Box3
* @param boxB - The second Box3
* @returns The union Box3
*/
function union(out, boxA, boxB) {
	out[0] = Math.min(boxA[0], boxB[0]);
	out[1] = Math.min(boxA[1], boxB[1]);
	out[2] = Math.min(boxA[2], boxB[2]);
	out[3] = Math.max(boxA[3], boxB[3]);
	out[4] = Math.max(boxA[4], boxB[4]);
	out[5] = Math.max(boxA[5], boxB[5]);
	return out;
}
/**
* Calculate the center point of a bounding box
* @param out - The output Vec3 for the center
* @param box - The input Box3
* @returns The center point
*/
function center(out, box) {
	out[0] = (box[0] + box[3]) * .5;
	out[1] = (box[1] + box[4]) * .5;
	out[2] = (box[2] + box[5]) * .5;
	return out;
}
/**
* Calculate the extents (half-size) of a bounding box
* @param out - The output Vec3 for the extents
* @param box - The input Box3
* @returns The extents (distance from center to each face)
*/
function extents(out, box) {
	out[0] = (box[3] - box[0]) * .5;
	out[1] = (box[4] - box[1]) * .5;
	out[2] = (box[5] - box[2]) * .5;
	return out;
}
/**
* Calculate the size (dimensions) of a bounding box
* @param out - The output Vec3 for the size
* @param box - The input Box3
* @returns The size (width, height, depth)
*/
function size(out, box) {
	out[0] = box[3] - box[0];
	out[1] = box[4] - box[1];
	out[2] = box[5] - box[2];
	return out;
}
/**
* Calculate the surface area of a bounding box
* @param box - The input Box3
* @returns The surface area
*/
function surfaceArea(box) {
	const width = box[3] - box[0];
	const height = box[4] - box[1];
	const depth = box[5] - box[2];
	return 2 * (width * height + width * depth + height * depth);
}
/**
* Scale a bounding box by a vector, handling non-uniform and negative scaling
* @param out - The output Box3
* @param box - The input Box3
* @param scale - The scale to apply (as a Vec3)
* @returns The scaled Box3
*/
function scale(out, box, scale) {
	const minX = box[0] * scale[0];
	const maxX = box[3] * scale[0];
	const minY = box[1] * scale[1];
	const maxY = box[4] * scale[1];
	const minZ = box[2] * scale[2];
	const maxZ = box[5] * scale[2];
	out[0] = Math.min(minX, maxX);
	out[3] = Math.max(minX, maxX);
	out[1] = Math.min(minY, maxY);
	out[4] = Math.max(minY, maxY);
	out[2] = Math.min(minZ, maxZ);
	out[5] = Math.max(minZ, maxZ);
	return out;
}
/**
* Transform a bounding box by a 4x4 matrix.
* Uses Arvo's trick — transform the center, build new half-extents from
* |M| · extents — which is ~4× fewer ops than transforming all 8 corners.
* Reference: Jim Arvo, "Transforming Axis-Aligned Bounding Boxes",
* Graphics Gems I (1990).
* https://github.com/erich666/GraphicsGems/blob/master/gems/TransBox.c
* Assumes mat is affine (no perspective), which is always true for AABB
* transforms in practice.
* Safe under aliasing (out and box may be the same array): all six box
* components are read into locals before out is written.
* @param out - The output Box3
* @param box - The input Box3
* @param mat - The 4x4 transformation matrix
* @returns The transformed Box3
*/
function transformMat4(out, box, mat) {
	const bMinX = box[0];
	const bMinY = box[1];
	const bMinZ = box[2];
	const bMaxX = box[3];
	const bMaxY = box[4];
	const bMaxZ = box[5];
	if (bMinX > bMaxX || bMinY > bMaxY || bMinZ > bMaxZ) {
		out[0] = Number.POSITIVE_INFINITY;
		out[1] = Number.POSITIVE_INFINITY;
		out[2] = Number.POSITIVE_INFINITY;
		out[3] = Number.NEGATIVE_INFINITY;
		out[4] = Number.NEGATIVE_INFINITY;
		out[5] = Number.NEGATIVE_INFINITY;
		return out;
	}
	const cx = (bMinX + bMaxX) * .5;
	const cy = (bMinY + bMaxY) * .5;
	const cz = (bMinZ + bMaxZ) * .5;
	const ex = (bMaxX - bMinX) * .5;
	const ey = (bMaxY - bMinY) * .5;
	const ez = (bMaxZ - bMinZ) * .5;
	const m0 = mat[0], m1 = mat[1], m2 = mat[2];
	const m4 = mat[4], m5 = mat[5], m6 = mat[6];
	const m8 = mat[8], m9 = mat[9], m10 = mat[10];
	const tcx = m0 * cx + m4 * cy + m8 * cz + mat[12];
	const tcy = m1 * cx + m5 * cy + m9 * cz + mat[13];
	const tcz = m2 * cx + m6 * cy + m10 * cz + mat[14];
	const tex = Math.abs(m0) * ex + Math.abs(m4) * ey + Math.abs(m8) * ez;
	const tey = Math.abs(m1) * ex + Math.abs(m5) * ey + Math.abs(m9) * ez;
	const tez = Math.abs(m2) * ex + Math.abs(m6) * ey + Math.abs(m10) * ez;
	out[0] = tcx - tex;
	out[1] = tcy - tey;
	out[2] = tcz - tez;
	out[3] = tcx + tex;
	out[4] = tcy + tey;
	out[5] = tcz + tez;
	return out;
}
/**
* Test if a point is contained within the bounding box
* @param box - The bounding box
* @param point - The point to test
* @returns true if the point is inside or on the boundary of the box
*/
function containsPoint$1(box, point) {
	return point[0] >= box[0] && point[0] <= box[3] && point[1] >= box[1] && point[1] <= box[4] && point[2] >= box[2] && point[2] <= box[5];
}
/**
* Test if one Box3 completely contains another Box3
* @param container - The potentially containing Box3
* @param contained - The Box3 that might be contained
* @returns true if the container Box3 completely contains the contained Box3
*/
function containsBox3(container, contained) {
	return contained[0] >= container[0] && contained[3] <= container[3] && contained[1] >= container[1] && contained[4] <= container[4] && contained[2] >= container[2] && contained[5] <= container[5];
}
/**
* Check whether two bounding boxes intersect
*/
function intersectsBox3$2(boxA, boxB) {
	return boxA[0] <= boxB[3] && boxA[3] >= boxB[0] && boxA[1] <= boxB[4] && boxA[4] >= boxB[1] && boxA[2] <= boxB[5] && boxA[5] >= boxB[2];
}
const _center = [
	0,
	0,
	0
];
const _extents = [
	0,
	0,
	0
];
const _v0 = [
	0,
	0,
	0
];
const _v1 = [
	0,
	0,
	0
];
const _v2 = [
	0,
	0,
	0
];
const _f0 = [
	0,
	0,
	0
];
const _f1 = [
	0,
	0,
	0
];
const _f2 = [
	0,
	0,
	0
];
const _triangleNormal = [
	0,
	0,
	0
];
const _closestPoint = [
	0,
	0,
	0
];
const _axesCross = new Array(27);
const _axesBoxFaces = [
	1,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	1
];
const _axisTriangle = [
	0,
	0,
	0
];
function _satForAxes(axes, axisCount) {
	for (let i = 0; i < axisCount; i++) {
		const ax = axes[i * 3 + 0];
		const ay = axes[i * 3 + 1];
		const az = axes[i * 3 + 2];
		if (ax === 0 && ay === 0 && az === 0) continue;
		const p0 = _v0[0] * ax + _v0[1] * ay + _v0[2] * az;
		const p1 = _v1[0] * ax + _v1[1] * ay + _v1[2] * az;
		const p2 = _v2[0] * ax + _v2[1] * ay + _v2[2] * az;
		let minP = p0;
		let maxP = p0;
		if (p1 < minP) minP = p1;
		else if (p1 > maxP) maxP = p1;
		if (p2 < minP) minP = p2;
		else if (p2 > maxP) maxP = p2;
		const r = _extents[0] * Math.abs(ax) + _extents[1] * Math.abs(ay) + _extents[2] * Math.abs(az);
		if (maxP < -r || minP > r) return false;
	}
	return true;
}
function intersectsTriangle3(box, a, b, c) {
	if (box[0] > box[3] || box[1] > box[4] || box[2] > box[5]) return false;
	_center[0] = (box[0] + box[3]) * .5;
	_center[1] = (box[1] + box[4]) * .5;
	_center[2] = (box[2] + box[5]) * .5;
	_extents[0] = box[3] - _center[0];
	_extents[1] = box[4] - _center[1];
	_extents[2] = box[5] - _center[2];
	_v0[0] = a[0] - _center[0];
	_v0[1] = a[1] - _center[1];
	_v0[2] = a[2] - _center[2];
	_v1[0] = b[0] - _center[0];
	_v1[1] = b[1] - _center[1];
	_v1[2] = b[2] - _center[2];
	_v2[0] = c[0] - _center[0];
	_v2[1] = c[1] - _center[1];
	_v2[2] = c[2] - _center[2];
	_f0[0] = _v1[0] - _v0[0];
	_f0[1] = _v1[1] - _v0[1];
	_f0[2] = _v1[2] - _v0[2];
	_f1[0] = _v2[0] - _v1[0];
	_f1[1] = _v2[1] - _v1[1];
	_f1[2] = _v2[2] - _v1[2];
	_f2[0] = _v0[0] - _v2[0];
	_f2[1] = _v0[1] - _v2[1];
	_f2[2] = _v0[2] - _v2[2];
	_axesCross[0] = 0;
	_axesCross[1] = -_f0[2];
	_axesCross[2] = _f0[1];
	_axesCross[3] = 0;
	_axesCross[4] = -_f1[2];
	_axesCross[5] = _f1[1];
	_axesCross[6] = 0;
	_axesCross[7] = -_f2[2];
	_axesCross[8] = _f2[1];
	_axesCross[9] = _f0[2];
	_axesCross[10] = 0;
	_axesCross[11] = -_f0[0];
	_axesCross[12] = _f1[2];
	_axesCross[13] = 0;
	_axesCross[14] = -_f1[0];
	_axesCross[15] = _f2[2];
	_axesCross[16] = 0;
	_axesCross[17] = -_f2[0];
	_axesCross[18] = -_f0[1];
	_axesCross[19] = _f0[0];
	_axesCross[20] = 0;
	_axesCross[21] = -_f1[1];
	_axesCross[22] = _f1[0];
	_axesCross[23] = 0;
	_axesCross[24] = -_f2[1];
	_axesCross[25] = _f2[0];
	_axesCross[26] = 0;
	if (!_satForAxes(_axesCross, 9)) return false;
	if (!_satForAxes(_axesBoxFaces, 3)) return false;
	cross(_triangleNormal, _f0, _f1);
	_axisTriangle[0] = _triangleNormal[0];
	_axisTriangle[1] = _triangleNormal[1];
	_axisTriangle[2] = _triangleNormal[2];
	return _satForAxes(_axisTriangle, 1);
}
/**
* Test intersection between axis-aligned bounding box and a sphere.
*/
function intersectsSphere$1(box, sphere) {
	const { center, radius } = sphere;
	_closestPoint[0] = center[0] < box[0] ? box[0] : center[0] > box[3] ? box[3] : center[0];
	_closestPoint[1] = center[1] < box[1] ? box[1] : center[1] > box[4] ? box[4] : center[1];
	_closestPoint[2] = center[2] < box[2] ? box[2] : center[2] > box[5] ? box[5] : center[2];
	const dx = _closestPoint[0] - center[0];
	const dy = _closestPoint[1] - center[1];
	const dz = _closestPoint[2] - center[2];
	return dx * dx + dy * dy + dz * dz <= radius * radius;
}
/**
* Test intersection between axis-aligned bounding box and plane.
*/
function intersectsPlane3(box, plane) {
	const { normal, constant } = plane;
	let minDot = 0;
	let maxDot = 0;
	if (normal[0] > 0) {
		minDot = normal[0] * box[0];
		maxDot = normal[0] * box[3];
	} else {
		minDot = normal[0] * box[3];
		maxDot = normal[0] * box[0];
	}
	if (normal[1] > 0) {
		minDot += normal[1] * box[1];
		maxDot += normal[1] * box[4];
	} else {
		minDot += normal[1] * box[4];
		maxDot += normal[1] * box[1];
	}
	if (normal[2] > 0) {
		minDot += normal[2] * box[2];
		maxDot += normal[2] * box[5];
	} else {
		minDot += normal[2] * box[5];
		maxDot += normal[2] * box[2];
	}
	return minDot + constant <= 0 && maxDot + constant >= 0;
}
//#endregion
//#region src/shapes/obb3.ts
var obb3_exports = /* @__PURE__ */ __exportAll({
	applyMatrix4: () => applyMatrix4,
	clampPoint: () => clampPoint,
	clone: () => clone$1,
	containsPoint: () => containsPoint,
	copy: () => copy$1,
	create: () => create$3,
	intersectsBox3: () => intersectsBox3$1,
	intersectsOBB3: () => intersectsOBB3,
	set: () => set,
	setFromBox3: () => setFromBox3,
	setFromCenterHalfExtentsQuaternion: () => setFromCenterHalfExtentsQuaternion
});
function create$3() {
	return {
		center: [
			0,
			0,
			0
		],
		halfExtents: [
			1,
			1,
			1
		],
		rotation: create$6()
	};
}
function clone$1(a) {
	return {
		center: [
			a.center[0],
			a.center[1],
			a.center[2]
		],
		halfExtents: [
			a.halfExtents[0],
			a.halfExtents[1],
			a.halfExtents[2]
		],
		rotation: clone$3(a.rotation)
	};
}
function copy$1(out, a) {
	out.center[0] = a.center[0];
	out.center[1] = a.center[1];
	out.center[2] = a.center[2];
	out.halfExtents[0] = a.halfExtents[0];
	out.halfExtents[1] = a.halfExtents[1];
	out.halfExtents[2] = a.halfExtents[2];
	out.rotation[0] = a.rotation[0];
	out.rotation[1] = a.rotation[1];
	out.rotation[2] = a.rotation[2];
	out.rotation[3] = a.rotation[3];
	out.rotation[4] = a.rotation[4];
	out.rotation[5] = a.rotation[5];
	out.rotation[6] = a.rotation[6];
	out.rotation[7] = a.rotation[7];
	out.rotation[8] = a.rotation[8];
	return out;
}
/**
* Sets an OBB from center, half extents, and a rotation matrix.
* @param out the OBB to store the result
* @param center the center of the OBB
* @param halfExtents the half extents of the OBB
* @param rotation the Mat3 rotation matrix
* @returns the OBB with the given center, half extents, and rotation
*/
function set(out, center, halfExtents, rotation) {
	out.center[0] = center[0];
	out.center[1] = center[1];
	out.center[2] = center[2];
	out.halfExtents[0] = halfExtents[0];
	out.halfExtents[1] = halfExtents[1];
	out.halfExtents[2] = halfExtents[2];
	out.rotation[0] = rotation[0];
	out.rotation[1] = rotation[1];
	out.rotation[2] = rotation[2];
	out.rotation[3] = rotation[3];
	out.rotation[4] = rotation[4];
	out.rotation[5] = rotation[5];
	out.rotation[6] = rotation[6];
	out.rotation[7] = rotation[7];
	out.rotation[8] = rotation[8];
	return out;
}
/**
* Sets an OBB from center, half extents, and a quaternion.
* Convenience helper for users who store orientation as a quaternion.
*
* @param out - The OBB to store the result
* @param center - The center of the OBB
* @param halfExtents - The half extents of the OBB
* @param q - The quaternion representing the OBB's orientation
* @returns out
*/
function setFromCenterHalfExtentsQuaternion(out, center, halfExtents, q) {
	out.center[0] = center[0];
	out.center[1] = center[1];
	out.center[2] = center[2];
	out.halfExtents[0] = halfExtents[0];
	out.halfExtents[1] = halfExtents[1];
	out.halfExtents[2] = halfExtents[2];
	fromQuat(out.rotation, q);
	return out;
}
/**
* Creates an OBB from an axis-aligned bounding box (AABB).
* The resulting OBB will have the same center and extents as the AABB,
* with no rotation (identity orientation).
*
* @param out - The OBB to store the result
* @param aabb - The AABB (min and max corners)
* @returns out
*/
function setFromBox3(out, aabb) {
	out.center[0] = (aabb[0] + aabb[3]) * .5;
	out.center[1] = (aabb[1] + aabb[4]) * .5;
	out.center[2] = (aabb[2] + aabb[5]) * .5;
	out.halfExtents[0] = (aabb[3] - aabb[0]) * .5;
	out.halfExtents[1] = (aabb[4] - aabb[1]) * .5;
	out.halfExtents[2] = (aabb[5] - aabb[2]) * .5;
	identity(out.rotation);
	return out;
}
/**
* Tests whether a point is contained within an OBB.
*
* @param obb - The OBB to test
* @param point - The point to test
* @returns true if the point is inside the OBB
*/
function containsPoint(obb, point) {
	const dx = point[0] - obb.center[0];
	const dy = point[1] - obb.center[1];
	const dz = point[2] - obb.center[2];
	const r = obb.rotation;
	const lx = dx * r[0] + dy * r[1] + dz * r[2];
	const ly = dx * r[3] + dy * r[4] + dz * r[5];
	const lz = dx * r[6] + dy * r[7] + dz * r[8];
	return Math.abs(lx) <= obb.halfExtents[0] && Math.abs(ly) <= obb.halfExtents[1] && Math.abs(lz) <= obb.halfExtents[2];
}
/**
* Clamps a point to the surface or interior of an OBB.
* Reference: Closest Point on OBB to Point in Real-Time Collision Detection
* by Christer Ericson (chapter 5.1.4)
*
* @param out - The clamped point result
* @param obb - The OBB
* @param point - The point to clamp
* @returns out
*/
function clampPoint(out, obb, point) {
	const r = obb.rotation;
	const dx = point[0] - obb.center[0];
	const dy = point[1] - obb.center[1];
	const dz = point[2] - obb.center[2];
	out[0] = obb.center[0];
	out[1] = obb.center[1];
	out[2] = obb.center[2];
	let dist = dx * r[0] + dy * r[1] + dz * r[2];
	dist = Math.max(-obb.halfExtents[0], Math.min(obb.halfExtents[0], dist));
	out[0] += r[0] * dist;
	out[1] += r[1] * dist;
	out[2] += r[2] * dist;
	dist = dx * r[3] + dy * r[4] + dz * r[5];
	dist = Math.max(-obb.halfExtents[1], Math.min(obb.halfExtents[1], dist));
	out[0] += r[3] * dist;
	out[1] += r[4] * dist;
	out[2] += r[5] * dist;
	dist = dx * r[6] + dy * r[7] + dz * r[8];
	dist = Math.max(-obb.halfExtents[2], Math.min(obb.halfExtents[2], dist));
	out[0] += r[6] * dist;
	out[1] += r[7] * dist;
	out[2] += r[8] * dist;
	return out;
}
/**
* Tests whether an OBB intersects with another OBB using the Separating Axis Theorem.
* Reference: OBB-OBB Intersection in Real-Time Collision Detection
* by Christer Ericson (chapter 4.4.1)
*
* @param a - The first OBB
* @param b - The second OBB
* @param epsilon - Small value to prevent arithmetic errors when edges are parallel
* @returns true if the OBBs intersect
*/
const _intersectsOBB3_R = [
	[
		0,
		0,
		0
	],
	[
		0,
		0,
		0
	],
	[
		0,
		0,
		0
	]
];
const _intersectsOBB3_tInA = /*@__PURE__*/ create$5();
const _intersectsOBB3_AbsR = [
	[
		0,
		0,
		0
	],
	[
		0,
		0,
		0
	],
	[
		0,
		0,
		0
	]
];
function intersectsOBB3(a, b, epsilon = Number.EPSILON) {
	const rotA = a.rotation;
	const rotB = b.rotation;
	for (let i = 0; i < 3; i++) {
		const ai = i * 3;
		const ax = rotA[ai];
		const ay = rotA[ai + 1];
		const az = rotA[ai + 2];
		for (let j = 0; j < 3; j++) {
			const bj = j * 3;
			_intersectsOBB3_R[i][j] = ax * rotB[bj] + ay * rotB[bj + 1] + az * rotB[bj + 2];
		}
	}
	const tx = b.center[0] - a.center[0];
	const ty = b.center[1] - a.center[1];
	const tz = b.center[2] - a.center[2];
	_intersectsOBB3_tInA[0] = tx * rotA[0] + ty * rotA[1] + tz * rotA[2];
	_intersectsOBB3_tInA[1] = tx * rotA[3] + ty * rotA[4] + tz * rotA[5];
	_intersectsOBB3_tInA[2] = tx * rotA[6] + ty * rotA[7] + tz * rotA[8];
	for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) _intersectsOBB3_AbsR[i][j] = Math.abs(_intersectsOBB3_R[i][j]) + epsilon;
	let ra, rb;
	for (let i = 0; i < 3; i++) {
		ra = a.halfExtents[i];
		rb = b.halfExtents[0] * _intersectsOBB3_AbsR[i][0] + b.halfExtents[1] * _intersectsOBB3_AbsR[i][1] + b.halfExtents[2] * _intersectsOBB3_AbsR[i][2];
		if (Math.abs(_intersectsOBB3_tInA[i]) > ra + rb) return false;
	}
	for (let i = 0; i < 3; i++) {
		ra = a.halfExtents[0] * _intersectsOBB3_AbsR[0][i] + a.halfExtents[1] * _intersectsOBB3_AbsR[1][i] + a.halfExtents[2] * _intersectsOBB3_AbsR[2][i];
		rb = b.halfExtents[i];
		if (Math.abs(_intersectsOBB3_tInA[0] * _intersectsOBB3_R[0][i] + _intersectsOBB3_tInA[1] * _intersectsOBB3_R[1][i] + _intersectsOBB3_tInA[2] * _intersectsOBB3_R[2][i]) > ra + rb) return false;
	}
	ra = a.halfExtents[1] * _intersectsOBB3_AbsR[2][0] + a.halfExtents[2] * _intersectsOBB3_AbsR[1][0];
	rb = b.halfExtents[1] * _intersectsOBB3_AbsR[0][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[0][1];
	if (Math.abs(_intersectsOBB3_tInA[2] * _intersectsOBB3_R[1][0] - _intersectsOBB3_tInA[1] * _intersectsOBB3_R[2][0]) > ra + rb) return false;
	ra = a.halfExtents[1] * _intersectsOBB3_AbsR[2][1] + a.halfExtents[2] * _intersectsOBB3_AbsR[1][1];
	rb = b.halfExtents[0] * _intersectsOBB3_AbsR[0][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[0][0];
	if (Math.abs(_intersectsOBB3_tInA[2] * _intersectsOBB3_R[1][1] - _intersectsOBB3_tInA[1] * _intersectsOBB3_R[2][1]) > ra + rb) return false;
	ra = a.halfExtents[1] * _intersectsOBB3_AbsR[2][2] + a.halfExtents[2] * _intersectsOBB3_AbsR[1][2];
	rb = b.halfExtents[0] * _intersectsOBB3_AbsR[0][1] + b.halfExtents[1] * _intersectsOBB3_AbsR[0][0];
	if (Math.abs(_intersectsOBB3_tInA[2] * _intersectsOBB3_R[1][2] - _intersectsOBB3_tInA[1] * _intersectsOBB3_R[2][2]) > ra + rb) return false;
	ra = a.halfExtents[0] * _intersectsOBB3_AbsR[2][0] + a.halfExtents[2] * _intersectsOBB3_AbsR[0][0];
	rb = b.halfExtents[1] * _intersectsOBB3_AbsR[1][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[1][1];
	if (Math.abs(_intersectsOBB3_tInA[0] * _intersectsOBB3_R[2][0] - _intersectsOBB3_tInA[2] * _intersectsOBB3_R[0][0]) > ra + rb) return false;
	ra = a.halfExtents[0] * _intersectsOBB3_AbsR[2][1] + a.halfExtents[2] * _intersectsOBB3_AbsR[0][1];
	rb = b.halfExtents[0] * _intersectsOBB3_AbsR[1][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[1][0];
	if (Math.abs(_intersectsOBB3_tInA[0] * _intersectsOBB3_R[2][1] - _intersectsOBB3_tInA[2] * _intersectsOBB3_R[0][1]) > ra + rb) return false;
	ra = a.halfExtents[0] * _intersectsOBB3_AbsR[2][2] + a.halfExtents[2] * _intersectsOBB3_AbsR[0][2];
	rb = b.halfExtents[0] * _intersectsOBB3_AbsR[1][1] + b.halfExtents[1] * _intersectsOBB3_AbsR[1][0];
	if (Math.abs(_intersectsOBB3_tInA[0] * _intersectsOBB3_R[2][2] - _intersectsOBB3_tInA[2] * _intersectsOBB3_R[0][2]) > ra + rb) return false;
	ra = a.halfExtents[0] * _intersectsOBB3_AbsR[1][0] + a.halfExtents[1] * _intersectsOBB3_AbsR[0][0];
	rb = b.halfExtents[1] * _intersectsOBB3_AbsR[2][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[2][1];
	if (Math.abs(_intersectsOBB3_tInA[1] * _intersectsOBB3_R[0][0] - _intersectsOBB3_tInA[0] * _intersectsOBB3_R[1][0]) > ra + rb) return false;
	ra = a.halfExtents[0] * _intersectsOBB3_AbsR[1][1] + a.halfExtents[1] * _intersectsOBB3_AbsR[0][1];
	rb = b.halfExtents[0] * _intersectsOBB3_AbsR[2][2] + b.halfExtents[2] * _intersectsOBB3_AbsR[2][0];
	if (Math.abs(_intersectsOBB3_tInA[1] * _intersectsOBB3_R[0][1] - _intersectsOBB3_tInA[0] * _intersectsOBB3_R[1][1]) > ra + rb) return false;
	ra = a.halfExtents[0] * _intersectsOBB3_AbsR[1][2] + a.halfExtents[1] * _intersectsOBB3_AbsR[0][2];
	rb = b.halfExtents[0] * _intersectsOBB3_AbsR[2][1] + b.halfExtents[1] * _intersectsOBB3_AbsR[2][0];
	if (Math.abs(_intersectsOBB3_tInA[1] * _intersectsOBB3_R[0][2] - _intersectsOBB3_tInA[0] * _intersectsOBB3_R[1][2]) > ra + rb) return false;
	return true;
}
const _intersectsBox3_obbFromAABB = /*@__PURE__*/ create$3();
/**
* Tests whether an OBB intersects with an AABB.
*
* @param obb - The OBB
* @param aabb - The AABB (axis-aligned bounding box)
* @returns true if they intersect
*/
function intersectsBox3$1(obb, aabb) {
	return intersectsOBB3(obb, setFromBox3(_intersectsBox3_obbFromAABB, aabb));
}
/**
* Applies a 4x4 transformation matrix to an OBB.
* This can be used to transform the bounding volume with the world matrix
* of a 3D object to keep both entities in sync.
*
* @param out - The transformed OBB
* @param obb - The OBB to transform
* @param matrix - The 4x4 transformation matrix
* @returns out
*/
const _applyMatrix4_rotationMat = /*@__PURE__*/ create$6();
function applyMatrix4(out, obb, matrix) {
	const e = matrix;
	let sx = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
	const sy = Math.sqrt(e[4] * e[4] + e[5] * e[5] + e[6] * e[6]);
	const sz = Math.sqrt(e[8] * e[8] + e[9] * e[9] + e[10] * e[10]);
	if (determinant(matrix) < 0) sx = -sx;
	fromMat4(_applyMatrix4_rotationMat, matrix);
	const invSX = 1 / sx;
	const invSY = 1 / sy;
	const invSZ = 1 / sz;
	_applyMatrix4_rotationMat[0] *= invSX;
	_applyMatrix4_rotationMat[1] *= invSX;
	_applyMatrix4_rotationMat[2] *= invSX;
	_applyMatrix4_rotationMat[3] *= invSY;
	_applyMatrix4_rotationMat[4] *= invSY;
	_applyMatrix4_rotationMat[5] *= invSY;
	_applyMatrix4_rotationMat[6] *= invSZ;
	_applyMatrix4_rotationMat[7] *= invSZ;
	_applyMatrix4_rotationMat[8] *= invSZ;
	multiply(out.rotation, _applyMatrix4_rotationMat, obb.rotation);
	out.halfExtents[0] = obb.halfExtents[0] * Math.abs(sx);
	out.halfExtents[1] = obb.halfExtents[1] * Math.abs(sy);
	out.halfExtents[2] = obb.halfExtents[2] * Math.abs(sz);
	transformMat4$1(out.center, obb.center, matrix);
	return out;
}
//#endregion
//#region src/shapes/plane3.ts
var plane3_exports = /* @__PURE__ */ __exportAll({
	clone: () => clone,
	copy: () => copy,
	create: () => create$2,
	distanceToPoint: () => distanceToPoint,
	equals: () => equals,
	exactEquals: () => exactEquals,
	fromCoplanarPoints: () => fromCoplanarPoints,
	fromNormalAndConstant: () => fromNormalAndConstant,
	fromNormalAndPoint: () => fromNormalAndPoint,
	intersect: () => intersect,
	intersectsSphere: () => intersectsSphere,
	negate: () => negate,
	normalize: () => normalize,
	offset: () => offset,
	projectPoint: () => projectPoint,
	transform: () => transform
});
/**
* Creates a new plane with normal (0, 1, 0) and constant 0
* @returns A new plane
*/
function create$2() {
	return {
		normal: [
			0,
			1,
			0
		],
		constant: 0
	};
}
/**
* Creates a plane from a normal and constant
* @param out - The output plane
* @param normal - The plane normal (should be unit length)
* @param constant - The signed distance from origin
* @returns The output plane
*/
function fromNormalAndConstant(out, normal, constant) {
	copy$3(out.normal, normal);
	out.constant = constant;
	return out;
}
/**
* Creates a plane from a normal and a point on the plane
* @param out - The output plane
* @param normal - The plane normal (should be unit length)
* @param point - A point on the plane
* @returns The output plane
*/
function fromNormalAndPoint(out, normal, point) {
	copy$3(out.normal, normal);
	out.constant = -dot(normal, point);
	return out;
}
/**
* Creates a plane from three coplanar points
* @param out - The output plane
* @param a - First point
* @param b - Second point
* @param c - Third point
* @returns The output plane
*/
function fromCoplanarPoints(out, a, b, c) {
	const ax = a[0];
	const ay = a[1];
	const az = a[2];
	const v1x = b[0] - ax;
	const v1y = b[1] - ay;
	const v1z = b[2] - az;
	const v2x = c[0] - ax;
	const v2y = c[1] - ay;
	const v2z = c[2] - az;
	let nx = v1y * v2z - v1z * v2y;
	let ny = v1z * v2x - v1x * v2z;
	let nz = v1x * v2y - v1y * v2x;
	let len = nx * nx + ny * ny + nz * nz;
	if (len > 0) len = 1 / Math.sqrt(len);
	nx *= len;
	ny *= len;
	nz *= len;
	out.normal[0] = nx;
	out.normal[1] = ny;
	out.normal[2] = nz;
	out.constant = -(nx * ax + ny * ay + nz * az);
	return out;
}
/**
* Clones a plane
* @param plane - The plane to clone
* @returns A new plane
*/
function clone(plane) {
	return {
		normal: clone$4(plane.normal),
		constant: plane.constant
	};
}
/**
* Copies one plane to another
* @param out - The output plane
* @param plane - The source plane
* @returns The output plane
*/
function copy(out, plane) {
	copy$3(out.normal, plane.normal);
	out.constant = plane.constant;
	return out;
}
/**
* Normalizes a plane (ensures the normal vector is unit length)
* @param out - The output plane
* @param plane - The input plane
* @returns The normalized plane
*/
function normalize(out, plane) {
	const invMagnitude = 1 / length(plane.normal);
	scale$1(out.normal, plane.normal, invMagnitude);
	out.constant = plane.constant * invMagnitude;
	return out;
}
/**
* Negates a plane (flips the normal and constant)
* @param out - The output plane
* @param plane - The input plane
* @returns The negated plane
*/
function negate(out, plane) {
	negate$1(out.normal, plane.normal);
	out.constant = -plane.constant;
	return out;
}
/**
* Offsets a plane by a distance along its normal
* @param out - The output plane
* @param plane - The input plane
* @param distance - The distance to offset (positive = in direction of normal)
* @returns The offset plane
*/
function offset(out, plane, distance) {
	copy$3(out.normal, plane.normal);
	out.constant = plane.constant - distance;
	return out;
}
/**
* Calculates the signed distance from a point to the plane
* @param plane - The plane
* @param point - The point
* @returns The signed distance (positive = in direction of normal)
*/
function distanceToPoint(plane, point) {
	return dot(plane.normal, point) + plane.constant;
}
/**
* Projects a point onto the plane
* @param out - The output point
* @param plane - The plane
* @param point - The point to project
* @returns The projected point
*/
function projectPoint(out, plane, point) {
	const distance = distanceToPoint(plane, point);
	return scaleAndAdd(out, point, plane.normal, -distance);
}
/**
* Transforms a plane by a 4x4 matrix
* @param out - The output plane
* @param plane - The plane to transform
* @param matrix - The transformation matrix
* @returns The transformed plane
*/
function transform(out, plane, matrix) {
	const inx = plane.normal[0];
	const iny = plane.normal[1];
	const inz = plane.normal[2];
	const px = inx * -plane.constant;
	const py = iny * -plane.constant;
	const pz = inz * -plane.constant;
	let nx = matrix[0] * inx + matrix[4] * iny + matrix[8] * inz;
	let ny = matrix[1] * inx + matrix[5] * iny + matrix[9] * inz;
	let nz = matrix[2] * inx + matrix[6] * iny + matrix[10] * inz;
	let w = matrix[3] * px + matrix[7] * py + matrix[11] * pz + matrix[15];
	w = w || 1;
	const tpx = (matrix[0] * px + matrix[4] * py + matrix[8] * pz + matrix[12]) / w;
	const tpy = (matrix[1] * px + matrix[5] * py + matrix[9] * pz + matrix[13]) / w;
	const tpz = (matrix[2] * px + matrix[6] * py + matrix[10] * pz + matrix[14]) / w;
	let len = nx * nx + ny * ny + nz * nz;
	if (len > 0) len = 1 / Math.sqrt(len);
	nx *= len;
	ny *= len;
	nz *= len;
	out.normal[0] = nx;
	out.normal[1] = ny;
	out.normal[2] = nz;
	out.constant = -(nx * tpx + ny * tpy + nz * tpz);
	return out;
}
/**
* Tests if a sphere intersects the plane
* @param plane - The plane
* @param sphere - The sphere
* @returns True if they intersect
*/
function intersectsSphere(plane, sphere) {
	return Math.abs(distanceToPoint(plane, sphere.center)) <= sphere.radius;
}
/**
* Tests if two planes are exactly equal
* @param a - First plane
* @param b - Second plane
* @returns True if planes are exactly equal
*/
function exactEquals(a, b) {
	return exactEquals$2(a.normal, b.normal) && a.constant === b.constant;
}
/**
* Finds the intersection point of three planes
* @param out - The output point where the three planes intersect
* @param p1 - First plane
* @param p2 - Second plane
* @param p3 - Third plane
* @returns True if intersection exists, false if planes are degenerate or parallel
*/
function intersect(out, p1, p2, p3) {
	const n1x = p1.normal[0];
	const n1y = p1.normal[1];
	const n1z = p1.normal[2];
	const n2x = p2.normal[0];
	const n2y = p2.normal[1];
	const n2z = p2.normal[2];
	const n3x = p3.normal[0];
	const n3y = p3.normal[1];
	const n3z = p3.normal[2];
	const c1x = n2y * n3z - n2z * n3y;
	const c1y = n2z * n3x - n2x * n3z;
	const c1z = n2x * n3y - n2y * n3x;
	const denom = n1x * c1x + n1y * c1y + n1z * c1z;
	if (Math.abs(denom) < 1e-6) return false;
	const c2x = n3y * n1z - n3z * n1y;
	const c2y = n3z * n1x - n3x * n1z;
	const c2z = n3x * n1y - n3y * n1x;
	const c3x = n1y * n2z - n1z * n2y;
	const c3y = n1z * n2x - n1x * n2z;
	const c3z = n1x * n2y - n1y * n2x;
	const d1 = p1.constant;
	const d2 = p2.constant;
	const d3 = p3.constant;
	const s = -1 / denom;
	out[0] = (d1 * c1x + d2 * c2x + d3 * c3x) * s;
	out[1] = (d1 * c1y + d2 * c2y + d3 * c3y) * s;
	out[2] = (d1 * c1z + d2 * c2z + d3 * c3z) * s;
	return true;
}
/**
* Tests if two planes are equal
* @param a - First plane
* @param b - Second plane
* @returns True if planes are equal
*/
function equals(a, b) {
	return equals$2(a.normal, b.normal) && Math.abs(a.constant - b.constant) < 1e-6;
}
//#endregion
//#region src/shapes/sphere.ts
var sphere_exports = /* @__PURE__ */ __exportAll({ create: () => create$1 });
/**
* Creates a new sphere with a default center 0,0,0 and radius 1
* @returns A new sphere.
*/
function create$1() {
	return {
		center: [
			0,
			0,
			0
		],
		radius: 1
	};
}
//#endregion
//#region src/shapes/circle.ts
var circle_exports = /* @__PURE__ */ __exportAll({ create: () => create });
function create() {
	return {
		center: [0, 0],
		radius: 0
	};
}
//#endregion
//#region src/shapes/segment2.ts
var segment2_exports = /* @__PURE__ */ __exportAll({ closestPoint: () => closestPoint });
/**
* Calculates the closest point on a line segment to a given point
* @param out Output parameter for the closest point
* @param point The point
* @param a First endpoint of the segment
* @param b Second endpoint of the segment
*/
function closestPoint(out, point, a, b) {
	const pqx = b[0] - a[0];
	const pqz = b[1] - a[1];
	const dx = point[0] - a[0];
	const dz = point[1] - a[1];
	const d = pqx * pqx + pqz * pqz;
	let t = pqx * dx + pqz * dz;
	if (d > 0) t /= d;
	if (t < 0) t = 0;
	else if (t > 1) t = 1;
	out[0] = a[0] + t * pqx;
	out[1] = a[1] + t * pqz;
	return out;
}
//#endregion
//#region src/shapes/triangle3.ts
var triangle3_exports = /* @__PURE__ */ __exportAll({
	bounds: () => bounds,
	centroid: () => centroid,
	normal: () => normal
});
/**
* Computes the axis-aligned bounding box of a triangle defined by three vertices.
* @param out the output box to store the result.
* @param a the first vertex of the triangle.
* @param b the second vertex of the triangle.
* @param c the third vertex of the triangle.
* @returns the output box containing the axis-aligned bounding box of the triangle.
*/
function bounds(out, a, b, c) {
	out[0] = Math.min(a[0], b[0], c[0]);
	out[1] = Math.min(a[1], b[1], c[1]);
	out[2] = Math.min(a[2], b[2], c[2]);
	out[3] = Math.max(a[0], b[0], c[0]);
	out[4] = Math.max(a[1], b[1], c[1]);
	out[5] = Math.max(a[2], b[2], c[2]);
	return out;
}
/**
* Computes the normal vector of a triangle defined by three vertices.
* @param out the output vector to store the result.
* @param a the first vertex of the triangle.
* @param b the second vertex of the triangle.
* @param c the third vertex of the triangle.
* @returns the output vector containing the normal of the triangle.
*/
function normal(out, a, b, c) {
	const abx = b[0] - a[0];
	const aby = b[1] - a[1];
	const abz = b[2] - a[2];
	const acx = c[0] - a[0];
	const acy = c[1] - a[1];
	const acz = c[2] - a[2];
	out[0] = aby * acz - abz * acy;
	out[1] = abz * acx - abx * acz;
	out[2] = abx * acy - aby * acx;
	const length = Math.sqrt(out[0] * out[0] + out[1] * out[1] + out[2] * out[2]);
	if (length > 0) {
		out[0] /= length;
		out[1] /= length;
		out[2] /= length;
	}
	return out;
}
/**
* Computes the centroid of a triangle defined by three vertices.
* @param out the output vector to store the result.
* @param a the first vertex of the triangle.
* @param b the second vertex of the triangle.
* @param c the third vertex of the triangle.
* @returns the output vector containing the centroid of the triangle.
*/
function centroid(out, a, b, c) {
	out[0] = (a[0] + b[0] + c[0]) / 3;
	out[1] = (a[1] + b[1] + c[1]) / 3;
	out[2] = (a[2] + b[2] + c[2]) / 3;
	return out;
}
//#endregion
//#region src/shapes/raycast3.ts
var raycast3_exports = /* @__PURE__ */ __exportAll({
	createIntersectsTriangleResult: () => createIntersectsTriangleResult,
	intersectsBox3: () => intersectsBox3,
	intersectsTriangle: () => intersectsTriangle
});
/**
* Creates a new IntersectsTriangleResult with default values.
* @returns A new IntersectsTriangleResult.
*/
function createIntersectsTriangleResult() {
	return {
		fraction: 0,
		hit: false,
		frontFacing: false
	};
}
/**
* Ray-triangle intersection test.
* Based on https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
*
* @param out output object to store result (hit boolean, fraction, frontFacing)
* @param origin ray origin
* @param direction ray direction
* @param length ray length
* @param a first vertex of triangle
* @param b second vertex of triangle
* @param c third vertex of triangle
* @param backfaceCulling if true, backfaces will not be considered hits
*/
function intersectsTriangle(out, origin, direction, length, a, b, c, backfaceCulling) {
	const e1x = b[0] - a[0];
	const e1y = b[1] - a[1];
	const e1z = b[2] - a[2];
	const e2x = c[0] - a[0];
	const e2y = c[1] - a[1];
	const e2z = c[2] - a[2];
	const nx = e1y * e2z - e1z * e2y;
	const ny = e1z * e2x - e1x * e2z;
	const nz = e1x * e2y - e1y * e2x;
	const dx = direction[0];
	const dy = direction[1];
	const dz = direction[2];
	let DdN = dx * nx + dy * ny + dz * nz;
	let sign;
	if (DdN > 0) {
		if (backfaceCulling) {
			out.hit = false;
			out.fraction = 0;
			out.frontFacing = false;
			return;
		}
		sign = 1;
	} else if (DdN < 0) {
		sign = -1;
		DdN = -DdN;
	} else {
		out.hit = false;
		out.fraction = 0;
		out.frontFacing = false;
		return;
	}
	const diffx = origin[0] - a[0];
	const diffy = origin[1] - a[1];
	const diffz = origin[2] - a[2];
	const diffCrossE2x = diffy * e2z - diffz * e2y;
	const diffCrossE2y = diffz * e2x - diffx * e2z;
	const diffCrossE2z = diffx * e2y - diffy * e2x;
	const DdQxE2 = sign * (dx * diffCrossE2x + dy * diffCrossE2y + dz * diffCrossE2z);
	if (DdQxE2 < 0) {
		out.hit = false;
		out.fraction = 0;
		out.frontFacing = false;
		return;
	}
	const e1CrossDiffx = e1y * diffz - e1z * diffy;
	const e1CrossDiffy = e1z * diffx - e1x * diffz;
	const e1CrossDiffz = e1x * diffy - e1y * diffx;
	const DdE1xQ = sign * (dx * e1CrossDiffx + dy * e1CrossDiffy + dz * e1CrossDiffz);
	if (DdE1xQ < 0) {
		out.hit = false;
		out.fraction = 0;
		out.frontFacing = false;
		return;
	}
	if (DdQxE2 + DdE1xQ > DdN) {
		out.hit = false;
		out.fraction = 0;
		out.frontFacing = false;
		return;
	}
	const QdN = -sign * (diffx * nx + diffy * ny + diffz * nz);
	if (QdN < 0) {
		out.hit = false;
		out.fraction = 0;
		out.frontFacing = false;
		return;
	}
	const t = QdN / DdN;
	if (t <= length) {
		out.hit = true;
		out.fraction = t / length;
		out.frontFacing = sign < 0;
	} else {
		out.hit = false;
		out.fraction = 0;
		out.frontFacing = false;
	}
}
/**
* Test if a ray intersects an axis-aligned bounding box.
* Uses slab-based algorithm that handles parallel rays correctly.
*
* @param origin ray origin
* @param direction ray direction
* @param length ray length
* @param aabb AABB to test against
* @returns true if ray intersects the AABB, false otherwise
*/
function intersectsBox3(origin, direction, length, aabb) {
	let tmin = 0;
	let tmax = length;
	for (let i = 0; i < 3; i++) {
		const d = direction[i];
		if (Math.abs(d) < 1e-10) {
			if (origin[i] < aabb[i] || origin[i] > aabb[i + 3]) return false;
		} else {
			const invD = 1 / d;
			let t0 = (aabb[i] - origin[i]) * invD;
			let t1 = (aabb[i + 3] - origin[i]) * invD;
			if (invD < 0) {
				const temp = t0;
				t0 = t1;
				t1 = temp;
			}
			tmin = Math.max(tmin, t0);
			tmax = Math.min(tmax, t1);
			if (tmax < tmin) return false;
		}
	}
	return true;
}
//#endregion
export { box3_exports as box3, circle_exports as circle, obb3_exports as obb3, plane3_exports as plane3, raycast3_exports as raycast3, segment2_exports as segment2, sphere_exports as sphere, triangle3_exports as triangle3 };

//# sourceMappingURL=shapes.js.map