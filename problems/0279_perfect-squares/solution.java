class Solution {

    public int numSquares(int n) {
        int[] dp = new int[n + 1];
        for (int i = 1; i <= n; i++) dp[i] = Integer.MAX_VALUE;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {
                int s = j * j;
                if (dp[i - s] + 1 < dp[i]) dp[i] = dp[i - s] + 1;
            }
        }
        return dp[n];
    }
}
