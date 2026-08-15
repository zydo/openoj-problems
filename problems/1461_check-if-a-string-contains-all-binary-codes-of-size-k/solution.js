/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    const need = 1 << k;
    if (s.length < k) return false;
    const seen = new Set();
    for (let i = 0; i + k <= s.length; i++) {
        seen.add(s.slice(i, i + k));
        if (seen.size === need) return true;
    }
    return seen.size === need;
};
