/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var fewestRemovals = function (nums, k) {
    // Each operation removes the current smallest element, so exactly the
    // values strictly below k get removed, each exactly once.
    let count = 0;
    for (const value of nums) {
        if (value < k) ++count;
    }
    return count;
};
