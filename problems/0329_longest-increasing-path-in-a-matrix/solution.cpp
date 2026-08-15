class Solution {
  public:
    int longestIncreasingPath(vector<vector<int>> &matrix) {
        int m = matrix.size(), n = matrix[0].size();
        vector<array<int, 3>> cells;
        cells.reserve((size_t)m * n);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++)
                cells.push_back({matrix[i][j], i, j});
        }
        sort(cells.begin(), cells.end());
        vector<vector<int>> dp(m, vector<int>(n, 1));
        int best = 1;
        int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        for (auto &[v, i, j] : cells) {
            for (auto &d : dirs) {
                int ni = i + d[0], nj = j + d[1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] < v) {
                    if (dp[ni][nj] + 1 > dp[i][j])
                        dp[i][j] = dp[ni][nj] + 1;
                }
            }
            best = max(best, dp[i][j]);
        }
        return best;
    }
};
