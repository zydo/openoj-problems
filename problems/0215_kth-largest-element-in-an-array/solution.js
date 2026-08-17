/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // Sort a copy ascending (numeric comparator — default sort is lexical);
    // the kth largest sits k slots from the end.
    const sorted = nums.slice().sort((a, b) => a - b);
    return sorted[sorted.length - k];
};
