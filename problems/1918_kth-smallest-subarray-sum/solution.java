class Solution {

    public int kthSmallestSubarraySum(int[] nums, int k) {
        long lo = Long.MAX_VALUE,
            hi = 0;
        for (int value : nums) {
            lo = Math.min(lo, value);
            hi += value;
        }
        while (lo < hi) {
            long mid = (lo + hi) / 2;
            if (countAtMost(nums, mid) >= k) hi = mid;
            else lo = mid + 1;
        }
        return (int) lo;
    }

    private long countAtMost(int[] nums, long limit) {
        long total = 0;
        long windowSum = 0;
        int left = 0;
        for (int right = 0; right < nums.length; right++) {
            windowSum += nums[right];
            while (windowSum > limit) {
                windowSum -= nums[left];
                left++;
            }
            total += right - left + 1;
        }
        return total;
    }
}
