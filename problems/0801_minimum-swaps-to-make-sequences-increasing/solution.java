class Solution {

    public int minSwap(int[] nums1, int[] nums2) {
        final int INF = Integer.MAX_VALUE / 2;
        int n = nums1.length;
        int keep = 0;
        int swap = 1;
        for (int i = 1; i < n; i++) {
            int nkeep = INF;
            int nswap = INF;
            int a1 = nums1[i - 1],
                b1 = nums2[i - 1];
            int a2 = nums1[i],
                b2 = nums2[i];
            if (a1 < a2 && b1 < b2) {
                nkeep = Math.min(nkeep, keep);
                nswap = Math.min(nswap, swap + 1);
            }
            if (a1 < b2 && b1 < a2) {
                nkeep = Math.min(nkeep, swap);
                nswap = Math.min(nswap, keep + 1);
            }
            keep = nkeep;
            swap = nswap;
        }
        return Math.min(keep, swap);
    }
}
