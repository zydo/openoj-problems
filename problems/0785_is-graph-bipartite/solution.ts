function isBipartite(graph: number[][]): boolean {
    const n = graph.length;
    // 0 = uncolored, else +1/-1: bipartite iff a proper 2-coloring
    // exists, with each node's color forced by its distance parity
    // from the component root.
    const color = new Array<number>(n).fill(0);
    // The graph may be disconnected: start a fresh BFS from every
    // still-uncolored node.
    for (let start = 0; start < n; start++) {
        if (color[start] !== 0) continue;
        color[start] = 1;
        const queue = [start];
        let head = 0;
        while (head < queue.length) {
            const u = queue[head++];
            for (const v of graph[u]) {
                // Uncolored neighbor: take the opposite color.
                if (color[v] === 0) {
                    color[v] = -color[u];
                    queue.push(v);
                } else if (color[v] === color[u]) {
                    // Same-color edge = odd cycle, the sole
                    // obstruction to bipartiteness.
                    return false;
                }
            }
        }
    }
    // Every component colored cleanly: the two color classes are
    // the required partition.
    return true;
}
