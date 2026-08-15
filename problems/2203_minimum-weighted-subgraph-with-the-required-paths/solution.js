/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} src1
 * @param {number} src2
 * @param {number} dest
 * @return {number}
 */
var minimumWeight = function (n, edges, src1, src2, dest) {
    const dijkstra = (adj, src) => {
        const INF = Infinity;
        const dist = new Array(n).fill(INF);
        dist[src] = 0;
        // binary min-heap of [dist, node]
        const heap = [[0, src]];
        const push = (item) => {
            let i = heap.length;
            heap.push(item);
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (heap[p][0] <= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };
        const pop = () => {
            const top = heap[0];
            const last = heap.pop();
            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;
                for (;;) {
                    const l = 2 * i + 1,
                        r = 2 * i + 2;
                    let m = i;
                    if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
                    if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
                    if (m === i) break;
                    [heap[m], heap[i]] = [heap[i], heap[m]];
                    i = m;
                }
            }
            return top;
        };
        while (heap.length > 0) {
            const [d, u] = pop();
            if (d > dist[u]) continue;
            for (const [v, w] of adj[u]) {
                const nd = d + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                    push([nd, v]);
                }
            }
        }
        return dist;
    };

    const adj = Array.from({ length: n }, () => []);
    const radj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        radj[v].push([u, w]);
    }
    const d1 = dijkstra(adj, src1);
    const d2 = dijkstra(adj, src2);
    const dd = dijkstra(radj, dest);
    let best = Infinity;
    for (let v = 0; v < n; v++) {
        if (dd[v] !== Infinity) {
            const total = d1[v] + d2[v] + dd[v];
            if (total < best) best = total;
        }
    }
    return best === Infinity ? -1 : best;
};
