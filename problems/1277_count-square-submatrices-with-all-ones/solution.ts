function countSquares(matrix: number[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;
    let total = 0;
    let prev = new Array<number>(n).fill(0);
    for (let i = 0; i < m; i++) {
        const cur = new Array<number>(n).fill(0);
        for (let j = 0; j < n; j++) {
            if (!matrix[i][j]) continue;
            if (i === 0 || j === 0) {
                cur[j] = 1;
            } else {
                cur[j] = Math.min(prev[j], cur[j - 1], prev[j - 1]) + 1;
            }
            total += cur[j];
        }
        prev = cur;
    }
    return total;
}
