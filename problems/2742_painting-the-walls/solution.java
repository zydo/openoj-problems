class Solution {

    public int paintWalls(int[] cost, int[] time) {
        int n = cost.length;
        final long INF = Long.MAX_VALUE / 2;
        long[] dp = new long[n + 1];
        java.util.Arrays.fill(dp, INF);
        dp[0] = 0;
        for (int i = 0; i < n; i++) {
            int weight = time[i] + 1;
            long c = cost[i];
            for (int j = n; j >= 1; j--) {
                int src = j >= weight ? j - weight : 0;
                long cand = dp[src] + c;
                if (cand < dp[j]) dp[j] = cand;
            }
        }
        return (int) dp[n];
    }
}
