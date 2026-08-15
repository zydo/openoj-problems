class Solution {

    public int findLength(int[] nums1, int[] nums2) {
        int m = nums1.length,
            n = nums2.length;
        int[] dp = new int[n + 1];
        int best = 0;
        for (int i = m - 1; i >= 0; i--) {
            int[] cur = new int[n + 1];
            for (int j = n - 1; j >= 0; j--) {
                if (nums1[i] == nums2[j]) {
                    cur[j] = dp[j + 1] + 1;
                    if (cur[j] > best) best = cur[j];
                }
            }
            dp = cur;
        }
        return best;
    }
}
