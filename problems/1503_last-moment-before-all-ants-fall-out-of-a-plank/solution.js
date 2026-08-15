/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
    let best = 0;
    for (const position of left) {
        best = Math.max(best, position);
    }
    for (const position of right) {
        best = Math.max(best, n - position);
    }
    return best;
};
