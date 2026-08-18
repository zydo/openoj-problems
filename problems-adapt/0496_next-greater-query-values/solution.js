/**
 * @param {number[]} queries
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterForQueries = function (queries, nums) {
    // One scan of nums answers every query: the stack holds values still
    // waiting for their next greater element.
    const nextGreater = new Map();
    const stack = [];
    for (const value of nums) {
        // The current value is the FIRST greater value to the right of
        // each popped element (anything closer would have popped them
        // already); each element is pushed once, popped at most once.
        while (stack.length > 0 && stack[stack.length - 1] < value) {
            nextGreater.set(stack.pop(), value);
        }
        stack.push(value);
    }
    // Whatever survives on the stack has nothing greater to its right.
    for (const value of stack) {
        nextGreater.set(value, -1);
    }
    // Values are unique and queries is a subset of nums, so every lookup
    // hits.
    return queries.map((value) => nextGreater.get(value));
};
