/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let best = 0;
    let prev = new Array(n + 1).fill(0);
    for (let i = 0; i < m; i++) {
        const curr = new Array(n + 1).fill(0);
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === "1") {
                curr[j + 1] = Math.min(prev[j], prev[j + 1], curr[j]) + 1;
                if (curr[j + 1] > best) {
                    best = curr[j + 1];
                }
            }
        }
        prev = curr;
    }
    return best * best;
};
