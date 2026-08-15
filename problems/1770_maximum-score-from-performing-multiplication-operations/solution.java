class Solution {

    public int maximumScore(int[] nums, int[] multipliers) {
        int m = multipliers.length;
        int n = nums.length;
        final long NEG_INF = Long.MIN_VALUE / 4;
        long[] prev = new long[m + 1];
        long[] cur = new long[m + 1];
        for (int i = m - 1; i >= 0; i--) {
            for (int l = 0; l <= i; l++) {
                int r = i - l;
                long takeLeft = prev[l + 1] + (long) multipliers[i] * nums[l];
                long takeRight =
                    prev[l] + (long) multipliers[i] * nums[n - 1 - r];
                cur[l] = takeLeft >= takeRight ? takeLeft : takeRight;
            }
            long[] tmp = prev;
            prev = cur;
            cur = tmp;
        }
        return (int) prev[0];
    }
}
