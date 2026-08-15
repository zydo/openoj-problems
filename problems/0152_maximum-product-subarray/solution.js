/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let best = nums[0];
    let curMax = nums[0];
    let curMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const value = nums[i];
        if (value < 0) {
            const tmp = curMax;
            curMax = curMin;
            curMin = tmp;
        }
        curMax = Math.max(value, curMax * value);
        curMin = Math.min(value, curMin * value);
        best = Math.max(best, curMax);
    }
    return best;
};
