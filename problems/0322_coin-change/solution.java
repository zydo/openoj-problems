class Solution {

    public int coinChange(int[] coins, int amount) {
        final int INF = Integer.MAX_VALUE;
        int[] dp = new int[amount + 1];
        dp[0] = 0;
        for (int a = 1; a <= amount; ++a) dp[a] = INF;
        for (int a = 1; a <= amount; ++a) {
            for (int c : coins) {
                if (c <= a && dp[a - c] != INF && dp[a - c] + 1 < dp[a]) {
                    dp[a] = dp[a - c] + 1;
                }
            }
        }
        return dp[amount] == INF ? -1 : dp[amount];
    }
}
