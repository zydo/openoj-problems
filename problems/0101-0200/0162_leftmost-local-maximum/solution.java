class Solution {

    public int leftmostLocalMaximum(int[] nums) {
        int n = nums.length;
        // Left-to-right scan stopping at the first descent — the direct way
        // to the leftmost qualifying index, which halving search cannot guarantee.
        for (int i = 0; i < n; i++) {
            // There is no neighbour beyond either end, so the
            // edge tests pass vacuously there.
            boolean leftOk = i == 0 || nums[i] > nums[i - 1];
            boolean rightOk = i == n - 1 || nums[i] > nums[i + 1];
            if (leftOk && rightOk) {
                return i;
            }
        }
        // Unreachable: a qualifying index always exists.
        return -1;
    }
}
