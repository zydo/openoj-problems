/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const sorted = nums.slice().sort((a, b) => a - b);
    return sorted[sorted.length - k];
};
