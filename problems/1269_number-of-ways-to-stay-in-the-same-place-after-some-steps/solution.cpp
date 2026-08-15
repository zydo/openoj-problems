class Solution {
  public:
    int numWays(int steps, int arrLen) {
        const long long MOD = 1000000007LL;
        int n = min(arrLen, steps + 1);
        vector<long long> dp(n, 0), ndp(n, 0);
        dp[0] = 1;
        for (int s = 0; s < steps; s++) {
            for (int i = 0; i < n; i++) {
                long long total = dp[i];
                if (i > 0)
                    total += dp[i - 1];
                if (i + 1 < n)
                    total += dp[i + 1];
                ndp[i] = total % MOD;
            }
            swap(dp, ndp);
        }
        return (int)dp[0];
    }
};
