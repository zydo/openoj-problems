/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
    const rows = grid.length,
        cols = grid[0].length;
    const colSums = new Array(cols).fill(0);
    let count = 0;
    for (let i = 0; i < rows; i++) {
        let prefix = 0;
        for (let j = 0; j < cols; j++) {
            colSums[j] += grid[i][j];
            prefix += colSums[j];
            if (prefix > k) break;
            count++;
        }
    }
    return count;
};
