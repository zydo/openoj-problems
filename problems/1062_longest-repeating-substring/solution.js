/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function (s) {
    const n = s.length;

    const hasRepeat = (length) => {
        if (length === 0) {
            return true;
        }
        const seen = new Set();
        for (let i = 0; i + length <= n; i++) {
            const piece = s.substring(i, i + length);
            if (seen.has(piece)) {
                return true;
            }
            seen.add(piece);
        }
        return false;
    };

    let lo = 0;
    let hi = n - 1;
    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (hasRepeat(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};
