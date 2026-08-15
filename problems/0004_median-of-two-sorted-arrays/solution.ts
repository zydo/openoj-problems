function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length,
        n = nums2.length;
    const total = m + n;
    const half = Math.floor(total / 2);
    let lo = 0,
        hi = m;
    while (true) {
        const i = Math.floor((lo + hi) / 2);
        const j = half - i;
        const aLeft = i > 0 ? nums1[i - 1] : -Infinity;
        const aRight = i < m ? nums1[i] : Infinity;
        const bLeft = j > 0 ? nums2[j - 1] : -Infinity;
        const bRight = j < n ? nums2[j] : Infinity;
        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2 === 1) {
                return Math.min(aRight, bRight);
            }
            return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
        }
        if (aLeft > bRight) {
            hi = i - 1;
        } else {
            lo = i + 1;
        }
    }
}
