/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums = [...nums].sort((a, b) => a - b);
    const n = nums.length;
    let count = 0;
    for (let i = n - 1; i > 1; i--) {
        if (nums[i] === 0) break;
        let lo = 0,
            hi = i - 1;
        while (lo < hi) {
            if (nums[lo] + nums[hi] > nums[i]) {
                count += hi - lo;
                hi--;
            } else {
                lo++;
            }
        }
    }
    return count;
};
