class Solution {
  public:
    vector<vector<string>> solveSudoku(vector<vector<string>> &board) {
        int rows[9] = {0}, cols[9] = {0}, boxes[9] = {0};
        vector<pair<int, int>> empties;
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                char ch = board[r][c][0];
                if (ch == '.') {
                    empties.push_back({r, c});
                } else {
                    int bit = 1 << (ch - '0');
                    rows[r] |= bit;
                    cols[c] |= bit;
                    boxes[(r / 3) * 3 + c / 3] |= bit;
                }
            }
        }
        backtrack(board, rows, cols, boxes, empties, 0);
        return board;
    }

  private:
    bool backtrack(vector<vector<string>> &board, int rows[9], int cols[9], int boxes[9],
                   vector<pair<int, int>> &empties, int k) {
        if (k == (int)empties.size()) {
            return true;
        }
        int r = empties[k].first, c = empties[k].second;
        int b = (r / 3) * 3 + c / 3;
        for (int d = 1; d <= 9; d++) {
            int bit = 1 << d;
            if ((rows[r] & bit) || (cols[c] & bit) || (boxes[b] & bit)) {
                continue;
            }
            rows[r] |= bit;
            cols[c] |= bit;
            boxes[b] |= bit;
            board[r][c] = string(1, '0' + d);
            if (backtrack(board, rows, cols, boxes, empties, k + 1)) {
                return true;
            }
            rows[r] ^= bit;
            cols[c] ^= bit;
            boxes[b] ^= bit;
            board[r][c] = ".";
        }
        return false;
    }
};
