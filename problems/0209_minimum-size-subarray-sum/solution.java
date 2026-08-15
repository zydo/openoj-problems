class Solution {

    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        int best = n + 1;
        long window = 0;
        int left = 0;
        for (int right = 0; right < n; right++) {
            window += nums[right];
            while (window >= target) {
                best = Math.min(best, right - left + 1);
                window -= nums[left];
                left++;
            }
        }
        return best == n + 1 ? 0 : best;
    }
}
