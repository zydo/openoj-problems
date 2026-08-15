class Solution {

    public boolean predictTheWinner(int[] nums) {
        int n = nums.length;
        int[] dp = nums.clone();
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i + length - 1 < n; i++) {
                int j = i + length - 1;
                dp[i] = Math.max(nums[i] - dp[i + 1], nums[j] - dp[i]);
            }
        }
        return dp[0] >= 0;
    }
}
