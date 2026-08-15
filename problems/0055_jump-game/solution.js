/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let farthest = 0;
    const last = nums.length - 1;
    for (let index = 0; index < nums.length; index++) {
        const reach = nums[index];
        if (index > farthest) return false;
        if (index + reach > farthest) farthest = index + reach;
        if (farthest >= last) return true;
    }
    return true;
};
