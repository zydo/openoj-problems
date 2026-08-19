/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestUniformRunAfterKFlips = function (s, k) {
    // t/f count symbols inside the window; a window can be made uniform by
    // flipping whichever character is currently the minority.
    let t = 0,
        f = 0;
    let left = 0;
    let best = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right] === "T") t++;
        else f++;
        // Valid iff the minority count fits within the k flips — the min
        // covers both choices of final majority at once. Validity is
        // monotone in window size, so shrinking from the left alone
        // restores it.
        while (Math.min(t, f) > k) {
            if (s[left] === "T") t--;
            else f--;
            left++;
        }
        const w = right - left + 1;
        if (w > best) best = w;
    }
    return best;
};
