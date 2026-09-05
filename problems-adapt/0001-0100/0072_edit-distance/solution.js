/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var minDistance = function (source, target) {
    const m = source.length,
        n = target.length;
    // dp[i][j] = min operations turning the first i chars of source into
    // the first j chars of target. Only the last two table rows are kept,
    // since row i reads only row i-1 and its own left neighbor.
    let prev = new Array(n + 1);
    // Row 0: converting the empty prefix costs j insertions.
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
        const curr = new Array(n + 1);
        // Column 0: converting an i-char prefix to empty costs i deletions.
        curr[0] = i;
        for (let j = 1; j <= n; j++) {
            if (source.charCodeAt(i - 1) === target.charCodeAt(j - 1)) {
                // Last chars align for free: inherit the diagonal.
                curr[j] = prev[j - 1];
            } else {
                // One paid operation must fix the mismatch; each choice
                // covers a distinct final move, so the min is exact.
                // Replace inherits prev[j-1], delete drops source[i-1]
                // and inherits prev[j], insert appends target[j-1] and
                // inherits curr[j-1] (one fewer char of target to match).
                curr[j] = 1 + Math.min(prev[j - 1], prev[j], curr[j - 1]);
            }
        }
        prev = curr;
    }
    return prev[n];
};
