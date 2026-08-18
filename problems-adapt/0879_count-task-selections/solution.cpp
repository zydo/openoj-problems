class Solution {
  public:
    int countTaskSelections(int n, int minPayoff, vector<int> &crew, vector<int> &payoff) {
        const long long MOD = 1000000007;
        // dp[workers][cap] = number of subsets using at most `workers` workers
        // and at least `cap` payoff; cap is capped at minPayoff.
        vector<vector<long long>> dp(n + 1, vector<long long>(minPayoff + 1, 0));
        for (int workers = 0; workers <= n; workers++) {
            dp[workers][0] = 1;
        }
        for (size_t idx = 0; idx < crew.size(); idx++) {
            int g = crew[idx];
            int p = payoff[idx];
            for (int workers = n; workers >= g; workers--) {
                for (int cap = minPayoff; cap >= 0; cap--) {
                    int prev = max(0, cap - p);
                    dp[workers][cap] = (dp[workers][cap] + dp[workers - g][prev]) % MOD;
                }
            }
        }
        return (int)dp[n][minPayoff];
    }
};
