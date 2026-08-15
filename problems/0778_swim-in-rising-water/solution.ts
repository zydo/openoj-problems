function swimInWater(grid: number[][]): number {
    const n = grid.length;
    const INF = Infinity;
    const dist: number[][] = Array.from({ length: n }, () =>
        new Array(n).fill(INF),
    );
    dist[0][0] = grid[0][0];
    const heap: [number, number, number][] = [[grid[0][0], 0, 0]];
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    while (heap.length > 0) {
        const [t, r, c] = heap.pop()!;
        if (r === n - 1 && c === n - 1) return t;
        if (t > dist[r][c]) continue;
        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                const nt = Math.max(t, grid[nr][nc]);
                if (nt < dist[nr][nc]) {
                    dist[nr][nc] = nt;
                    heap.push([nt, nr, nc]);
                }
            }
        }
        heap.sort((a, b) => b[0] - a[0]);
    }
    return dist[n - 1][n - 1];
}
