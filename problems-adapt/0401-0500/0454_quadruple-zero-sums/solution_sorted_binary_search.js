/**
 * @param {number[]} first
 * @param {number[]} second
 * @param {number[]} third
 * @param {number[]} fourth
 * @return {number}
 */
var countQuadrupleZeroSums = function (first, second, third, fourth) {
    // Same split as the hash-map version -- a+b+c+d = 0 iff a+b = -(c+d)
    // -- but the join is ordered ground rather than a table: materialise
    // both halves' pair sums and sort the right one.
    const left = [];
    for (const a of first) {
        for (const b of second) {
            left.push(a + b);
        }
    }
    const right = [];
    for (const c of third) {
        for (const d of fourth) {
            right.push(c + d);
        }
    }
    right.sort((x, y) => x - y);
    // Each left sum asks "how many right sums equal my negation?"; on a
    // sorted array a pair of binary searches brackets exactly that run.
    let total = 0;
    for (const sum of left) {
        total += upperBound(right, -sum) - lowerBound(right, -sum);
    }
    return total;
};

// First index whose value is >= wanted.
function lowerBound(values, wanted) {
    let low = 0;
    let high = values.length;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (values[mid] < wanted) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}

// First index whose value is > wanted.
function upperBound(values, wanted) {
    let low = 0;
    let high = values.length;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (values[mid] <= wanted) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
