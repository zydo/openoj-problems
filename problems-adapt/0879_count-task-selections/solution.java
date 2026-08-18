class Solution {

    public int countTaskSelections(int n, int minPayoff, int[] crew, int[] payoff) {
        final int MOD = 1000000007;
        // dp[workers][cap] = number of subsets using at most `workers` workers
        // and at least `cap` payoff; cap is capped at minPayoff.
        long[][] dp = new long[n + 1][minPayoff + 1];
        for (int workers = 0; workers <= n; workers++) {
            dp[workers][0] = 1;
        }
        for (int idx = 0; idx < crew.length; idx++) {
            int g = crew[idx];
            int p = payoff[idx];
            for (int workers = n; workers >= g; workers--) {
                for (int cap = minPayoff; cap >= 0; cap--) {
                    int prev = Math.max(0, cap - p);
                    dp[workers][cap] = (dp[workers][cap] + dp[workers - g][prev]) % MOD;
                }
            }
        }
        return (int) dp[n][minPayoff];
    }
}
