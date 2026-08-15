/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    };
    let bestStart = 0,
        bestEnd = 0;
    for (let i = 0; i < s.length; i++) {
        for (const [l, r] of [expand(i, i), expand(i, i + 1)]) {
            if (r - l > bestEnd - bestStart) {
                bestStart = l;
                bestEnd = r;
            }
        }
    }
    return s.slice(bestStart, bestEnd + 1);
};
