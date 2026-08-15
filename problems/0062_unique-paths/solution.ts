function uniquePaths(m: number, n: number): number {
    const row: number[] = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            row[j] += row[j - 1];
        }
    }
    return row[n - 1];
}
