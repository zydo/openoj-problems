class Solution {

    public int bestClipLevel(int[] nums, int target) {
        int hi = Integer.MIN_VALUE;
        for (int x : nums) hi = Math.max(hi, x);
        int lo = 0;
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (mutatedSum(nums, mid) >= (long) target) hi = mid;
            else lo = mid + 1;
        }
        if (Math.abs(mutatedSum(nums, lo - 1) - target) <= Math.abs(mutatedSum(nums, lo) - target)) {
            return lo - 1;
        }
        return lo;
    }

    private long mutatedSum(int[] nums, int value) {
        long sum = 0;
        for (int x : nums) {
            sum += Math.min(x, value);
        }
        return sum;
    }
}
