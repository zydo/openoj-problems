/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    const ordered = [...intervals].sort((a, b) => a[1] - b[1]);
    let removed = 0;
    let prevEnd = -Infinity;
    for (const [start, end] of ordered) {
        if (start >= prevEnd) {
            prevEnd = end;
        } else {
            removed++;
        }
    }
    return removed;
};
