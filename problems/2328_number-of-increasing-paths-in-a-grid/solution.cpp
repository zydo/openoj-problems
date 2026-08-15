class Solution {
  public:
    int countPaths(vector<vector<int>> &grid) {
        const long long MOD = 1000000007LL;
        int m = grid.size(), n = grid[0].size();
        vector<array<int, 3>> cells;
        cells.reserve((long long)m * n);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++)
                cells.push_back({grid[i][j], i, j});
        }
        sort(cells.begin(), cells.end(),
             [](const array<int, 3> &x, const array<int, 3> &y) { return x[0] > y[0]; });
        vector<vector<long long>> dp(m, vector<long long>(n, 1));
        int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        for (auto &cell : cells) {
            int v = cell[0], i = cell[1], j = cell[2];
            for (auto &dir : dirs) {
                int ni = i + dir[0], nj = j + dir[1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] > v) {
                    dp[i][j] = (dp[i][j] + dp[ni][nj]) % MOD;
                }
            }
        }
        long long total = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++)
                total = (total + dp[i][j]) % MOD;
        }
        return (int)total;
    }
};
