/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    const sorted = pairs.slice().sort((a, b) => a[1] - b[1]);
    let length = 0;
    let currentEnd = -Infinity;
    for (const [left, right] of sorted) {
        if (left > currentEnd) {
            length += 1;
            currentEnd = right;
        }
    }
    return length;
};
