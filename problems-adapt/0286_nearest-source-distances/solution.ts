function nearestSourceDistances(grid: number[][]): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    const INF = 2147483647;
    // Invert the search: enqueue every source cell at once and run one BFS outward,
    // rather than searching from each open cell.
    const queue: Array<[number, number]> = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) {
                queue.push([r, c]);
            }
        }
    }
    const dirs: Array<[number, number]> = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    let dist = 0;
    while (queue.length) {
        // Expand one whole layer per step: every distance-d cell is found
        // before any d+1 cell is labeled, which is what keeps distances
        // minimal (first reach = shortest path from a source).
        dist++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift()!;
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                // Still INF means unvisited; writing the distance doubles as
                // the visited mark, and sources and blocked cells never match INF so they
                // are never entered or overwritten.
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === INF) {
                    grid[nr][nc] = dist;
                    queue.push([nr, nc]);
                }
            }
        }
    }
    return grid;
}
