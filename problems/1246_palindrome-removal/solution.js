/**
 * @param {number[]} arr
 * @return {number}
 */
var minimumMoves = function (arr) {
    const n = arr.length;
    if (n === 0) return 0;

    const dp = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) dp[i][i] = 1;
    for (let i = 0; i + 1 < n; i++)
        dp[i][i + 1] = arr[i] === arr[i + 1] ? 1 : 2;

    for (let length = 3; length <= n; length++) {
        for (let i = 0; i + length <= n; i++) {
            const j = i + length - 1;
            let best = 1 + dp[i + 1][j];
            for (let k = i; k < j; k++) {
                const candidate = dp[i][k] + dp[k + 1][j];
                if (candidate < best) best = candidate;
            }
            if (arr[i] === arr[j] && dp[i + 1][j - 1] < best)
                best = dp[i + 1][j - 1];
            dp[i][j] = best;
        }
    }
    return dp[0][n - 1];
};
