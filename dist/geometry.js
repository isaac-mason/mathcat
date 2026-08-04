import "./scalar-BGTmo5GO.js";
import { a as dot, i as distance, n as copy, o as set, r as create, s as subtract, t as add } from "./vec2-DrUkSXim.js";
//#region src/geometry/circumcircle.ts
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
	const v1 = _circumcircleV1;
	const v2 = _circumcircleV2;
	const v3 = _circumcircleV3;
	set(v1, 0, 0);
	subtract(v2, b, a);
	subtract(v3, c, a);
	subtract(v2, v2, v1);
	subtract(v3, v3, v1);
	const cp = v2[0] * v3[1] - v2[1] * v3[0];
	if (Math.abs(cp) > 1e-6) {
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
//#endregion
//#region src/geometry/quickhull2.ts
const EPSILON$1 = 1e-10;
/**
* Computes the convex hull of a set of 2D points using the QuickHull algorithm.
* The hull is returned as an array of indices in counter-clockwise order.
*
* Implementation of pseudocode from: https://en.wikipedia.org/wiki/Quickhull
*
* @param points flat array of 2D points: [x0, y0, x1, y1, ...]
* @returns indices of hull vertices in ccw order
*/
function quickhull2(points) {
	const n = Math.floor(points.length / 2);
	if (n < 3) return Array.from({ length: n }, (_, i) => i);
	let leftIdx = 0;
	let rightIdx = 0;
	let minX = points[0];
	let maxX = points[0];
	for (let i = 1; i < n; i++) {
		const x = points[i * 2];
		if (x < minX) {
			minX = x;
			leftIdx = i;
		}
		if (x > maxX) {
			maxX = x;
			rightIdx = i;
		}
	}
	if (Math.abs(maxX - minX) < EPSILON$1) return [leftIdx];
	const hull = [];
	const s1 = [];
	const s2 = [];
	for (let i = 0; i < n; i++) {
		if (i === leftIdx || i === rightIdx) continue;
		const side = crossProduct(points, leftIdx, rightIdx, i);
		if (side > EPSILON$1) s2.push(i);
		else if (side < -1e-10) s1.push(i);
	}
	hull.push(leftIdx);
	findHull(points, s1, leftIdx, rightIdx, hull);
	hull.push(rightIdx);
	findHull(points, s2, rightIdx, leftIdx, hull);
	return hull;
}
/**
* Finds points on convex hull from set Sk that are on the right side of oriented line from P to Q.
* Points are inserted into hull array at the end (before the final endpoint).
*/
function findHull(points, sk, p, q, hull) {
	if (sk.length === 0) return;
	let maxIdx = -1;
	let maxDist = -1;
	for (const idx of sk) {
		const dist = Math.abs(crossProduct(points, p, q, idx));
		if (dist > maxDist) {
			maxDist = dist;
			maxIdx = idx;
		}
	}
	if (maxIdx === -1) return;
	const s1 = [];
	const s2 = [];
	for (const idx of sk) {
		if (idx === maxIdx) continue;
		const sidePC = crossProduct(points, p, maxIdx, idx);
		const sideCQ = crossProduct(points, maxIdx, q, idx);
		if (sidePC < -1e-10) s1.push(idx);
		else if (sideCQ < -1e-10) s2.push(idx);
	}
	findHull(points, s1, p, maxIdx, hull);
	hull.push(maxIdx);
	findHull(points, s2, maxIdx, q, hull);
}
/**
* Cross product to determine orientation.
* Returns (p2 - p1) × (p3 - p1)
* > 0: p3 is on the left of line p1→p2 (counter-clockwise)
* < 0: p3 is on the right of line p1→p2 (clockwise)
* = 0: collinear
*/
function crossProduct(points, p1, p2, p3) {
	const x1 = points[p1 * 2];
	const y1 = points[p1 * 2 + 1];
	const x2 = points[p2 * 2];
	const y2 = points[p2 * 2 + 1];
	const x3 = points[p3 * 2];
	const y3 = points[p3 * 2 + 1];
	return (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
}
//#endregion
//#region src/geometry/quickhull3.ts
/**
* Incremental Convex Hull 3D implementation based on Three.js ConvexHull.
*
* This implements the QuickHull algorithm with an incremental approach that maintains
* a valid hull at each step using a half-edge data structure (DCEL - Doubly Connected
* Edge List) for O(1) face adjacency queries.
*
* The algorithm is based on John Lloyd's Java implementation and was ported to
* JavaScript by Mauricio Poppe (quickhull3d), then incorporated into Three.js.
*
* References:
* - Three.js ConvexHull: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/math/ConvexHull.js
* - quickhull3d by Mauricio Poppe: https://github.com/maurizzzio/quickhull3d/
* - Original Java by John Lloyd: http://www.cs.ubc.ca/~lloyd/java/quickhull3d.html
* - Dirk Gregorius presentation: https://archive.org/details/GDC2014Gregorius
*
* Algorithm: QuickHull (incremental variant)
* Time complexity: O(n log n) average, O(n²) worst case
* Space complexity: O(n + f + e) where f=faces, e=edges (~3x more than basic)
*/
const EPSILON = 1e-12;
const VISIBLE = 0;
const DELETED = 1;
/**
* Computes the convex hull of a set of 3D points using an incremental QuickHull algorithm.
*
* @param points An array of numbers representing the 3D points (x1, y1, z1, x2, y2, z2, ...)
* @returns An array of indices representing the triangles of the convex hull (i1, j1, k1, i2, j2, k2, ...).
*/
function quickhull3(points) {
	const n = points.length / 3;
	if (n < 4) return [];
	const state = createHullState(points, n);
	computeInitialHull(state);
	let vertex = nextVertexToAdd(state);
	while (vertex !== null) {
		addVertexToHull(state, vertex);
		vertex = nextVertexToAdd(state);
	}
	reindexFaces(state);
	return getTriangleIndices(state);
}
function createHullState(points, n) {
	const vertices = [];
	for (let i = 0; i < n; i++) vertices.push(createVertexNode(i));
	return {
		points,
		tolerance: -1,
		faces: [],
		newFaces: [],
		assigned: createVertexList(),
		unassigned: createVertexList(),
		vertices
	};
}
function getTriangleIndices(state) {
	const result = [];
	for (const face of state.faces) if (face.mark === VISIBLE && face.edge) result.push(face.edge.vertex.index, face.edge.next.vertex.index, face.edge.prev.vertex.index);
	return result;
}
function createVertexNode(index) {
	return {
		index,
		prev: null,
		next: null,
		face: null
	};
}
function createVertexList() {
	return {
		head: null,
		tail: null
	};
}
function vertexListIsEmpty(list) {
	return list.head === null;
}
function vertexListClear(list) {
	list.head = null;
	list.tail = null;
}
function vertexListAppend(list, vertex) {
	if (list.head === null) list.head = vertex;
	else list.tail.next = vertex;
	vertex.prev = list.tail;
	vertex.next = null;
	list.tail = vertex;
}
function vertexListAppendChain(list, vertex) {
	if (list.head === null) list.head = vertex;
	else list.tail.next = vertex;
	vertex.prev = list.tail;
	let current = vertex;
	while (current.next !== null) current = current.next;
	list.tail = current;
}
function vertexListInsertBefore(list, target, vertex) {
	vertex.prev = target.prev;
	vertex.next = target;
	if (vertex.prev === null) list.head = vertex;
	else vertex.prev.next = vertex;
	target.prev = vertex;
}
function vertexListRemove(list, vertex) {
	if (vertex.prev === null) list.head = vertex.next;
	else vertex.prev.next = vertex.next;
	if (vertex.next === null) list.tail = vertex.prev;
	else vertex.next.prev = vertex.prev;
}
function vertexListRemoveSubList(list, a, b) {
	if (a.prev === null) list.head = b.next;
	else a.prev.next = b.next;
	if (b.next === null) list.tail = a.prev;
	else b.next.prev = a.prev;
}
function createHalfEdge(vertex, face) {
	return {
		vertex,
		prev: null,
		next: null,
		twin: null,
		face
	};
}
function halfEdgeHead(edge) {
	return edge.vertex;
}
function halfEdgeTail(edge) {
	return edge.prev ? edge.prev.vertex : null;
}
function halfEdgeSetTwin(edge, twin) {
	edge.twin = twin;
	twin.twin = edge;
}
function createFace() {
	return {
		normal: [
			0,
			0,
			0
		],
		midpoint: [
			0,
			0,
			0
		],
		area: 0,
		constant: 0,
		outside: null,
		mark: VISIBLE,
		edge: null
	};
}
function faceCreate(a, b, c) {
	const face = createFace();
	const e0 = createHalfEdge(a, face);
	const e1 = createHalfEdge(b, face);
	const e2 = createHalfEdge(c, face);
	e0.next = e1;
	e0.prev = e2;
	e1.next = e2;
	e1.prev = e0;
	e2.next = e0;
	e2.prev = e1;
	face.edge = e0;
	return face;
}
function faceGetEdge(face, i) {
	let edge = face.edge;
	if (!edge) return null;
	while (i > 0) {
		edge = edge.next;
		i--;
	}
	while (i < 0) {
		edge = edge.prev;
		i++;
	}
	return edge;
}
function faceCompute(face, points) {
	const a = halfEdgeTail(face.edge);
	const b = halfEdgeHead(face.edge);
	const c = halfEdgeHead(face.edge.next);
	const aIdx = a.index * 3;
	const bIdx = b.index * 3;
	const cIdx = c.index * 3;
	const ax = points[aIdx], ay = points[aIdx + 1], az = points[aIdx + 2];
	const bx = points[bIdx], by = points[bIdx + 1], bz = points[bIdx + 2];
	const cx = points[cIdx], cy = points[cIdx + 1], cz = points[cIdx + 2];
	const e1x = bx - ax, e1y = by - ay, e1z = bz - az;
	const e2x = cx - ax, e2y = cy - ay, e2z = cz - az;
	const nx = e1y * e2z - e1z * e2y;
	const ny = e1z * e2x - e1x * e2z;
	const nz = e1x * e2y - e1y * e2x;
	const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
	if (len > EPSILON) {
		face.normal[0] = nx / len;
		face.normal[1] = ny / len;
		face.normal[2] = nz / len;
	}
	face.midpoint[0] = (ax + bx + cx) / 3;
	face.midpoint[1] = (ay + by + cy) / 3;
	face.midpoint[2] = (az + bz + cz) / 3;
	face.area = len / 2;
	face.constant = face.normal[0] * face.midpoint[0] + face.normal[1] * face.midpoint[1] + face.normal[2] * face.midpoint[2];
}
function faceDistanceToPoint(face, points, vertexIndex) {
	const idx = vertexIndex * 3;
	return face.normal[0] * points[idx] + face.normal[1] * points[idx + 1] + face.normal[2] * points[idx + 2] - face.constant;
}
function computeExtremes(state) {
	const minVertices = [];
	const maxVertices = [];
	const min = [
		Infinity,
		Infinity,
		Infinity
	];
	const max = [
		-Infinity,
		-Infinity,
		-Infinity
	];
	for (let i = 0; i < 3; i++) {
		minVertices[i] = state.vertices[0];
		maxVertices[i] = state.vertices[0];
		min[i] = state.points[i];
		max[i] = state.points[i];
	}
	for (let i = 0; i < state.vertices.length; i++) {
		const vertex = state.vertices[i];
		const idx = vertex.index * 3;
		for (let j = 0; j < 3; j++) {
			const val = state.points[idx + j];
			if (val < min[j]) {
				min[j] = val;
				minVertices[j] = vertex;
			}
			if (val > max[j]) {
				max[j] = val;
				maxVertices[j] = vertex;
			}
		}
	}
	state.tolerance = 3 * Number.EPSILON * (Math.max(Math.abs(min[0]), Math.abs(max[0])) + Math.max(Math.abs(min[1]), Math.abs(max[1])) + Math.max(Math.abs(min[2]), Math.abs(max[2])));
	return {
		min: minVertices,
		max: maxVertices
	};
}
function computeInitialHull(state) {
	const extremes = computeExtremes(state);
	const min = extremes.min;
	const max = extremes.max;
	let maxDistance = 0;
	let index = 0;
	for (let i = 0; i < 3; i++) {
		const idx0 = min[i].index * 3;
		const idx1 = max[i].index * 3;
		const distance = state.points[idx0 + i] - state.points[idx1 + i];
		if (Math.abs(distance) > maxDistance) {
			maxDistance = Math.abs(distance);
			index = i;
		}
	}
	const v0 = min[index];
	const v1 = max[index];
	let v2 = null;
	maxDistance = 0;
	for (const vertex of state.vertices) if (vertex !== v0 && vertex !== v1) {
		const dist = distanceToLineSquared(state.points, vertex.index, v0.index, v1.index);
		if (dist > maxDistance) {
			maxDistance = dist;
			v2 = vertex;
		}
	}
	if (!v2) return;
	let v3 = null;
	maxDistance = -1;
	const normal = [
		0,
		0,
		0
	];
	const offset = computePlane(state.points, v0.index, v1.index, v2.index, normal);
	for (const vertex of state.vertices) if (vertex !== v0 && vertex !== v1 && vertex !== v2) {
		const dist = Math.abs(distanceToPlane(state.points, vertex.index, normal, offset));
		if (dist > maxDistance) {
			maxDistance = dist;
			v3 = vertex;
		}
	}
	if (!v3) return;
	const faces = [];
	if (distanceToPlane(state.points, v3.index, normal, offset) < 0) {
		faces.push(faceCreate(v0, v1, v2), faceCreate(v3, v1, v0), faceCreate(v3, v2, v1), faceCreate(v3, v0, v2));
		for (let i = 0; i < 3; i++) {
			const j = (i + 1) % 3;
			halfEdgeSetTwin(faceGetEdge(faces[i + 1], 2), faceGetEdge(faces[0], j));
			halfEdgeSetTwin(faceGetEdge(faces[i + 1], 1), faceGetEdge(faces[j + 1], 0));
		}
	} else {
		faces.push(faceCreate(v0, v2, v1), faceCreate(v3, v0, v1), faceCreate(v3, v1, v2), faceCreate(v3, v2, v0));
		for (let i = 0; i < 3; i++) {
			const j = (i + 1) % 3;
			halfEdgeSetTwin(faceGetEdge(faces[i + 1], 2), faceGetEdge(faces[0], (3 - i) % 3));
			halfEdgeSetTwin(faceGetEdge(faces[i + 1], 0), faceGetEdge(faces[j + 1], 1));
		}
	}
	for (const face of faces) {
		faceCompute(face, state.points);
		state.faces.push(face);
	}
	for (const vertex of state.vertices) if (vertex !== v0 && vertex !== v1 && vertex !== v2 && vertex !== v3) {
		maxDistance = state.tolerance;
		let maxFace = null;
		for (const face of state.faces) {
			const distance = faceDistanceToPoint(face, state.points, vertex.index);
			if (distance > maxDistance) {
				maxDistance = distance;
				maxFace = face;
			}
		}
		if (maxFace !== null) addVertexToFace(state, vertex, maxFace);
	}
}
function addVertexToFace(state, vertex, face) {
	vertex.face = face;
	if (face.outside === null) vertexListAppend(state.assigned, vertex);
	else vertexListInsertBefore(state.assigned, face.outside, vertex);
	face.outside = vertex;
}
function removeVertexFromFace(state, vertex, face) {
	if (vertex === face.outside) if (vertex.next !== null && vertex.next.face === face) face.outside = vertex.next;
	else face.outside = null;
	vertexListRemove(state.assigned, vertex);
}
function removeAllVerticesFromFace(state, face) {
	if (face.outside !== null) {
		const start = face.outside;
		let end = face.outside;
		while (end.next !== null && end.next.face === face) end = end.next;
		vertexListRemoveSubList(state.assigned, start, end);
		start.prev = null;
		end.next = null;
		face.outside = null;
		return start;
	}
	return null;
}
function deleteFaceVertices(state, face, absorbingFace) {
	const faceVertices = removeAllVerticesFromFace(state, face);
	if (faceVertices !== null) if (absorbingFace === void 0) vertexListAppendChain(state.unassigned, faceVertices);
	else {
		let vertex = faceVertices;
		while (vertex !== null) {
			const nextVertex = vertex.next;
			if (faceDistanceToPoint(absorbingFace, state.points, vertex.index) > state.tolerance) addVertexToFace(state, vertex, absorbingFace);
			else vertexListAppend(state.unassigned, vertex);
			vertex = nextVertex;
		}
	}
}
function resolveUnassignedPoints(state, newFaces) {
	if (vertexListIsEmpty(state.unassigned)) return;
	let vertex = state.unassigned.head;
	while (vertex !== null) {
		const nextVertex = vertex.next;
		let maxDistance = state.tolerance;
		let maxFace = null;
		for (const face of newFaces) if (face.mark === VISIBLE) {
			const distance = faceDistanceToPoint(face, state.points, vertex.index);
			if (distance > maxDistance) {
				maxDistance = distance;
				maxFace = face;
			}
			if (maxDistance > 1e3 * state.tolerance) break;
		}
		if (maxFace !== null) addVertexToFace(state, vertex, maxFace);
		vertex = nextVertex;
	}
}
function nextVertexToAdd(state) {
	if (vertexListIsEmpty(state.assigned)) return null;
	let eyeVertex = null;
	let maxDistance = 0;
	const eyeFace = state.assigned.head.face;
	let vertex = eyeFace.outside;
	while (vertex !== null && vertex.face === eyeFace) {
		const distance = faceDistanceToPoint(eyeFace, state.points, vertex.index);
		if (distance > maxDistance) {
			maxDistance = distance;
			eyeVertex = vertex;
		}
		vertex = vertex.next;
	}
	return eyeVertex;
}
function computeHorizon(state, eyePoint, crossEdge, face, horizon) {
	deleteFaceVertices(state, face);
	face.mark = DELETED;
	let edge;
	if (crossEdge === null) edge = faceGetEdge(face, 0);
	else edge = crossEdge.next;
	const startEdge = edge;
	do {
		const twinEdge = edge.twin;
		const oppositeFace = twinEdge.face;
		if (oppositeFace.mark === VISIBLE) if (faceDistanceToPoint(oppositeFace, state.points, eyePoint) > state.tolerance) computeHorizon(state, eyePoint, twinEdge, oppositeFace, horizon);
		else horizon.push(edge);
		edge = edge.next;
	} while (edge !== startEdge);
}
function addAdjoiningFace(state, eyeVertex, horizonEdge) {
	const face = faceCreate(eyeVertex, halfEdgeTail(horizonEdge), halfEdgeHead(horizonEdge));
	faceCompute(face, state.points);
	state.faces.push(face);
	halfEdgeSetTwin(faceGetEdge(face, -1), horizonEdge.twin);
	return faceGetEdge(face, 0);
}
function addNewFaces(state, eyeVertex, horizon) {
	state.newFaces = [];
	let firstSideEdge = null;
	let previousSideEdge = null;
	for (const horizonEdge of horizon) {
		const sideEdge = addAdjoiningFace(state, eyeVertex, horizonEdge);
		if (firstSideEdge === null) firstSideEdge = sideEdge;
		else halfEdgeSetTwin(sideEdge.next, previousSideEdge);
		state.newFaces.push(sideEdge.face);
		previousSideEdge = sideEdge;
	}
	halfEdgeSetTwin(firstSideEdge.next, previousSideEdge);
}
function addVertexToHull(state, eyeVertex) {
	const horizon = [];
	vertexListClear(state.unassigned);
	removeVertexFromFace(state, eyeVertex, eyeVertex.face);
	computeHorizon(state, eyeVertex.index, null, eyeVertex.face, horizon);
	addNewFaces(state, eyeVertex, horizon);
	resolveUnassignedPoints(state, state.newFaces);
}
function reindexFaces(state) {
	const activeFaces = [];
	for (const face of state.faces) if (face.mark === VISIBLE) activeFaces.push(face);
	state.faces = activeFaces;
}
function computePlane(points, v0, v1, v2, outNormal) {
	const p0x = points[v0 * 3];
	const p0y = points[v0 * 3 + 1];
	const p0z = points[v0 * 3 + 2];
	const p1x = points[v1 * 3];
	const p1y = points[v1 * 3 + 1];
	const p1z = points[v1 * 3 + 2];
	const p2x = points[v2 * 3];
	const p2y = points[v2 * 3 + 1];
	const p2z = points[v2 * 3 + 2];
	const e1x = p1x - p0x;
	const e1y = p1y - p0y;
	const e1z = p1z - p0z;
	const e2x = p2x - p0x;
	const e2y = p2y - p0y;
	const e2z = p2z - p0z;
	const nx = e1y * e2z - e1z * e2y;
	const ny = e1z * e2x - e1x * e2z;
	const nz = e1x * e2y - e1y * e2x;
	const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
	if (len < EPSILON) {
		outNormal[0] = 0;
		outNormal[1] = 0;
		outNormal[2] = 1;
		return 0;
	}
	const invLen = 1 / len;
	outNormal[0] = nx * invLen;
	outNormal[1] = ny * invLen;
	outNormal[2] = nz * invLen;
	return -(outNormal[0] * p0x + outNormal[1] * p0y + outNormal[2] * p0z);
}
function distanceToPlane(points, idx, normal, offset) {
	const x = points[idx * 3];
	const y = points[idx * 3 + 1];
	const z = points[idx * 3 + 2];
	return normal[0] * x + normal[1] * y + normal[2] * z + offset;
}
function distanceToLineSquared(points, idx, v0, v1) {
	const px = points[idx * 3];
	const py = points[idx * 3 + 1];
	const pz = points[idx * 3 + 2];
	const ax = points[v0 * 3];
	const ay = points[v0 * 3 + 1];
	const az = points[v0 * 3 + 2];
	const bx = points[v1 * 3];
	const by = points[v1 * 3 + 1];
	const bz = points[v1 * 3 + 2];
	const apx = px - ax;
	const apy = py - ay;
	const apz = pz - az;
	const abx = bx - ax;
	const aby = by - ay;
	const abz = bz - az;
	const cx = apy * abz - apz * aby;
	const cy = apz * abx - apx * abz;
	const cz = apx * aby - apy * abx;
	const crossLenSq = cx * cx + cy * cy + cz * cz;
	const abLenSq = abx * abx + aby * aby + abz * abz;
	if (abLenSq < EPSILON) return apx * apx + apy * apy + apz * apz;
	return crossLenSq / abLenSq;
}
//#endregion
export { circumcircle, quickhull2, quickhull3 };

//# sourceMappingURL=geometry.js.map