class Solution {

    public int maxProduct(int[] nums) {
        int best = nums[0];
        int curMax = nums[0];
        int curMin = nums[0];
        for (int i = 1; i < nums.length; i++) {
            int value = nums[i];
            if (value < 0) {
                int tmp = curMax;
                curMax = curMin;
                curMin = tmp;
            }
            curMax = Math.max(value, curMax * value);
            curMin = Math.min(value, curMin * value);
            best = Math.max(best, curMax);
        }
        return best;
    }
}
