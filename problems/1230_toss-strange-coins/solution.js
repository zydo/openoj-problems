/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function (prob, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (const p of prob) {
        for (let c = target; c > 0; c--) {
            dp[c] = dp[c] * (1 - p) + dp[c - 1] * p;
        }
        dp[0] *= 1 - p;
    }
    return dp[target];
};
