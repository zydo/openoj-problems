function minSwap(nums1: number[], nums2: number[]): number {
    const INF = Infinity;
    const n = nums1.length;
    let keep = 0;
    let swap = 1;
    for (let i = 1; i < n; i++) {
        let nkeep = INF;
        let nswap = INF;
        const a1 = nums1[i - 1],
            b1 = nums2[i - 1];
        const a2 = nums1[i],
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
