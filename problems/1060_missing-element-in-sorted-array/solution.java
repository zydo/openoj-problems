class Solution {

    public int missingElement(int[] nums, int k) {
        int n = nums.length;
        // missing(i) = count of missing numbers strictly before nums[i]
        int last = nums[n - 1] - nums[0] - (n - 1);
        if (last < k) {
            return nums[n - 1] + (k - last);
        }
        int lo = 0,
            hi = n - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (nums[mid] - nums[0] - mid >= k) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        int prevMissing = nums[lo - 1] - nums[0] - (lo - 1);
        return nums[lo - 1] + (k - prevMissing);
    }
}
