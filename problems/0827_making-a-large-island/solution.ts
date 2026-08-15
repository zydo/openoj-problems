function largestIsland(grid: number[][]): number {
    const n = grid.length;
    const label: number[][] = [];
    for (let i = 0; i < n; i++) {
        label.push(new Array(n).fill(0));
    }
    const sizes = new Map<number, number>();

    const flood = (si: number, sj: number, color: number): number => {
        let count = 0;
        const stack: Array<[number, number]> = [[si, sj]];
        label[si][sj] = color;
        while (stack.length > 0) {
            const [i, j] = stack.pop()!;
            count++;
            const dirs: Array<[number, number]> = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            for (const [di, dj] of dirs) {
                const ni = i + di;
                const nj = j + dj;
                if (
                    ni >= 0 &&
                    ni < n &&
                    nj >= 0 &&
                    nj < n &&
                    grid[ni][nj] === 1 &&
                    label[ni][nj] === 0
                ) {
                    label[ni][nj] = color;
                    stack.push([ni, nj]);
                }
            }
        }
        return count;
    };

    let color = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && label[i][j] === 0) {
                color++;
                sizes.set(color, flood(i, j, color));
            }
        }
    }

    let best = 0;
    for (const value of sizes.values()) {
        if (value > best) {
            best = value;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                const seen = new Set<number>();
                const dirs: Array<[number, number]> = [
                    [1, 0],
                    [-1, 0],
                    [0, 1],
                    [0, -1],
                ];
                for (const [di, dj] of dirs) {
                    const ni = i + di;
                    const nj = j + dj;
                    if (
                        ni >= 0 &&
                        ni < n &&
                        nj >= 0 &&
                        nj < n &&
                        label[ni][nj] !== 0
                    ) {
                        seen.add(label[ni][nj]);
                    }
                }
                let total = 1;
                for (const c of seen) {
                    total += sizes.get(c)!;
                }
                if (total > best) {
                    best = total;
                }
            }
        }
    }
    return best;
}
