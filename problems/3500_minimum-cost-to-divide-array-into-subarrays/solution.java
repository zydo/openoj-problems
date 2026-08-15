class Solution {

    public long minimumCost(int[] nums, int[] cost, int k) {
        int n = nums.length;
        long[] prefNums = new long[n + 1];
        long[] prefCost = new long[n + 1];
        for (int i = 0; i < n; i++) {
            prefNums[i + 1] = prefNums[i] + nums[i];
            prefCost[i + 1] = prefCost[i] + cost[i];
        }

        final long INF = Long.MAX_VALUE / 4;
        long[] dp = new long[n + 1];
        java.util.Arrays.fill(dp, INF);
        dp[n] = 0;
        long totalCost = prefCost[n];
        for (int i = n - 1; i >= 0; i--) {
            long best = INF;
            for (int j = i; j < n; j++) {
                long seg = prefNums[j + 1] * (prefCost[j + 1] - prefCost[i]);
                seg += (long) k * (totalCost - prefCost[i]);
                long cand = seg + dp[j + 1];
                if (cand < best) {
                    best = cand;
                }
            }
            dp[i] = best;
        }
        return dp[0];
    }
}
