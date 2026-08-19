class Solution {

    public int countBoundedSequences(int n, int k, int target) {
        final int MOD = 1000000007;
        // dp[t]: ways for the terms chosen so far to reach sum t
        int[] dp = new int[target + 1];
        int[] ndp = new int[target + 1];
        // zero terms reach sum 0 in exactly one way
        dp[0] = 1;
        for (int d = 0; d < n; d++) {
            // fresh table per term: the transition must read only the
            // previous term's distribution, else one term could count twice
            java.util.Arrays.fill(ndp, 0);
            for (int t = 1; t <= target; t++) {
                long s = 0;
                // every term value f is a distinct outcome, so all values are
                // summed; min(k, t) skips values that overshoot the target
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
        // targets no sequence reaches were never written, so read as 0
        return dp[target];
    }
}
