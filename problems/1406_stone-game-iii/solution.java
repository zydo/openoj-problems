class Solution {

    public String stoneGameIII(int[] stoneValue) {
        int n = stoneValue.length;
        long[] dp = new long[n + 1];
        for (int i = n - 1; i >= 0; i--) {
            long take = 0;
            long best = Long.MIN_VALUE;
            for (int j = i; j < Math.min(i + 3, n); j++) {
                take += stoneValue[j];
                long cand = take - dp[j + 1];
                if (cand > best) {
                    best = cand;
                }
            }
            dp[i] = best;
        }
        if (dp[0] > 0) {
            return "Alice";
        }
        if (dp[0] < 0) {
            return "Bob";
        }
        return "Tie";
    }
}
