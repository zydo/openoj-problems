class Solution {

    public int minMoves(int[] nums, int limit) {
        int n = nums.length;
        int[] diff = new int[2 * limit + 2];
        for (int i = 0; i < n / 2; i++) {
            int a = nums[i],
                b = nums[n - 1 - i];
            int lo = Math.min(a, b),
                hi = Math.max(a, b);
            diff[2] += 2;
            diff[lo + 1] -= 1;
            diff[a + b] -= 1;
            diff[a + b + 1] += 1;
            diff[hi + limit + 1] += 1;
        }
        int best = Integer.MAX_VALUE;
        int cur = 0;
        for (int target = 2; target <= 2 * limit; target++) {
            cur += diff[target];
            if (cur < best) best = cur;
        }
        return best;
    }
}
