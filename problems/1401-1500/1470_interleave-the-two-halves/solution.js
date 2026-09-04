/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var interleave = function (nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }
    return result;
};
