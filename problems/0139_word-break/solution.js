/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const words = new Set(wordDict);
    const n = s.length;
    const reachable = new Array(n + 1).fill(false);
    reachable[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (reachable[j] && words.has(s.substring(j, i))) {
                reachable[i] = true;
                break;
            }
        }
    }
    return reachable[n];
};
