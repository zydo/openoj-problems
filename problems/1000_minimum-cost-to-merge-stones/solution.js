/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function (stones, k) {
    const n = stones.length;
    if ((n - 1) % (k - 1) !== 0) {
        return -1;
    }
    const INF = Infinity;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + stones[i];
    }
    // dp[i][j][m]
    const dp = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(new Array(k + 1).fill(INF));
        }
        dp.push(row);
    }
    for (let i = 0; i < n; i++) {
        dp[i][i][1] = 0;
    }
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i + length - 1 < n; i++) {
            const j = i + length - 1;
            for (let m = 2; m <= k; m++) {
                for (let mid = i; mid < j; mid++) {
                    if (dp[i][mid][1] < INF && dp[mid + 1][j][m - 1] < INF) {
                        const cand = dp[i][mid][1] + dp[mid + 1][j][m - 1];
                        if (cand < dp[i][j][m]) {
                            dp[i][j][m] = cand;
                        }
                    }
                }
            }
            if (dp[i][j][k] < INF) {
                dp[i][j][1] = dp[i][j][k] + prefix[j + 1] - prefix[i];
            }
        }
    }
    return dp[0][n - 1][1] < INF ? dp[0][n - 1][1] : -1;
};
