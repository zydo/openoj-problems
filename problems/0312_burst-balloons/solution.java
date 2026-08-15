class Solution {

    public int maxCoins(int[] nums) {
        int m = nums.length + 2;
        int[] padded = new int[m];
        padded[0] = 1;
        for (int i = 0; i < nums.length; i++) {
            padded[i + 1] = nums[i];
        }
        padded[m - 1] = 1;
        long[][] dp = new long[m][m];
        for (int length = 1; length < m - 1; length++) {
            for (int left = 1; left < m - length; left++) {
                int right = left + length - 1;
                for (int k = left; k <= right; k++) {
                    long coins =
                        (long) padded[left - 1] *
                            padded[k] *
                            padded[right + 1] +
                        dp[left][k - 1] +
                        dp[k + 1][right];
                    if (coins > dp[left][right]) {
                        dp[left][right] = coins;
                    }
                }
            }
        }
        return (int) dp[1][m - 2];
    }
}
