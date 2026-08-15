/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let patches = 0;
    let i = 0;
    let reachable = 1;
    while (reachable <= n) {
        if (i < nums.length && nums[i] <= reachable) {
            reachable += nums[i];
            i++;
        } else {
            reachable += reachable;
            patches++;
        }
    }
    return patches;
};
