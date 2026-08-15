/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const squares = [];
    for (let i = 1; i * i <= n; i++) squares.push(i * i);
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (const s of squares) {
            if (s > i) break;
            if (dp[i - s] + 1 < dp[i]) dp[i] = dp[i - s] + 1;
        }
    }
    return dp[n];
};
