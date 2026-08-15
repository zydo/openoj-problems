class Solution {
  public:
    int cherryPickup(vector<vector<int>> &grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        const int NEG = INT_MIN / 2;
        vector<vector<int>> dp(cols, vector<int>(cols, NEG));
        dp[0][cols - 1] = grid[0][0] + (cols > 1 ? grid[0][cols - 1] : 0);
        for (int r = 1; r < rows; r++) {
            vector<vector<int>> ndp(cols, vector<int>(cols, NEG));
            for (int c1 = 0; c1 < cols; c1++) {
                for (int c2 = 0; c2 < cols; c2++) {
                    int best = NEG;
                    for (int d1 = -1; d1 <= 1; d1++) {
                        for (int d2 = -1; d2 <= 1; d2++) {
                            int p1 = c1 + d1;
                            int p2 = c2 + d2;
                            if (p1 >= 0 && p1 < cols && p2 >= 0 && p2 < cols && dp[p1][p2] > best) {
                                best = dp[p1][p2];
                            }
                        }
                    }
                    if (best > NEG) {
                        ndp[c1][c2] = best + grid[r][c1] + (c1 != c2 ? grid[r][c2] : 0);
                    }
                }
            }
            dp = move(ndp);
        }
        int ans = NEG;
        for (int c1 = 0; c1 < cols; c1++) {
            for (int c2 = 0; c2 < cols; c2++) {
                ans = max(ans, dp[c1][c2]);
            }
        }
        return ans;
    }
};
