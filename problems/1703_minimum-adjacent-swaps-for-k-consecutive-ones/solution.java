class Solution {

    public int minMoves(int[] nums, int k) {
        if (k <= 1) return 0;
        int n = nums.length;
        int[] posArr = new int[n];
        int m = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] == 1) posArr[m++] = i;
        }
        long[] q = new long[m];
        long[] pref = new long[m + 1];
        for (int i = 0; i < m; i++) {
            q[i] = posArr[i] - i;
            pref[i + 1] = pref[i] + q[i];
        }
        long best = Long.MAX_VALUE;
        for (int i = 0; i + k <= m; i++) {
            int mid = i + k / 2;
            long left = q[mid] * (mid - i) - (pref[mid] - pref[i]);
            long right =
                pref[i + k] - pref[mid + 1] - q[mid] * (i + k - 1 - mid);
            long cost = left + right;
            if (cost < best) best = cost;
        }
        return (int) best;
    }
}
