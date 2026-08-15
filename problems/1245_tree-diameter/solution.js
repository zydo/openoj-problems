/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
    if (edges.length === 0) return 0;
    const n = edges.length + 1;
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const bfs = (src) => {
        const dist = new Array(n).fill(-1);
        dist[src] = 0;
        const queue = [src];
        let far = src;
        for (let head = 0; head < queue.length; head++) {
            const u = queue[head];
            for (const v of adj[u]) {
                if (dist[v] < 0) {
                    dist[v] = dist[u] + 1;
                    queue.push(v);
                    if (dist[v] > dist[far]) far = v;
                }
            }
        }
        return [far, dist[far]];
    };

    const [far] = bfs(0);
    const [, diameter] = bfs(far);
    return diameter;
};
