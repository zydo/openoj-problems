/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    const n = s.length;
    const cut = new Array(n + 1);
    for (let i = 0; i <= n; ++i) cut[i] = i - 1;
    for (let c = 0; c < n; ++c) {
        for (let l = c, r = c; l >= 0 && r < n && s[l] === s[r]; --l, ++r) {
            cut[r + 1] = Math.min(cut[r + 1], cut[l] + 1);
        }
        for (let l = c, r = c + 1; l >= 0 && r < n && s[l] === s[r]; --l, ++r) {
            cut[r + 1] = Math.min(cut[r + 1], cut[l] + 1);
        }
    }
    return cut[n];
};
