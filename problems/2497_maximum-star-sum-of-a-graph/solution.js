/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
    const neighbors = vals.map(() => []);
    for (const [a, b] of edges) {
        neighbors[a].push(vals[b]);
        neighbors[b].push(vals[a]);
    }
    let best = -Infinity;
    for (const v of vals) {
        if (v > best) best = v;
    }
    for (let i = 0; i < vals.length; i++) {
        const adjacent = neighbors[i].sort((x, y) => y - x);
        let total = vals[i];
        const take = Math.min(k, adjacent.length);
        for (let j = 0; j < take; j++) {
            if (adjacent[j] <= 0) break;
            total += adjacent[j];
        }
        if (total > best) best = total;
    }
    return best;
};
