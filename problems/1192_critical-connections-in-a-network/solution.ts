function criticalConnections(n: number, connections: number[][]): number[][] {
    const graph: number[][] = Array.from({ length: n }, () => []);
    for (const [a, b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const disc: number[] = new Array(n).fill(-1);
    const low: number[] = new Array(n).fill(0);
    let timer = 0;
    const bridges: number[][] = [];

    const dfs = (u: number, parent: number): void => {
        disc[u] = timer;
        low[u] = timer;
        timer++;
        for (const v of graph[u]) {
            if (disc[v] === -1) {
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) {
                    bridges.push([Math.min(u, v), Math.max(u, v)]);
                }
            } else if (v !== parent) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    };

    dfs(0, -1);
    bridges.sort((x, y) => (x[0] !== y[0] ? x[0] - y[0] : x[1] - y[1]));
    return bridges;
}
