/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var pairSumInOrder = function (nums, target) {
    // Sorted order lets two indexes converge from both ends: the smallest
    // and largest remaining values stand in for every candidate pair, and
    // no extra storage is needed, as the statement demands.
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        const total = nums[low] + nums[high];
        if (total === target) {
            // The statement's contract is 1-indexed.
            return [low + 1, high + 1];
        }
        // Too small: nums[low] plus anything above nums[high] only
        // shrinks, so low has no partner left.
        if (total < target) {
            ++low;
        } else {
            // Too large: nums[high] plus anything below nums[low] only
            // shrinks, so high has no partner left.
            --high;
        }
    }
    return [];
};
