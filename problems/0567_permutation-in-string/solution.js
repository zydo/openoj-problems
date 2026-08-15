/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const m = s1.length;
    const n = s2.length;
    if (m > n) {
        return false;
    }
    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);
    const a = "a".charCodeAt(0);
    for (const ch of s1) {
        need[ch.charCodeAt(0) - a]++;
    }
    for (const ch of s2.slice(0, m)) {
        window[ch.charCodeAt(0) - a]++;
    }
    if (need.every((count, i) => count === window[i])) {
        return true;
    }
    for (let i = m; i < n; i++) {
        window[s2.charCodeAt(i) - a]++;
        window[s2.charCodeAt(i - m) - a]--;
        if (need.every((count, j) => count === window[j])) {
            return true;
        }
    }
    return false;
};
