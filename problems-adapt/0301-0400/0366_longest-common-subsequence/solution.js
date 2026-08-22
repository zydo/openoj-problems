/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestCommonSubsequence = function (s, t) {
    const m = s.length;
    const n = t.length;
    // dp row for the empty prefix of s (all zeros); each new row only
    // reads the row above, so two rows suffice
    let prev = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        const curr = new Array(n + 1).fill(0);
        const c = s.charCodeAt(i - 1);
        for (let j = 1; j <= n; j++) {
            if (c === t.charCodeAt(j - 1)) {
                // aligning matching last chars is always safe: extend the
                // LCS of both shorter prefixes
                curr[j] = prev[j - 1] + 1;
            } else {
                // an optimal LCS discards at least one of the two
                // characters, so take the better of dropping either
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        prev = curr;
    }
    return prev[n];
};
