/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
    const ordered = [...clips].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let count = 0;
    let covered = 0;
    let farthest = 0;
    let i = 0;
    const n = ordered.length;
    while (covered < time) {
        while (i < n && ordered[i][0] <= covered) {
            if (ordered[i][1] > farthest) {
                farthest = ordered[i][1];
            }
            i++;
        }
        if (farthest === covered) {
            return -1;
        }
        covered = farthest;
        count++;
    }
    return count;
};
