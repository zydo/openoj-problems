class Solution {
  public:
    int numRollsToTarget(int n, int k, int target) {
        const int MOD = 1000000007;
        vector<int> dp(target + 1, 0), ndp(target + 1, 0);
        dp[0] = 1;
        for (int d = 0; d < n; d++) {
            fill(ndp.begin(), ndp.end(), 0);
            for (int t = 1; t <= target; t++) {
                long long s = 0;
                int hi = min(k, t);
                for (int f = 1; f <= hi; f++) {
                    s += dp[t - f];
                }
                ndp[t] = (int)(s % MOD);
            }
            swap(dp, ndp);
        }
        return dp[target];
    }
};
