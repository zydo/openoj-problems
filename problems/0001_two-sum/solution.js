/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const seen = new Map();
    for (let index = 0; index < nums.length; ++index) {
        const earlier = seen.get(target - nums[index]);
        if (earlier !== undefined) return [earlier, index];
        seen.set(nums[index], index);
    }
    return [];
};
