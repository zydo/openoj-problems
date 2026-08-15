/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {string}
 */
var findSpecialNodes = function (n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    function bfs(src) {
        const dist = new Array(n).fill(-1);
        dist[src] = 0;
        const queue = [src];
        let head = 0;
        let far = 0;
        while (head < queue.length) {
            const u = queue[head++];
            for (const v of adj[u]) {
                if (dist[v] === -1) {
                    dist[v] = dist[u] + 1;
                    if (dist[v] > far) far = dist[v];
                    queue.push(v);
                }
            }
        }
        const set = new Set();
        for (let i = 0; i < n; i++) {
            if (dist[i] === far) set.add(i);
        }
        return set;
    }

    const oneEnd = bfs(0);
    const first = oneEnd.values().next().value;
    const otherEnd = bfs(first);
    let res = "";
    for (let i = 0; i < n; i++) {
        res += oneEnd.has(i) || otherEnd.has(i) ? "1" : "0";
    }
    return res;
};
