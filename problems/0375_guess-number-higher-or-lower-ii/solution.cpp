class Solution {
  public:
    int getMoneyAmount(int n) {
        int size = n + 2;
        vector<vector<int>> dp(size, vector<int>(size, 0));
        for (int length = 2; length <= n; length++) {
            for (int i = 1; i <= n - length + 1; i++) {
                int j = i + length - 1;
                int best = INT_MAX;
                for (int guess = i; guess <= j; guess++) {
                    int lower = dp[i][guess - 1];
                    int upper = dp[guess + 1][j];
                    int cost = guess + max(lower, upper);
                    if (cost < best)
                        best = cost;
                }
                dp[i][j] = best;
            }
        }
        return dp[1][n];
    }
};
