class Solution {

    public long minimumTime(int[] power) {
        int n = power.length;
        int full = (1 << n) - 1;
        final long INF = 1L << 60;
        long[] dp = new long[full + 1];
        java.util.Arrays.fill(dp, INF);
        dp[0] = 0;
        for (int mask = 0; mask <= full; mask++) {
            if (dp[mask] >= INF) continue;
            long gain = Integer.bitCount(mask) + 1;
            for (int j = 0; j < n; j++) {
                if ((mask & (1 << j)) == 0) {
                    long days = ((long) power[j] + gain - 1) / gain;
                    int nxt = mask | (1 << j);
                    if (dp[mask] + days < dp[nxt]) dp[nxt] = dp[mask] + days;
                }
            }
        }
        return dp[full];
    }
}
