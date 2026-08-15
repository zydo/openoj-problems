function minimumObstacles(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const INF = Infinity;
    const dist: number[][] = Array.from({ length: m }, () =>
        new Array(n).fill(INF),
    );
    dist[0][0] = 0;
    // Deque via two stacks (amortized O(1) push/pop on both ends).
    let left: [number, number][] = [];
    let right: [number, number][] = [];
    const pushLeft = (x: [number, number]) => left.push(x);
    const pushRight = (x: [number, number]) => right.push(x);
    const popLeft = (): [number, number] => {
        if (left.length === 0) {
            left = right.reverse();
            right = [];
        }
        return left.pop()!;
    };
    pushRight([0, 0]);
    const dirs: [number, number][] = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    while (left.length || right.length) {
        const [i, j] = popLeft();
        const d = dist[i][j];
        for (const [di, dj] of dirs) {
            const ni = i + di,
                nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                const nd = d + grid[ni][nj];
                if (nd < dist[ni][nj]) {
                    dist[ni][nj] = nd;
                    if (grid[ni][nj] === 0) pushLeft([ni, nj]);
                    else pushRight([ni, nj]);
                }
            }
        }
    }
    return dist[m - 1][n - 1];
}
