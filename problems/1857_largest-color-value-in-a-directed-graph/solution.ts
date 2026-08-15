function largestPathValue(colors: string, edges: number[][]): number {
    const n = colors.length;
    const graph: number[][] = new Array(n);
    for (let i = 0; i < n; i++) graph[i] = [];
    const indeg = new Array(n).fill(0);
    for (const e of edges) {
        graph[e[0]].push(e[1]);
        indeg[e[1]]++;
    }
    const dp: number[][] = new Array(n);
    for (let i = 0; i < n; i++) dp[i] = new Array(26).fill(0);

    const queue: number[] = [];
    for (let i = 0; i < n; i++) if (indeg[i] === 0) queue.push(i);
    let head = 0,
        visited = 0,
        ans = 0;
    while (head < queue.length) {
        const u = queue[head++];
        visited++;
        dp[u][colors.charCodeAt(u) - 97]++;
        const du = dp[u];
        for (let c = 0; c < 26; c++) if (du[c] > ans) ans = du[c];
        for (const v of graph[u]) {
            const dv = dp[v];
            for (let c = 0; c < 26; c++) if (du[c] > dv[c]) dv[c] = du[c];
            if (--indeg[v] === 0) queue.push(v);
        }
    }
    return visited === n ? ans : -1;
}
