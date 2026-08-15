/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
    const m = mat.length;
    const n = m > 0 ? mat[0].length : 0;
    let total = 0;
    const height = new Array(n).fill(0);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] === 1) {
                height[c] += 1;
            } else {
                height[c] = 0;
            }
        }
        for (let left = 0; left < n; left++) {
            let minH = height[left];
            for (let right = left; right < n; right++) {
                if (height[right] < minH) {
                    minH = height[right];
                }
                total += minH;
            }
        }
    }
    return total;
};
