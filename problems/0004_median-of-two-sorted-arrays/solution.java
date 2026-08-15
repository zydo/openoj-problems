class Solution {

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            int[] t = nums1;
            nums1 = nums2;
            nums2 = t;
        }
        int m = nums1.length,
            n = nums2.length;
        int total = m + n;
        int half = total / 2;
        int lo = 0,
            hi = m;
        while (true) {
            int i = (lo + hi) >>> 1;
            int j = half - i;
            long aLeft = i > 0 ? nums1[i - 1] : Long.MIN_VALUE;
            long aRight = i < m ? nums1[i] : Long.MAX_VALUE;
            long bLeft = j > 0 ? nums2[j - 1] : Long.MIN_VALUE;
            long bRight = j < n ? nums2[j] : Long.MAX_VALUE;
            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2 == 1) {
                    return (double) Math.min(aRight, bRight);
                }
                return (
                    (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2.0
                );
            }
            if (aLeft > bRight) {
                hi = i - 1;
            } else {
                lo = i + 1;
            }
        }
    }
}
