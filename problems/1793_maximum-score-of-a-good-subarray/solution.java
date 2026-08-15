class Solution {

    public int maximumScore(int[] nums, int k) {
        int n = nums.length;
        long best = nums[k];
        int lo = k;
        int hi = k;
        long curMin = nums[k];
        while (lo > 0 || hi < n - 1) {
            int cand;
            if (lo == 0) {
                hi += 1;
                cand = nums[hi];
            } else if (hi == n - 1) {
                lo -= 1;
                cand = nums[lo];
            } else if (nums[lo - 1] >= nums[hi + 1]) {
                lo -= 1;
                cand = nums[lo];
            } else {
                hi += 1;
                cand = nums[hi];
            }
            if (cand < curMin) {
                curMin = cand;
            }
            long score = curMin * (hi - lo + 1);
            if (score > best) {
                best = score;
            }
        }
        return (int) best;
    }
}
