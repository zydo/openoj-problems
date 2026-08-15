/**
 * @param {string[][]} board
 * @return {string[][]}
 */
var solveSudoku = function (board) {
    const rows = new Array(9).fill(0);
    const cols = new Array(9).fill(0);
    const boxes = new Array(9).fill(0);
    const empties = [];
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const ch = board[r][c];
            if (ch === ".") {
                empties.push([r, c]);
            } else {
                const bit = 1 << (ch.charCodeAt(0) - 48);
                rows[r] |= bit;
                cols[c] |= bit;
                boxes[((r / 3) | 0) * 3 + ((c / 3) | 0)] |= bit;
            }
        }
    }

    function backtrack(k) {
        if (k === empties.length) {
            return true;
        }
        const [r, c] = empties[k];
        const b = ((r / 3) | 0) * 3 + ((c / 3) | 0);
        for (let d = 1; d <= 9; d++) {
            const bit = 1 << d;
            if (rows[r] & bit || cols[c] & bit || boxes[b] & bit) {
                continue;
            }
            rows[r] |= bit;
            cols[c] |= bit;
            boxes[b] |= bit;
            board[r][c] = String(d);
            if (backtrack(k + 1)) {
                return true;
            }
            rows[r] ^= bit;
            cols[c] ^= bit;
            boxes[b] ^= bit;
            board[r][c] = ".";
        }
        return false;
    }

    backtrack(0);
    return board;
};
