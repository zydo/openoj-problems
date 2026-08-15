class Solution {

    public int maxSubarraySumCircular(int[] nums) {
        int total = 0;
        for (int x : nums) {
            total += x;
        }
        int curMax = nums[0],
            bestMax = nums[0];
        int curMin = nums[0],
            bestMin = nums[0];
        for (int i = 1; i < nums.length; i++) {
            int x = nums[i];
            curMax = x + Math.max(curMax, 0);
            bestMax = Math.max(bestMax, curMax);
            curMin = x + Math.min(curMin, 0);
            bestMin = Math.min(bestMin, curMin);
        }
        if (bestMax < 0) {
            return bestMax;
        }
        return Math.max(bestMax, total - bestMin);
    }
}
