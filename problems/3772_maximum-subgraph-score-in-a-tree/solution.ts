function maxSubgraphScore(
    n: number,
    edges: number[][],
    good: number[],
): number[] {
    const NEG = -1e18;
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const parent = new Array(n).fill(-1);
    const children: number[][] = Array.from({ length: n }, () => []);
    const order: number[] = [];
    const stack = [0];
    parent[0] = -2;
    while (stack.length > 0) {
        const u = stack.pop()!;
        order.push(u);
        for (const v of adj[u]) {
            if (v === parent[u]) continue;
            parent[v] = u;
            children[u].push(v);
            stack.push(v);
        }
    }

    const weight = good.map((g) => (g ? 1 : -1));

    const down = new Array(n).fill(0);
    for (let i = order.length - 1; i >= 0; i--) {
        const u = order[i];
        let s = weight[u];
        for (const c of children[u]) {
            if (down[c] > 0) s += down[c];
        }
        down[u] = s;
    }

    const up = new Array(n).fill(0);
    up[0] = NEG;
    const result = new Array(n).fill(0);
    for (const u of order) {
        let totalPos = 0;
        for (const c of children[u]) totalPos += Math.max(0, down[c]);
        for (const c of children[u]) {
            up[c] =
                weight[u] +
                (totalPos - Math.max(0, down[c])) +
                Math.max(0, up[u]);
        }
        result[u] = weight[u] + totalPos + Math.max(0, up[u]);
    }
    return result;
}
