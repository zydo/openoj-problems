/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
    const dp = new Map();
    let best = 0;
    for (const x of arr) {
        const len = (dp.get(x - difference) || 0) + 1;
        dp.set(x, len);
        if (len > best) best = len;
    }
    return best;
};
