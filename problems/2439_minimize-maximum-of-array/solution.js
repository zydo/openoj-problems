/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
    let total = 0;
    let best = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        const candidate = Math.floor((total + i) / (i + 1));
        if (candidate > best) {
            best = candidate;
        }
    }
    return best;
};
