/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var pairSumInOrder = function (nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        const total = nums[left] + nums[right];
        // 1-based indices as the problem expects.
        if (total === target) return [left + 1, right + 1];
        // Too small: pairing nums[left] with anything smaller than
        // nums[right] only lowers the sum — retire the left value.
        if (total < target) ++left;
        // Too large: retire the right value symmetrically.
        else --right;
    }
    // Unreachable under the uniqueness promise; keeps the function total.
    return [];
};
