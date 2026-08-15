function longestIncreasingPath(matrix: number[][]): number {
    const m = matrix.length,
        n = matrix[0].length;
    const cells: number[][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) cells.push([matrix[i][j], i, j]);
    }
    cells.sort((a, b) => a[0] - b[0]);
    const dp: number[][] = Array.from({ length: m }, () =>
        new Array(n).fill(1),
    );
    let best = 1;
    for (const [v, i, j] of cells) {
        for (const [di, dj] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]) {
            const ni = i + di,
                nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] < v) {
                if (dp[ni][nj] + 1 > dp[i][j]) dp[i][j] = dp[ni][nj] + 1;
            }
        }
        if (dp[i][j] > best) best = dp[i][j];
    }
    return best;
}
