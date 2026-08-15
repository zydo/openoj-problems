/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    const MOD = 1000000007;
    if (maxMove === 0) return 0;
    let prev = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let step = 0; step < maxMove; step++) {
        const cur = Array.from({ length: m }, () => new Array(n).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let total = 0;
                if (i + 1 >= m) total += 1;
                else total += prev[i + 1][j];
                if (i - 1 < 0) total += 1;
                else total += prev[i - 1][j];
                if (j + 1 >= n) total += 1;
                else total += prev[i][j + 1];
                if (j - 1 < 0) total += 1;
                else total += prev[i][j - 1];
                cur[i][j] = total % MOD;
            }
        }
        prev = cur;
    }
    return prev[startRow][startColumn] % MOD;
};
