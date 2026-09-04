/**
 * @param {number[][]} rangesA
 * @param {number[][]} rangesB
 * @return {number[][]}
 */
var commonIntervalPieces = function (rangesA, rangesB) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < rangesA.length && j < rangesB.length) {
        // The overlap of the two current intervals is [max starts,
        // min ends]; lo <= hi means they intersect (closed intervals,
        // so touching endpoints still count).
        const lo = Math.max(rangesA[i][0], rangesB[j][0]);
        const hi = Math.min(rangesA[i][1], rangesB[j][1]);
        if (lo <= hi) {
            result.push([lo, hi]);
        }
        // Retire the interval that ends earlier: later intervals in the
        // other list start strictly after its end, so it is done forever.
        if (rangesA[i][1] < rangesB[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};
