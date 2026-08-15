class Solution {
  public:
    int latestDayToCross(int row, int col, vector<vector<int>> &cells) {
        int lo = 1, hi = row * col;
        while (lo < hi) {
            int mid = (lo + hi + 1) / 2;
            if (canCross(row, col, cells, mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

  private:
    bool canCross(int row, int col, vector<vector<int>> &cells, int floodedCount) {
        vector<vector<int>> grid(row, vector<int>(col, 0));
        for (int i = 0; i < floodedCount; i++) {
            grid[cells[i][0] - 1][cells[i][1] - 1] = 1;
        }
        vector<pair<int, int>> queue;
        vector<vector<bool>> seen(row, vector<bool>(col, false));
        for (int c = 0; c < col; c++) {
            if (grid[0][c] == 0) {
                queue.push_back({0, c});
                seen[0][c] = true;
            }
        }
        size_t head = 0;
        int dr[4] = {1, -1, 0, 0};
        int dc[4] = {0, 0, 1, -1};
        while (head < queue.size()) {
            auto [r, c] = queue[head++];
            if (r == row - 1)
                return true;
            for (int d = 0; d < 4; d++) {
                int nr = r + dr[d];
                int nc = c + dc[d];
                if (nr >= 0 && nr < row && nc >= 0 && nc < col && !seen[nr][nc] &&
                    grid[nr][nc] == 0) {
                    seen[nr][nc] = true;
                    queue.push_back({nr, nc});
                }
            }
        }
        return false;
    }
};
