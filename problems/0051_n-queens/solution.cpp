class Solution {
  public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> results;
        vector<int> cols, diag1, diag2;
        vector<string> board;

        backtrack(0, n, cols, diag1, diag2, board, results);
        return results;
    }

  private:
    void backtrack(int row, int n, vector<int> &cols, vector<int> &diag1, vector<int> &diag2,
                   vector<string> &board, vector<vector<string>> &results) {
        if (row == n) {
            results.push_back(board);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (contains(cols, col) || contains(diag1, row - col) || contains(diag2, row + col)) {
                continue;
            }
            cols.push_back(col);
            diag1.push_back(row - col);
            diag2.push_back(row + col);
            board.push_back(string(col, '.') + "Q" + string(n - col - 1, '.'));
            backtrack(row + 1, n, cols, diag1, diag2, board, results);
            board.pop_back();
            cols.pop_back();
            diag1.pop_back();
            diag2.pop_back();
        }
    }

    static bool contains(vector<int> &v, int x) {
        for (int y : v) {
            if (y == x)
                return true;
        }
        return false;
    }
};
