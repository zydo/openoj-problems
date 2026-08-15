/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const nextGreater = new Map();
    const stack = [];
    for (const value of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < value) {
            nextGreater.set(stack.pop(), value);
        }
        stack.push(value);
    }
    for (const value of stack) {
        nextGreater.set(value, -1);
    }
    return nums1.map((value) => nextGreater.get(value));
};
