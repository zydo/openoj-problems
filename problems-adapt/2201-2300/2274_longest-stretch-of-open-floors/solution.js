/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} blocked
 * @return {number}
 */
var longestOpenStretch = function (bottom, top, blocked) {
    blocked.sort((left, right) => left - right);
    let best = Math.max(blocked[0] - bottom, top - blocked[blocked.length - 1]);
    for (let i = 1; i < blocked.length; i++) {
        best = Math.max(best, blocked[i] - blocked[i - 1] - 1);
    }
    return best;
};
