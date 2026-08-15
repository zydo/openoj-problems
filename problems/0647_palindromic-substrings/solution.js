/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const n = s.length;
    let count = 0;
    for (let center = 0; center < n; center++) {
        for (const [left0, right0] of [
            [center, center],
            [center, center + 1],
        ]) {
            let left = left0;
            let right = right0;
            while (left >= 0 && right < n && s[left] === s[right]) {
                count += 1;
                left -= 1;
                right += 1;
            }
        }
    }
    return count;
};
