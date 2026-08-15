class Solution {

    public int minCapability(int[] nums, int k) {
        int lo = Integer.MAX_VALUE,
            hi = Integer.MIN_VALUE;
        for (int x : nums) {
            lo = Math.min(lo, x);
            hi = Math.max(hi, x);
        }
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (feasible(nums, mid, k)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private boolean feasible(int[] nums, int cap, int k) {
        int count = 0;
        int i = 0;
        while (i < nums.length) {
            if (nums[i] <= cap) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= k;
    }
}
