/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (const s of strs) {
        let zeros = 0;
        for (const ch of s) if (ch === "0") zeros++;
        const ones = s.length - zeros;
        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                const cand = dp[i - zeros][j - ones] + 1;
                if (cand > dp[i][j]) dp[i][j] = cand;
            }
        }
    }
    return dp[m][n];
};
