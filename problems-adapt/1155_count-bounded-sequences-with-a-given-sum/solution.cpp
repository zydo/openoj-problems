class Solution {
  public:
    int countBoundedSequences(int n, int k, int target) {
        const int MOD = 1000000007;
        // dp[t]: ways for the terms chosen so far to reach sum t
        vector<int> dp(target + 1, 0), ndp(target + 1, 0);
        // zero terms reach sum 0 in exactly one way
        dp[0] = 1;
        for (int d = 0; d < n; d++) {
            // fresh table per term: the transition must read only the
            // previous term's distribution, else one term could count twice
            fill(ndp.begin(), ndp.end(), 0);
            for (int t = 1; t <= target; t++) {
                long long s = 0;
                // every term value f is a distinct outcome, so all values are
                // summed; min(k, t) skips values that overshoot the target
                int hi = min(k, t);
                for (int f = 1; f <= hi; f++) {
                    s += dp[t - f];
                }
                ndp[t] = (int)(s % MOD);
            }
            swap(dp, ndp);
        }
        // targets no sequence reaches were never written, so read as 0
        return dp[target];
    }
};
