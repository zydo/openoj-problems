/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumOperations = function (nums, target) {
    let prev = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i] - target[i];
        if (cur > prev) total += cur - prev;
        prev = cur;
    }
    if (prev < 0) total += -prev;
    return total;
};
