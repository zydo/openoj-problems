/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
    const deltas = nums.map((x) => (x ^ k) - x);
    const positives = deltas.filter((d) => d > 0);
    let base =
        nums.reduce((a, b) => a + b, 0) + positives.reduce((a, b) => a + b, 0);
    if (positives.length % 2 === 0) {
        return base;
    }
    let best = null;
    if (positives.length > 0) {
        best = Math.min(...positives);
    }
    const nonPositives = deltas.filter((d) => d <= 0);
    if (nonPositives.length > 0) {
        const penalty = -Math.max(...nonPositives);
        if (best === null || penalty < best) {
            best = penalty;
        }
    }
    return base - best;
};
