/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number[]}
 */
var maxHammingDistances = function (nums, m) {
    const size = 1 << m;
    const full = size - 1;
    const dist = new Array(size).fill(size + 1);
    const queue = [];
    let head = 0;
    for (const value of new Set(nums)) {
        dist[value] = 0;
        queue.push(value);
    }
    while (head < queue.length) {
        const v = queue[head++];
        const nd = dist[v] + 1;
        for (let bit = 0; bit < m; bit++) {
            const u = v ^ (1 << bit);
            if (dist[u] > nd) {
                dist[u] = nd;
                queue.push(u);
            }
        }
    }
    return nums.map((x) => m - dist[full ^ x]);
};
