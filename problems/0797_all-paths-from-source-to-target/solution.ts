function allPathsSourceTarget(graph: number[][]): number[][] {
    const n = graph.length;
    const target = n - 1;
    const paths: number[][] = [];
    const path: number[] = [0];

    function dfs(node: number): void {
        if (node === target) {
            paths.push(path.slice());
            return;
        }
        for (const nxt of graph[node]) {
            path.push(nxt);
            dfs(nxt);
            path.pop();
        }
    }

    dfs(0);
    return paths;
}
