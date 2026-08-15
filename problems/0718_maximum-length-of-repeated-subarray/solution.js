/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    const m = nums1.length,
        n = nums2.length;
    let dp = new Array(n + 1).fill(0);
    let best = 0;
    for (let i = m - 1; i >= 0; i--) {
        const cur = new Array(n + 1).fill(0);
        for (let j = n - 1; j >= 0; j--) {
            if (nums1[i] === nums2[j]) {
                cur[j] = dp[j + 1] + 1;
                if (cur[j] > best) best = cur[j];
            }
        }
        dp = cur;
    }
    return best;
};
