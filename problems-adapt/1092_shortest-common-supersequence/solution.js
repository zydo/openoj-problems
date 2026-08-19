/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var shortestCommonSupersequence = function (s, t) {
    const n = s.length;
    const m = t.length;
    // dp[i][j] = length of the LCS of s[i:] and t[j:].
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (s[i] === t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    const parts = [];
    let i = 0;
    let j = 0;
    while (i < n && j < m) {
        if (s[i] === t[j]) {
            parts.push(s[i]);
            i += 1;
            j += 1;
        } else if (dp[i + 1][j] >= dp[i][j + 1]) {
            parts.push(s[i]);
            i += 1;
        } else {
            parts.push(t[j]);
            j += 1;
        }
    }
    parts.push(s.slice(i));
    parts.push(t.slice(j));
    return parts.join("");
};
