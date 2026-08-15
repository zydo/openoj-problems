/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let best = n + 1;
    let window = 0;
    let left = 0;
    for (let right = 0; right < n; right++) {
        window += nums[right];
        while (window >= target) {
            best = Math.min(best, right - left + 1);
            window -= nums[left];
            left++;
        }
    }
    return best === n + 1 ? 0 : best;
};
