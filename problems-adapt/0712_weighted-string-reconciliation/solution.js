/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var reconcileDeletionCost = function (left, right) {
    const a = left,
        b = right;
    const la = a.length,
        lb = b.length;
    // dp[i][j] = least discard cost for reconciling the prefixes a[:i], b[:j].
    const dp = Array.from({ length: la + 1 }, () => new Array(lb + 1).fill(0));
    // Boundary states: an unmatched prefix must be discarded in full.
    for (let j = 1; j <= lb; j++) {
        dp[0][j] = dp[0][j - 1] + b.charCodeAt(j - 1);
    }
    for (let i = 1; i <= la; i++) {
        dp[i][0] = dp[i - 1][0] + a.charCodeAt(i - 1);
        for (let j = 1; j <= lb; j++) {
            if (a[i - 1] === b[j - 1]) {
                // Matching characters transfer the diagonal state unchanged.
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Different characters force one weighted discard.
                dp[i][j] = Math.min(dp[i - 1][j] + a.charCodeAt(i - 1), dp[i][j - 1] + b.charCodeAt(j - 1));
            }
        }
    }
    return dp[la][lb];
};
