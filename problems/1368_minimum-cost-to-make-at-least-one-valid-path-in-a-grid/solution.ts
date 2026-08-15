function minCost(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const di = [0, 0, 1, -1];
    const dj = [1, -1, 0, 0];
    const INF = Infinity;
    const dist: number[][] = [];
    for (let i = 0; i < m; i++) {
        dist.push(new Array(n).fill(INF));
    }
    dist[0][0] = 0;
    // 0-1 BFS as layered BFS: 0-cost moves stay in the current layer,
    // 1-cost moves go to the next layer.
    let cur: number[][] = [[0, 0]];
    let cost = 0;
    while (cur.length > 0) {
        const next: number[][] = [];
        while (cur.length > 0) {
            const [i, j] = cur.pop() as number[];
            for (let s = 1; s <= 4; s++) {
                const ni = i + di[s - 1];
                const nj = j + dj[s - 1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                    if (grid[i][j] === s) {
                        if (cost < dist[ni][nj]) {
                            dist[ni][nj] = cost;
                            cur.push([ni, nj]);
                        }
                    } else if (cost + 1 < dist[ni][nj]) {
                        dist[ni][nj] = cost + 1;
                        next.push([ni, nj]);
                    }
                }
            }
        }
        cur = next;
        cost++;
    }
    return dist[m - 1][n - 1];
}
