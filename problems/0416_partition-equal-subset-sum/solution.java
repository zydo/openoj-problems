class Solution {

    public boolean canPartition(int[] nums) {
        int total = 0;
        for (int v : nums) total += v;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int v : nums) {
            for (int j = target; j >= v; j--) {
                if (dp[j - v]) dp[j] = true;
            }
            if (dp[target]) return true;
        }
        return dp[target];
    }
}
