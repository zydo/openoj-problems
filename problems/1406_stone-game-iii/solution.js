/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
    const n = stoneValue.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let take = 0;
        let best = -Infinity;
        for (let j = i; j < Math.min(i + 3, n); j++) {
            take += stoneValue[j];
            const cand = take - dp[j + 1];
            if (cand > best) {
                best = cand;
            }
        }
        dp[i] = best;
    }
    if (dp[0] > 0) {
        return "Alice";
    }
    if (dp[0] < 0) {
        return "Bob";
    }
    return "Tie";
};
