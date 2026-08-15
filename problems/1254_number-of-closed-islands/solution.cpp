class Solution {
  public:
    int closedIsland(vector<vector<int>> &grid) {
        int rows = grid.size(), cols = grid[0].size();
        int dr[] = {1, -1, 0, 0};
        int dc[] = {0, 0, 1, -1};
        int count = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 0) {
                    if (flood(grid, r, c, rows, cols, dr, dc))
                        count++;
                }
            }
        }
        return count;
    }

  private:
    bool flood(vector<vector<int>> &grid, int r, int c, int rows, int cols, int dr[], int dc[]) {
        vector<pair<int, int>> stack;
        grid[r][c] = 1;
        stack.push_back({r, c});
        bool closed = true;
        while (!stack.empty()) {
            auto [x, y] = stack.back();
            stack.pop_back();
            for (int d = 0; d < 4; d++) {
                int nx = x + dr[d], ny = y + dc[d];
                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                    if (grid[nx][ny] == 0) {
                        grid[nx][ny] = 1;
                        stack.push_back({nx, ny});
                    }
                } else {
                    closed = false;
                }
            }
        }
        return closed;
    }
};
