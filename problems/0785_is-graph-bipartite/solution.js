/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const n = graph.length;
    const color = new Array(n).fill(0);
    for (let start = 0; start < n; start++) {
        if (color[start] !== 0) continue;
        color[start] = 1;
        const queue = [start];
        let head = 0;
        while (head < queue.length) {
            const u = queue[head++];
            for (const v of graph[u]) {
                if (color[v] === 0) {
                    color[v] = -color[u];
                    queue.push(v);
                } else if (color[v] === color[u]) {
                    return false;
                }
            }
        }
    }
    return true;
};
