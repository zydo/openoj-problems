/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    const longest = (lo, hi) => {
        if (lo >= hi) return 0;
        const counts = new Map();
        for (let i = lo; i < hi; i++) {
            counts.set(s[i], (counts.get(s[i]) || 0) + 1);
        }
        const isRare = (ch) => counts.get(ch) < k;
        let best = 0;
        let start = lo;
        let allFrequent = true;
        for (let i = lo; i < hi; i++) {
            if (isRare(s[i])) {
                allFrequent = false;
                best = Math.max(best, longest(start, i));
                start = i + 1;
            }
        }
        if (allFrequent) return hi - lo;
        best = Math.max(best, longest(start, hi));
        return best;
    };
    return longest(0, s.length);
};
