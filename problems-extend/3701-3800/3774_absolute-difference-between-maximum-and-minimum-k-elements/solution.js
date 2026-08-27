/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums, k) {
    // After sorting, the k smallest elements occupy the front of the
    // array and the k largest the back; equal values may straddle the
    // cut, but their contribution to each sum is unchanged.
    nums.sort((a, b) => a - b);
    const sum = (arr) => arr.reduce((a, b) => a + b, 0);
    return sum(nums.slice(-k)) - sum(nums.slice(0, k));
};
