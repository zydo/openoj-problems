/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
    const counts = new Map();
    let best = 0;
    for (const row of matrix) {
        const key = row.map((value) => value ^ row[0]).join(",");
        const next = (counts.get(key) || 0) + 1;
        counts.set(key, next);
        best = Math.max(best, next);
    }
    return best;
};
