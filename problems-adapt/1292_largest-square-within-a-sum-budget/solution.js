/**
 * @param {number[][]} grid
 * @param {number} budget
 * @return {number}
 */
var largestSquareSide = function (grid, budget) {
    const m = grid.length;
    const n = grid[0].length;
    // prefix[i][j] = sum of the rectangle from (0,0) to (i-1, j-1)
    const prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        const row = grid[i];
        const prow = prefix[i];
        const crow = prefix[i + 1];
        for (let j = 0; j < n; j++) {
            crow[j + 1] = crow[j] + prow[j + 1] - prow[j] + row[j];
        }
    }

    // inclusion-exclusion of four corners: any square sum in O(1)
    const squareSum = (i, j, k) => {
        const p = prefix;
        return p[i + k][j + k] - p[i][j + k] - p[i + k][j] + p[i][j];
    };

    // one global answer; each top-left corner only tries to extend it
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // try side ans+1 while it fits the matrix and the budget;
            // ans never shrinks, so failures cost a single O(1) check and
            // each side length is paid at most once across the scan
            while (i + ans < m && j + ans < n && squareSum(i, j, ans + 1) <= budget) {
                ans += 1;
            }
        }
    }
    return ans;
};
