/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    if (nums.length < 3) {
        return false;
    }
    const stack = [];
    let third = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
        const value = nums[i];
        if (value < third) {
            return true;
        }
        while (stack.length > 0 && stack[stack.length - 1] < value) {
            third = stack.pop();
        }
        stack.push(value);
    }
    return false;
};
