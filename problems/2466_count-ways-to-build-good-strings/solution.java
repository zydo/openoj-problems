class Solution {

    public int countGoodStrings(int low, int high, int zero, int one) {
        final int MOD = 1_000_000_007;
        int[] dp = new int[high + 1];
        dp[0] = 1;
        for (int length = 1; length <= high; length++) {
            int ways = 0;
            if (length >= zero) {
                ways += dp[length - zero];
            }
            if (length >= one) {
                ways += dp[length - one];
            }
            dp[length] = ways % MOD;
        }
        int total = 0;
        for (int length = low; length <= high; length++) {
            total = (total + dp[length]) % MOD;
        }
        return total;
    }
}
