class Solution {

    public int splitArray(int[] nums, int k) {
        long lo = Long.MIN_VALUE;
        long hi = 0;
        for (int value : nums) {
            lo = Math.max(lo, value);
            hi += value;
        }
        while (lo < hi) {
            long mid = (lo + hi) >>> 1;
            if (feasible(nums, k, mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return (int) lo;
    }

    private boolean feasible(int[] nums, int k, long limit) {
        int pieces = 1;
        long current = 0;
        for (int value : nums) {
            if (current + value > limit) {
                pieces++;
                if (pieces > k) {
                    return false;
                }
                current = value;
            } else {
                current += value;
            }
        }
        return true;
    }
}
