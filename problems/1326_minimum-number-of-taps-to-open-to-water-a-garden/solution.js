/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
    const intervals = ranges
        .map((r, i) => [Math.max(0, i - r), Math.min(n, i + r)])
        .sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    let count = 0;
    let covered = 0;
    let i = 0;
    const total = intervals.length;
    while (covered < n) {
        let reach = covered;
        while (i < total && intervals[i][0] <= covered) {
            reach = Math.max(reach, intervals[i][1]);
            i++;
        }
        if (reach === covered) {
            return -1;
        }
        covered = reach;
        count++;
    }
    return count;
};
