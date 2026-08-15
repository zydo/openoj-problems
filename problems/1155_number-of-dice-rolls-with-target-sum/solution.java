class Solution {

    public int numRollsToTarget(int n, int k, int target) {
        final int MOD = 1000000007;
        int[] dp = new int[target + 1];
        int[] ndp = new int[target + 1];
        dp[0] = 1;
        for (int d = 0; d < n; d++) {
            java.util.Arrays.fill(ndp, 0);
            for (int t = 1; t <= target; t++) {
                long s = 0;
                int hi = Math.min(k, t);
                for (int f = 1; f <= hi; f++) {
                    s += dp[t - f];
                }
                ndp[t] = (int) (s % MOD);
            }
            int[] tmp = dp;
            dp = ndp;
            ndp = tmp;
        }
        return dp[target];
    }
}
