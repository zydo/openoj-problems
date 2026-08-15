/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length,
        n = word2.length;
    let prev = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
        const curr = new Array(n + 1);
        curr[0] = i;
        for (let j = 1; j <= n; j++) {
            if (word1.charCodeAt(i - 1) === word2.charCodeAt(j - 1)) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = 1 + Math.min(prev[j - 1], prev[j], curr[j - 1]);
            }
        }
        prev = curr;
    }
    return prev[n];
};
