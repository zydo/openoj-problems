/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
    const n = nums.length;
    const missing = (i) => nums[i] - nums[0] - i;
    if (missing(n - 1) < k) {
        return nums[n - 1] + (k - missing(n - 1));
    }
    let lo = 0,
        hi = n - 1;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (missing(mid) >= k) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return nums[lo - 1] + (k - missing(lo - 1));
};
