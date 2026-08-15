/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
    nums = nums.slice().sort((a, b) => a - b);
    const n = nums.length;
    const can = (diff) => {
        let count = 0;
        let i = 1;
        while (i < n) {
            if (nums[i] - nums[i - 1] <= diff) {
                count++;
                i += 2;
            } else {
                i += 1;
            }
        }
        return count >= p;
    };
    let lo = 0,
        hi = nums[n - 1] - nums[0];
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (can(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
