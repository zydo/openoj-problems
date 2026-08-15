/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
    const MOD = 1000000007;
    const dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    for (let length = 1; length <= high; length++) {
        let ways = 0;
        if (length >= zero) {
            ways += dp[length - zero];
        }
        if (length >= one) {
            ways += dp[length - one];
        }
        dp[length] = ways % MOD;
    }
    let total = 0;
    for (let length = low; length <= high; length++) {
        total = (total + dp[length]) % MOD;
    }
    return total;
};
