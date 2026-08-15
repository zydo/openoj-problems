/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    const m = mat.length,
        n = mat[0].length;
    let lo = 0,
        hi = m - 1;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const row = mat[mid];
        let j = 0;
        for (let c = 1; c < n; c++) {
            if (row[c] > row[j]) j = c;
        }
        const up = mid > 0 ? mat[mid - 1][j] : -1;
        const down = mid < m - 1 ? mat[mid + 1][j] : -1;
        if (row[j] > up && row[j] > down) return [mid, j];
        if (up > row[j]) hi = mid - 1;
        else lo = mid + 1;
    }
    return [];
};
