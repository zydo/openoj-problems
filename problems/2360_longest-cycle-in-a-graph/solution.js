/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
    const n = edges.length;
    const color = new Array(n).fill(0);
    const step = new Array(n).fill(0);
    let timer = 1;
    let best = -1;
    for (let start = 0; start < n; start++) {
        if (color[start] !== 0) continue;
        let node = start;
        const path = [];
        while (node !== -1 && color[node] === 0) {
            color[node] = 1;
            step[node] = timer;
            timer += 1;
            path.push(node);
            node = edges[node];
        }
        if (node !== -1 && color[node] === 1) {
            best = Math.max(best, timer - step[node]);
        }
        for (const v of path) color[v] = 2;
    }
    return best;
};
