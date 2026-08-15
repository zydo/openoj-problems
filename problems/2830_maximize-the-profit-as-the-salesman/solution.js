/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function (n, offers) {
    const byEnd = Array.from({ length: n }, () => []);
    for (const [start, end, gold] of offers) {
        byEnd[end].push([start, gold]);
    }
    const dp = new Array(n + 1).fill(0);
    for (let end = 0; end < n; end++) {
        dp[end + 1] = dp[end];
        for (const [start, gold] of byEnd[end]) {
            const cand = dp[start] + gold;
            if (cand > dp[end + 1]) {
                dp[end + 1] = cand;
            }
        }
    }
    return dp[n];
};
