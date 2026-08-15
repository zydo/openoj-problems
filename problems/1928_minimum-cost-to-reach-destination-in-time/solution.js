/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
var minCost = function (maxTime, edges, passingFees) {
    const n = passingFees.length;
    const INF = Infinity;
    const layers = new Array(maxTime + 1);
    const start = new Array(n).fill(INF);
    start[0] = passingFees[0];
    layers[0] = start;
    for (let t = 1; t <= maxTime; t++) {
        const cur = new Array(n).fill(INF);
        for (const [x, y, dt] of edges) {
            if (dt > t) continue;
            const prev = layers[t - dt];
            if (prev[x] + passingFees[y] < cur[y])
                cur[y] = prev[x] + passingFees[y];
            if (prev[y] + passingFees[x] < cur[x])
                cur[x] = prev[y] + passingFees[x];
        }
        layers[t] = cur;
    }
    let best = INF;
    for (const layer of layers) {
        if (layer[n - 1] < best) best = layer[n - 1];
    }
    return best < INF ? best : -1;
};
