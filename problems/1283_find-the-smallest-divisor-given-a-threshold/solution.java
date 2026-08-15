class Solution {

    public int smallestDivisor(int[] nums, int threshold) {
        int hi = Integer.MIN_VALUE;
        for (int x : nums) hi = Math.max(hi, x);
        int lo = 1;
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (total(nums, mid) <= threshold) hi = mid;
            else lo = mid + 1;
        }
        return lo;
    }

    private long total(int[] nums, int divisor) {
        long sum = 0;
        for (int x : nums) {
            sum += (x + divisor - 1) / divisor;
        }
        return sum;
    }
}
