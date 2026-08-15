/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
    const n = heights.length;
    let size = 1;
    while (size < n) {
        size <<= 1;
    }
    const seg = new Array(2 * size).fill(0);
    for (let i = 0; i < n; i++) {
        seg[size + i] = heights[i];
    }
    for (let i = size - 1; i >= 1; i--) {
        seg[i] = Math.max(seg[2 * i], seg[2 * i + 1]);
    }

    function findFirst(node, nl, nr, ql, qr, threshold) {
        if (nr <= ql || qr <= nl || seg[node] <= threshold) {
            return -1;
        }
        if (nr - nl === 1) {
            return nl;
        }
        const mid = (nl + nr) >> 1;
        const res = findFirst(2 * node, nl, mid, ql, qr, threshold);
        if (res !== -1) {
            return res;
        }
        return findFirst(2 * node + 1, mid, nr, ql, qr, threshold);
    }

    const result = [];
    for (const [a0, b0] of queries) {
        let a = a0;
        let b = b0;
        if (a > b) {
            const tmp = a;
            a = b;
            b = tmp;
        }
        if (a === b) {
            result.push(a);
        } else if (heights[a] < heights[b]) {
            result.push(b);
        } else {
            const threshold = heights[a] > heights[b] ? heights[a] : heights[b];
            result.push(findFirst(1, 0, size, b + 1, n, threshold));
        }
    }
    return result;
};
