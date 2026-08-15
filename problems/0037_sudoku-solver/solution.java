class Solution {

    public String[][] solveSudoku(String[][] board) {
        char[][] grid = new char[9][9];
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                grid[r][c] = board[r][c].charAt(0);
            }
        }
        int[] rows = new int[9];
        int[] cols = new int[9];
        int[] boxes = new int[9];
        int count = 0;
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (grid[r][c] == '.') {
                    count++;
                } else {
                    int bit = 1 << (grid[r][c] - '0');
                    rows[r] |= bit;
                    cols[c] |= bit;
                    boxes[(r / 3) * 3 + c / 3] |= bit;
                }
            }
        }
        int[] er = new int[count];
        int[] ec = new int[count];
        int idx = 0;
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (grid[r][c] == '.') {
                    er[idx] = r;
                    ec[idx] = c;
                    idx++;
                }
            }
        }
        backtrack(grid, er, ec, rows, cols, boxes, 0);
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                board[r][c] = String.valueOf(grid[r][c]);
            }
        }
        return board;
    }

    private boolean backtrack(
        char[][] grid,
        int[] er,
        int[] ec,
        int[] rows,
        int[] cols,
        int[] boxes,
        int k
    ) {
        if (k == er.length) {
            return true;
        }
        int r = er[k],
            c = ec[k];
        int b = (r / 3) * 3 + c / 3;
        for (int d = 1; d <= 9; d++) {
            int bit = 1 << d;
            if (
                (rows[r] & bit) != 0 ||
                (cols[c] & bit) != 0 ||
                (boxes[b] & bit) != 0
            ) {
                continue;
            }
            rows[r] |= bit;
            cols[c] |= bit;
            boxes[b] |= bit;
            grid[r][c] = (char) ('0' + d);
            if (backtrack(grid, er, ec, rows, cols, boxes, k + 1)) {
                return true;
            }
            rows[r] ^= bit;
            cols[c] ^= bit;
            boxes[b] ^= bit;
            grid[r][c] = '.';
        }
        return false;
    }
}
