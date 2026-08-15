/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
    const m = mat.length,
        n = mat[0].length;
    const prefix = Array.from({ length: m + 1 }, () =>
        new Array(n + 1).fill(0),
    );
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            prefix[i + 1][j + 1] =
                prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j] + mat[i][j];
        }
    }
    const answer = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const r1 = Math.max(0, i - k),
                r2 = Math.min(m, i + k + 1);
            const c1 = Math.max(0, j - k),
                c2 = Math.min(n, j + k + 1);
            row.push(
                prefix[r2][c2] -
                    prefix[r1][c2] -
                    prefix[r2][c1] +
                    prefix[r1][c1],
            );
        }
        answer.push(row);
    }
    return answer;
};
