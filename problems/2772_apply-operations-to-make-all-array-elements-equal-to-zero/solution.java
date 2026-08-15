class Solution {

    public boolean checkArray(int[] nums, int k) {
        int n = nums.length;
        long[] diff = new long[n + 1];
        long running = 0;
        for (int i = 0; i < n; i++) {
            running += diff[i];
            long cur = nums[i] - running;
            if (cur < 0) {
                return false;
            }
            if (cur == 0) {
                continue;
            }
            if (i + k > n) {
                return false;
            }
            running += cur;
            diff[i + k] -= cur;
        }
        return true;
    }
}
