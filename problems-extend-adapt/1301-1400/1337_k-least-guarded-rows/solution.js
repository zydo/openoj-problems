/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kLeastGuardedRows = function (mat, k) {
    // Weakness order == lexicographic order of (guards, index); rows are
    // all 1's then 0's, so the sum is the first-unmanned index too.
    const ranked = mat
        .map((row, index) => [row.reduce((a, b) => a + b, 0), index])
        .sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    return ranked.slice(0, k).map((entry) => entry[1]);
};
