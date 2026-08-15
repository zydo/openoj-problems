/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const results = [];
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();
    const board = [];

    const backtrack = (row) => {
        if (row === n) {
            results.push(board.slice());
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;
            }
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);
            board.push(".".repeat(col) + "Q" + ".".repeat(n - col - 1));
            backtrack(row + 1);
            board.pop();
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    };

    backtrack(0);
    return results;
};
