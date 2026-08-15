/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
    const stack = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const value = nums[i];
        const remaining = n - i;
        while (
            stack.length &&
            stack[stack.length - 1] > value &&
            stack.length + remaining > k
        ) {
            stack.pop();
        }
        if (stack.length < k) {
            stack.push(value);
        }
    }
    return stack;
};
