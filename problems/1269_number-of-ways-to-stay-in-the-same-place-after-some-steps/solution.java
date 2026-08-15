class Solution {

    public int numWays(int steps, int arrLen) {
        final int MOD = 1_000_000_007;
        int n = Math.min(arrLen, steps + 1);
        long[] dp = new long[n];
        dp[0] = 1;
        for (int s = 0; s < steps; s++) {
            long[] ndp = new long[n];
            for (int i = 0; i < n; i++) {
                long total = dp[i];
                if (i > 0) total += dp[i - 1];
                if (i + 1 < n) total += dp[i + 1];
                ndp[i] = total % MOD;
            }
            dp = ndp;
        }
        return (int) dp[0];
    }
}
