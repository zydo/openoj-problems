class Solution {

    public int[] pairSumInOrder(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i + 1 < n; i++) {
            int complement = target - nums[i];
            // The sorted remainder nums[i+1..] is the only legal partner
            // range: a position cannot pair with itself.
            int lo = i + 1,
                hi = n - 1;
            while (lo <= hi) {
                int mid = lo + (hi - lo) / 2;
                if (nums[mid] == complement) {
                    // 1-based indices, smaller position first.
                    return new int[] { i + 1, mid + 1 };
                } else if (nums[mid] < complement) {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
        }
        // Unreachable under the uniqueness promise; keeps the function total.
        return new int[] {};
    }
}
