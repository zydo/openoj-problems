function cellsDetachedByRemovals(grid: number[][], removals: number[][]): number[] {
    const m = grid.length,
        n = grid[0].length;
    const top = m * n;
    const parent: number[] = new Array(top + 1);
    for (let i = 0; i <= top; i++) parent[i] = i;
    const size: number[] = new Array(top + 1).fill(1);
    size[top] = 0;

    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    const union = (a: number, b: number): void => {
        let ra = find(a),
            rb = find(b);
        if (ra === rb) return;
        if (size[ra] < size[rb]) {
            const t = ra;
            ra = rb;
            rb = t;
        }
        parent[rb] = ra;
        size[ra] += size[rb];
    };
    const idx = (r: number, c: number): number => r * n + c;

    // Final grid after all removals are applied.
    const g: number[][] = grid.map((row) => row.slice());
    for (const [r, c] of removals) g[r][c] = 0;

    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    // Union all remaining bricks with each other and with the virtual top.
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (g[r][c] === 1) {
                if (r === 0) union(idx(r, c), top);
                if (r + 1 < m && g[r + 1][c] === 1) union(idx(r, c), idx(r + 1, c));
                if (c + 1 < n && g[r][c + 1] === 1) union(idx(r, c), idx(r, c + 1));
            }
        }
    }

    const res: number[] = new Array(removals.length).fill(0);
    for (let k = removals.length - 1; k >= 0; k--) {
        const r = removals[k][0],
            c = removals[k][1];
        if (grid[r][c] !== 1) continue;
        const before = size[find(top)];
        g[r][c] = 1;
        if (r === 0) union(idx(r, c), top);
        for (const [dr, dc] of dirs) {
            const nr = r + dr,
                nc = c + dc;
            if (0 <= nr && nr < m && 0 <= nc && nc < n && g[nr][nc] === 1) {
                union(idx(r, c), idx(nr, nc));
            }
        }
        const after = size[find(top)];
        res[k] = Math.max(0, after - before - 1);
    }
    return res;
}
