/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
    const MOD = 1000000007;
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    const last = new Array(26).fill(-1);
    for (let i = 1; i <= n; i++) {
        const c = s.charCodeAt(i - 1) - 97;
        dp[i] = (dp[i - 1] * 2) % MOD;
        if (last[c] >= 0) {
            dp[i] = (dp[i] - dp[last[c]] + MOD) % MOD;
        }
        last[c] = i - 1;
    }
    return (dp[n] - 1 + MOD) % MOD;
};
