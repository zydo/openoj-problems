/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var minCost = function (n, edges, k) {
    const adj = Array.from({ length: n }, () => []);
    let maxW = 0;
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
        if (w > maxW) maxW = w;
    }

    const can = (money) => {
        const dist = new Array(n).fill(-1);
        dist[0] = 0;
        const queue = [0];
        for (let head = 0; head < queue.length; head++) {
            const u = queue[head];
            if (dist[u] >= k) continue;
            for (const [v, w] of adj[u]) {
                if (w <= money && dist[v] === -1) {
                    dist[v] = dist[u] + 1;
                    queue.push(v);
                }
            }
        }
        return dist[n - 1] !== -1 && dist[n - 1] <= k;
    };

    if (!can(maxW)) return -1;
    let lo = 0,
        hi = maxW;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (can(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
