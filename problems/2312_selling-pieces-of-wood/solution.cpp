class Solution {
  public:
    long long sellingWood(int m, int n, vector<vector<int>> &prices) {
        vector<vector<long long>> price(m + 1, vector<long long>(n + 1, 0));
        for (auto &p : prices) {
            if (price[p[0]][p[1]] < p[2])
                price[p[0]][p[1]] = p[2];
        }
        vector<vector<long long>> dp(m + 1, vector<long long>(n + 1, 0));
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                long long best = price[i][j];
                auto &row = dp[i];
                for (int h = 1; h <= i / 2; h++) {
                    long long v = dp[h][j] + dp[i - h][j];
                    if (v > best)
                        best = v;
                }
                for (int w = 1; w <= j / 2; w++) {
                    long long v = row[w] + row[j - w];
                    if (v > best)
                        best = v;
                }
                dp[i][j] = best;
            }
        }
        return dp[m][n];
    }
};
