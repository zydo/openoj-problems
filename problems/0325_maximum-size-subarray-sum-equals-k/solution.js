/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    const first = new Map();
    first.set(0, -1);
    let acc = 0;
    let best = 0;
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        if (first.has(acc - k) && i - first.get(acc - k) > best) {
            best = i - first.get(acc - k);
        }
        if (!first.has(acc)) {
            first.set(acc, i);
        }
    }
    return best;
};
