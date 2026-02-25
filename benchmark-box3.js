#!/usr/bin/env node

/**
 * Benchmark comparing Box3 representations:
 * 1. [Vec3, Vec3] - two nested arrays
 * 2. [minX, minY, minZ, maxX, maxY, maxZ] - flat array of 6 numbers
 */

// ===== [Vec3, Vec3] Implementation =====
const Box3Nested = {
    create: () => [
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
    ],
    
    set: (out, min, max) => {
        out[0][0] = min[0];
        out[0][1] = min[1];
        out[0][2] = min[2];
        out[1][0] = max[0];
        out[1][1] = max[1];
        out[1][2] = max[2];
        return out;
    },
    
    clone: (box) => [
        [box[0][0], box[0][1], box[0][2]],
        [box[1][0], box[1][1], box[1][2]]
    ],
    
    copy: (out, box) => {
        out[0][0] = box[0][0];
        out[0][1] = box[0][1];
        out[0][2] = box[0][2];
        out[1][0] = box[1][0];
        out[1][1] = box[1][1];
        out[1][2] = box[1][2];
        return out;
    },
    
    expandByPoint: (out, box, point) => {
        out[0][0] = Math.min(box[0][0], point[0]);
        out[0][1] = Math.min(box[0][1], point[1]);
        out[0][2] = Math.min(box[0][2], point[2]);
        out[1][0] = Math.max(box[1][0], point[0]);
        out[1][1] = Math.max(box[1][1], point[1]);
        out[1][2] = Math.max(box[1][2], point[2]);
        return out;
    },
    
    expandByMargin: (out, box, margin) => {
        out[0][0] = box[0][0] - margin;
        out[0][1] = box[0][1] - margin;
        out[0][2] = box[0][2] - margin;
        out[1][0] = box[1][0] + margin;
        out[1][1] = box[1][1] + margin;
        out[1][2] = box[1][2] + margin;
        return out;
    },
    
    union: (out, boxA, boxB) => {
        out[0][0] = Math.min(boxA[0][0], boxB[0][0]);
        out[0][1] = Math.min(boxA[0][1], boxB[0][1]);
        out[0][2] = Math.min(boxA[0][2], boxB[0][2]);
        out[1][0] = Math.max(boxA[1][0], boxB[1][0]);
        out[1][1] = Math.max(boxA[1][1], boxB[1][1]);
        out[1][2] = Math.max(boxA[1][2], boxB[1][2]);
        return out;
    },
    
    center: (out, box) => {
        out[0] = (box[0][0] + box[1][0]) * 0.5;
        out[1] = (box[0][1] + box[1][1]) * 0.5;
        out[2] = (box[0][2] + box[1][2]) * 0.5;
        return out;
    },
    
    size: (out, box) => {
        out[0] = box[1][0] - box[0][0];
        out[1] = box[1][1] - box[0][1];
        out[2] = box[1][2] - box[0][2];
        return out;
    },
    
    surfaceArea: (box) => {
        const width = box[1][0] - box[0][0];
        const height = box[1][1] - box[0][1];
        const depth = box[1][2] - box[0][2];
        return 2 * (width * height + width * depth + height * depth);
    },
    
    contains: (box, point) => {
        return (
            point[0] >= box[0][0] && point[0] <= box[1][0] &&
            point[1] >= box[0][1] && point[1] <= box[1][1] &&
            point[2] >= box[0][2] && point[2] <= box[1][2]
        );
    },
    
    intersects: (boxA, boxB) => {
        return (
            boxA[0][0] <= boxB[1][0] && boxA[1][0] >= boxB[0][0] &&
            boxA[0][1] <= boxB[1][1] && boxA[1][1] >= boxB[0][1] &&
            boxA[0][2] <= boxB[1][2] && boxA[1][2] >= boxB[0][2]
        );
    }
};

// ===== Flat [6 numbers] Implementation =====
const Box3Flat = {
    create: () => [
        Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY,
        Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY
    ],
    
    set: (out, min, max) => {
        out[0] = min[0];
        out[1] = min[1];
        out[2] = min[2];
        out[3] = max[0];
        out[4] = max[1];
        out[5] = max[2];
        return out;
    },
    
    clone: (box) => [
        box[0], box[1], box[2],
        box[3], box[4], box[5]
    ],
    
    copy: (out, box) => {
        out[0] = box[0];
        out[1] = box[1];
        out[2] = box[2];
        out[3] = box[3];
        out[4] = box[4];
        out[5] = box[5];
        return out;
    },
    
    expandByPoint: (out, box, point) => {
        out[0] = Math.min(box[0], point[0]);
        out[1] = Math.min(box[1], point[1]);
        out[2] = Math.min(box[2], point[2]);
        out[3] = Math.max(box[3], point[0]);
        out[4] = Math.max(box[4], point[1]);
        out[5] = Math.max(box[5], point[2]);
        return out;
    },
    
    expandByMargin: (out, box, margin) => {
        out[0] = box[0] - margin;
        out[1] = box[1] - margin;
        out[2] = box[2] - margin;
        out[3] = box[3] + margin;
        out[4] = box[4] + margin;
        out[5] = box[5] + margin;
        return out;
    },
    
    union: (out, boxA, boxB) => {
        out[0] = Math.min(boxA[0], boxB[0]);
        out[1] = Math.min(boxA[1], boxB[1]);
        out[2] = Math.min(boxA[2], boxB[2]);
        out[3] = Math.max(boxA[3], boxB[3]);
        out[4] = Math.max(boxA[4], boxB[4]);
        out[5] = Math.max(boxA[5], boxB[5]);
        return out;
    },
    
    center: (out, box) => {
        out[0] = (box[0] + box[3]) * 0.5;
        out[1] = (box[1] + box[4]) * 0.5;
        out[2] = (box[2] + box[5]) * 0.5;
        return out;
    },
    
    size: (out, box) => {
        out[0] = box[3] - box[0];
        out[1] = box[4] - box[1];
        out[2] = box[5] - box[2];
        return out;
    },
    
    surfaceArea: (box) => {
        const width = box[3] - box[0];
        const height = box[4] - box[1];
        const depth = box[5] - box[2];
        return 2 * (width * height + width * depth + height * depth);
    },
    
    contains: (box, point) => {
        return (
            point[0] >= box[0] && point[0] <= box[3] &&
            point[1] >= box[1] && point[1] <= box[4] &&
            point[2] >= box[2] && point[2] <= box[5]
        );
    },
    
    intersects: (boxA, boxB) => {
        return (
            boxA[0] <= boxB[3] && boxA[3] >= boxB[0] &&
            boxA[1] <= boxB[4] && boxA[4] >= boxB[1] &&
            boxA[2] <= boxB[5] && boxA[5] >= boxB[2]
        );
    }
};

// ===== Benchmark Infrastructure =====
function benchmark(name, fn, iterations = 1000000) {
    // Warmup
    for (let i = 0; i < 100; i++) fn();
    
    // Actual benchmark
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    const end = performance.now();
    const duration = end - start;
    
    return {
        name,
        duration,
        iterations,
        opsPerSecond: (iterations / duration) * 1000,
        timePerOp: (duration / iterations) * 1000 // microseconds
    };
}

function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
}

function runBenchmarks() {
    console.log('Box3 Representation Benchmark');
    console.log('=' .repeat(80));
    console.log('Comparing: [Vec3, Vec3] vs [minX, minY, minZ, maxX, maxY, maxZ]');
    console.log('=' .repeat(80));
    console.log();

    const iterations = 1000000;
    const results = [];

    // Test data
    const point = [1.5, 2.5, 3.5];
    const vec3Out = [0, 0, 0];
    
    // ===== Create =====
    console.log('1. Create');
    console.log('-'.repeat(80));
    
    const createNested = benchmark('[Vec3, Vec3] create', () => {
        Box3Nested.create();
    }, iterations);
    
    const createFlat = benchmark('Flat Array create', () => {
        Box3Flat.create();
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${createNested.duration.toFixed(2)}ms (${formatNumber(createNested.opsPerSecond)} ops/sec, ${createNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${createFlat.duration.toFixed(2)}ms (${formatNumber(createFlat.opsPerSecond)} ops/sec, ${createFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${createFlat.duration < createNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(createNested.duration - createFlat.duration) / Math.max(createNested.duration, createFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'create', nested: createNested, flat: createFlat });
    
    // ===== Clone =====
    console.log('2. Clone');
    console.log('-'.repeat(80));
    
    const boxNested = Box3Nested.create();
    Box3Nested.set(boxNested, [1, 2, 3], [4, 5, 6]);
    
    const boxFlat = Box3Flat.create();
    Box3Flat.set(boxFlat, [1, 2, 3], [4, 5, 6]);
    
    const cloneNested = benchmark('[Vec3, Vec3] clone', () => {
        Box3Nested.clone(boxNested);
    }, iterations);
    
    const cloneFlat = benchmark('Flat Array clone', () => {
        Box3Flat.clone(boxFlat);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${cloneNested.duration.toFixed(2)}ms (${formatNumber(cloneNested.opsPerSecond)} ops/sec, ${cloneNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${cloneFlat.duration.toFixed(2)}ms (${formatNumber(cloneFlat.opsPerSecond)} ops/sec, ${cloneFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${cloneFlat.duration < cloneNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(cloneNested.duration - cloneFlat.duration) / Math.max(cloneNested.duration, cloneFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'clone', nested: cloneNested, flat: cloneFlat });
    
    // ===== Copy =====
    console.log('3. Copy');
    console.log('-'.repeat(80));
    
    const outNested = Box3Nested.create();
    const outFlat = Box3Flat.create();
    
    const copyNested = benchmark('[Vec3, Vec3] copy', () => {
        Box3Nested.copy(outNested, boxNested);
    }, iterations);
    
    const copyFlat = benchmark('Flat Array copy', () => {
        Box3Flat.copy(outFlat, boxFlat);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${copyNested.duration.toFixed(2)}ms (${formatNumber(copyNested.opsPerSecond)} ops/sec, ${copyNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${copyFlat.duration.toFixed(2)}ms (${formatNumber(copyFlat.opsPerSecond)} ops/sec, ${copyFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${copyFlat.duration < copyNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(copyNested.duration - copyFlat.duration) / Math.max(copyNested.duration, copyFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'copy', nested: copyNested, flat: copyFlat });
    
    // ===== ExpandByPoint =====
    console.log('4. ExpandByPoint');
    console.log('-'.repeat(80));
    
    const expandNested = benchmark('[Vec3, Vec3] expandByPoint', () => {
        Box3Nested.expandByPoint(outNested, boxNested, point);
    }, iterations);
    
    const expandFlat = benchmark('Flat Array expandByPoint', () => {
        Box3Flat.expandByPoint(outFlat, boxFlat, point);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${expandNested.duration.toFixed(2)}ms (${formatNumber(expandNested.opsPerSecond)} ops/sec, ${expandNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${expandFlat.duration.toFixed(2)}ms (${formatNumber(expandFlat.opsPerSecond)} ops/sec, ${expandFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${expandFlat.duration < expandNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(expandNested.duration - expandFlat.duration) / Math.max(expandNested.duration, expandFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'expandByPoint', nested: expandNested, flat: expandFlat });
    
    // ===== Union =====
    console.log('5. Union');
    console.log('-'.repeat(80));
    
    const boxNested2 = Box3Nested.create();
    Box3Nested.set(boxNested2, [0, 0, 0], [3, 3, 3]);
    
    const boxFlat2 = Box3Flat.create();
    Box3Flat.set(boxFlat2, [0, 0, 0], [3, 3, 3]);
    
    const unionNested = benchmark('[Vec3, Vec3] union', () => {
        Box3Nested.union(outNested, boxNested, boxNested2);
    }, iterations);
    
    const unionFlat = benchmark('Flat Array union', () => {
        Box3Flat.union(outFlat, boxFlat, boxFlat2);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${unionNested.duration.toFixed(2)}ms (${formatNumber(unionNested.opsPerSecond)} ops/sec, ${unionNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${unionFlat.duration.toFixed(2)}ms (${formatNumber(unionFlat.opsPerSecond)} ops/sec, ${unionFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${unionFlat.duration < unionNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(unionNested.duration - unionFlat.duration) / Math.max(unionNested.duration, unionFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'union', nested: unionNested, flat: unionFlat });
    
    // ===== Center =====
    console.log('6. Center');
    console.log('-'.repeat(80));
    
    const centerNested = benchmark('[Vec3, Vec3] center', () => {
        Box3Nested.center(vec3Out, boxNested);
    }, iterations);
    
    const centerFlat = benchmark('Flat Array center', () => {
        Box3Flat.center(vec3Out, boxFlat);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${centerNested.duration.toFixed(2)}ms (${formatNumber(centerNested.opsPerSecond)} ops/sec, ${centerNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${centerFlat.duration.toFixed(2)}ms (${formatNumber(centerFlat.opsPerSecond)} ops/sec, ${centerFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${centerFlat.duration < centerNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(centerNested.duration - centerFlat.duration) / Math.max(centerNested.duration, centerFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'center', nested: centerNested, flat: centerFlat });
    
    // ===== Size =====
    console.log('7. Size');
    console.log('-'.repeat(80));
    
    const sizeNested = benchmark('[Vec3, Vec3] size', () => {
        Box3Nested.size(vec3Out, boxNested);
    }, iterations);
    
    const sizeFlat = benchmark('Flat Array size', () => {
        Box3Flat.size(vec3Out, boxFlat);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${sizeNested.duration.toFixed(2)}ms (${formatNumber(sizeNested.opsPerSecond)} ops/sec, ${sizeNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${sizeFlat.duration.toFixed(2)}ms (${formatNumber(sizeFlat.opsPerSecond)} ops/sec, ${sizeFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${sizeFlat.duration < sizeNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(sizeNested.duration - sizeFlat.duration) / Math.max(sizeNested.duration, sizeFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'size', nested: sizeNested, flat: sizeFlat });
    
    // ===== Surface Area =====
    console.log('8. Surface Area');
    console.log('-'.repeat(80));
    
    const surfaceNested = benchmark('[Vec3, Vec3] surfaceArea', () => {
        Box3Nested.surfaceArea(boxNested);
    }, iterations);
    
    const surfaceFlat = benchmark('Flat Array surfaceArea', () => {
        Box3Flat.surfaceArea(boxFlat);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${surfaceNested.duration.toFixed(2)}ms (${formatNumber(surfaceNested.opsPerSecond)} ops/sec, ${surfaceNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${surfaceFlat.duration.toFixed(2)}ms (${formatNumber(surfaceFlat.opsPerSecond)} ops/sec, ${surfaceFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${surfaceFlat.duration < surfaceNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(surfaceNested.duration - surfaceFlat.duration) / Math.max(surfaceNested.duration, surfaceFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'surfaceArea', nested: surfaceNested, flat: surfaceFlat });
    
    // ===== Contains Point =====
    console.log('9. Contains Point');
    console.log('-'.repeat(80));
    
    const containsNested = benchmark('[Vec3, Vec3] contains', () => {
        Box3Nested.contains(boxNested, point);
    }, iterations);
    
    const containsFlat = benchmark('Flat Array contains', () => {
        Box3Flat.contains(boxFlat, point);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${containsNested.duration.toFixed(2)}ms (${formatNumber(containsNested.opsPerSecond)} ops/sec, ${containsNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${containsFlat.duration.toFixed(2)}ms (${formatNumber(containsFlat.opsPerSecond)} ops/sec, ${containsFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${containsFlat.duration < containsNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(containsNested.duration - containsFlat.duration) / Math.max(containsNested.duration, containsFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'contains', nested: containsNested, flat: containsFlat });
    
    // ===== Intersects =====
    console.log('10. Intersects');
    console.log('-'.repeat(80));
    
    const intersectsNested = benchmark('[Vec3, Vec3] intersects', () => {
        Box3Nested.intersects(boxNested, boxNested2);
    }, iterations);
    
    const intersectsFlat = benchmark('Flat Array intersects', () => {
        Box3Flat.intersects(boxFlat, boxFlat2);
    }, iterations);
    
    console.log(`  [Vec3, Vec3]: ${intersectsNested.duration.toFixed(2)}ms (${formatNumber(intersectsNested.opsPerSecond)} ops/sec, ${intersectsNested.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Flat Array:   ${intersectsFlat.duration.toFixed(2)}ms (${formatNumber(intersectsFlat.opsPerSecond)} ops/sec, ${intersectsFlat.timePerOp.toFixed(4)}µs/op)`);
    console.log(`  Winner: ${intersectsFlat.duration < intersectsNested.duration ? 'Flat' : 'Nested'} (${(Math.abs(intersectsNested.duration - intersectsFlat.duration) / Math.max(intersectsNested.duration, intersectsFlat.duration) * 100).toFixed(1)}% faster)`);
    console.log();
    
    results.push({ op: 'intersects', nested: intersectsNested, flat: intersectsFlat });
    
    // ===== Summary =====
    console.log();
    console.log('SUMMARY');
    console.log('=' .repeat(80));
    
    let nestedWins = 0;
    let flatWins = 0;
    
    for (const result of results) {
        if (result.nested.duration < result.flat.duration) {
            nestedWins++;
        } else {
            flatWins++;
        }
    }
    
    console.log(`[Vec3, Vec3] won ${nestedWins}/${results.length} operations`);
    console.log(`Flat Array won ${flatWins}/${results.length} operations`);
    console.log();
    
    // Calculate average speedup
    let totalSpeedup = 0;
    for (const result of results) {
        const speedup = result.nested.duration / result.flat.duration;
        totalSpeedup += speedup;
    }
    const avgSpeedup = totalSpeedup / results.length;
    
    if (avgSpeedup > 1) {
        console.log(`On average, Flat Array is ${((avgSpeedup - 1) * 100).toFixed(1)}% faster`);
    } else {
        console.log(`On average, [Vec3, Vec3] is ${((1 / avgSpeedup - 1) * 100).toFixed(1)}% faster`);
    }
    
    console.log();
    console.log('DETAILED RESULTS');
    console.log('=' .repeat(80));
    console.log('Operation'.padEnd(20) + ' | ' + '[Vec3, Vec3]'.padEnd(20) + ' | ' + 'Flat Array'.padEnd(20) + ' | Winner');
    console.log('-'.repeat(80));
    
    for (const result of results) {
        const nestedTime = result.nested.timePerOp.toFixed(4);
        const flatTime = result.flat.timePerOp.toFixed(4);
        const winner = result.nested.duration < result.flat.duration ? '[Vec3, Vec3]' : 'Flat';
        const speedup = result.nested.duration < result.flat.duration 
            ? (result.flat.duration / result.nested.duration - 1) * 100
            : (result.nested.duration / result.flat.duration - 1) * 100;
        
        console.log(
            result.op.padEnd(20) + ' | ' +
            `${nestedTime}µs`.padEnd(20) + ' | ' +
            `${flatTime}µs`.padEnd(20) + ' | ' +
            `${winner} (+${speedup.toFixed(1)}%)`
        );
    }
}

// Run the benchmarks
runBenchmarks();
