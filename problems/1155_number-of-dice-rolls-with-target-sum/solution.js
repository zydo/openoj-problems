/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
    const MOD = 1000000007;
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let d = 0; d < n; d++) {
        const ndp = new Array(target + 1).fill(0);
        for (let t = 1; t <= target; t++) {
            let s = 0;
            const hi = Math.min(k, t);
            for (let f = 1; f <= hi; f++) {
                s += dp[t - f];
            }
            ndp[t] = s % MOD;
        }
        dp = ndp;
    }
    return dp[target];
};
