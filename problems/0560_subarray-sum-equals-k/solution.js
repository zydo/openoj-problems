/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const prefixCounts = new Map([[0, 1]]);
    let running = 0;
    let total = 0;
    for (const value of nums) {
        running += value;
        total += prefixCounts.get(running - k) || 0;
        prefixCounts.set(running, (prefixCounts.get(running) || 0) + 1);
    }
    return total;
};
