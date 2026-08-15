function maxSideLength(mat: number[][], threshold: number): number {
    const m = mat.length;
    const n = mat[0].length;
    const prefix: number[][] = Array.from({ length: m + 1 }, () =>
        new Array(n + 1).fill(0),
    );
    for (let i = 0; i < m; i++) {
        const row = mat[i];
        const prow = prefix[i];
        const crow = prefix[i + 1];
        for (let j = 0; j < n; j++) {
            crow[j + 1] = crow[j] + prow[j + 1] - prow[j] + row[j];
        }
    }

    const squareSum = (i: number, j: number, k: number): number => {
        const p = prefix;
        return p[i + k][j + k] - p[i][j + k] - p[i + k][j] + p[i][j];
    };

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            while (
                i + ans < m &&
                j + ans < n &&
                squareSum(i, j, ans + 1) <= threshold
            ) {
                ans += 1;
            }
        }
    }
    return ans;
}
