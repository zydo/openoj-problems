class Solution {
  public:
    int numberOfPaths(vector<vector<int>> &grid, int k) {
        const int MOD = 1000000007;
        int m = grid.size();
        int n = grid[0].size();
        vector<vector<long long>> dp(n, vector<long long>(k, 0));
        vector<char> alive(n, 0);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int g = ((grid[i][j] % k) + k) % k;
                if (i == 0 && j == 0) {
                    fill(dp[j].begin(), dp[j].end(), 0LL);
                    dp[j][g] = 1;
                    alive[j] = 1;
                    continue;
                }
                vector<long long> cur(k, 0);
                if (i > 0 && alive[j]) {
                    for (int v = 0; v < k; v++) {
                        int src = ((v - g) % k + k) % k;
                        cur[v] = dp[j][src];
                    }
                }
                if (j > 0 && alive[j - 1]) {
                    for (int v = 0; v < k; v++) {
                        int src = ((v - g) % k + k) % k;
                        cur[v] = (cur[v] + dp[j - 1][src]) % MOD;
                    }
                }
                dp[j] = cur;
                alive[j] = 1;
            }
        }
        return (int)(dp[n - 1][0] % MOD);
    }
};
