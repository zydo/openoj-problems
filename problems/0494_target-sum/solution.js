/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let dp = new Map([[0, 1]]);
    for (const value of nums) {
        const nxt = new Map();
        for (const [total, count] of dp) {
            nxt.set(total + value, (nxt.get(total + value) || 0) + count);
            nxt.set(total - value, (nxt.get(total - value) || 0) + count);
        }
        dp = nxt;
    }
    return dp.get(target) || 0;
};
