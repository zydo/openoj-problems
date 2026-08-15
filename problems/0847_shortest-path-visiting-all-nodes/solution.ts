function shortestPathLength(graph: number[][]): number {
    const n = graph.length;
    const full = (1 << n) - 1;
    const dist: number[][] = [];
    for (let i = 0; i < n; i++) {
        dist.push(new Array(1 << n).fill(-1));
    }
    const queue: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        dist[i][1 << i] = 0;
        queue.push([i, 1 << i]);
    }
    let head = 0;
    while (head < queue.length) {
        const [node, mask] = queue[head++];
        if (mask === full) {
            return dist[node][mask];
        }
        for (const nxt of graph[node]) {
            const nmask = mask | (1 << nxt);
            if (dist[nxt][nmask] === -1) {
                dist[nxt][nmask] = dist[node][mask] + 1;
                queue.push([nxt, nmask]);
            }
        }
    }
    return 0;
}
