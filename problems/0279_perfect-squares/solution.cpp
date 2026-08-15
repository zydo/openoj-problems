class Solution {
  public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i <= n; ++i) {
            for (int j = 1; j * j <= i; ++j) {
                int s = j * j;
                if (dp[i - s] + 1 < dp[i])
                    dp[i] = dp[i - s] + 1;
            }
        }
        return dp[n];
    }
};
