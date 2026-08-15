/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var widestPairOfIndices = function (nums1, nums2) {
    const first = new Map([[0, -1]]);
    let diff = 0;
    let best = 0;
    for (let i = 0; i < nums1.length; i++) {
        diff += nums1[i] - nums2[i];
        if (first.has(diff)) {
            const w = i - first.get(diff);
            if (w > best) best = w;
        } else {
            first.set(diff, i);
        }
    }
    return best;
};
