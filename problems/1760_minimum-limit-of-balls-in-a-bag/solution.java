class Solution {

    public int minimumSize(int[] nums, int maxOperations) {
        int lo = 1;
        int hi = 0;
        for (int balls : nums) {
            hi = Math.max(hi, balls);
        }
        while (lo < hi) {
            int mid = (lo + hi) >>> 1;
            if (needed(nums, mid) <= maxOperations) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private long needed(int[] nums, int penalty) {
        long total = 0;
        for (int balls : nums) {
            total += (balls - 1) / penalty;
        }
        return total;
    }
}
