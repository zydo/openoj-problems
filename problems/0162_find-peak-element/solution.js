/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const leftOk = i === 0 || nums[i] > nums[i - 1];
        const rightOk = i === n - 1 || nums[i] > nums[i + 1];
        if (leftOk && rightOk) {
            return i;
        }
    }
    return -1;
};
