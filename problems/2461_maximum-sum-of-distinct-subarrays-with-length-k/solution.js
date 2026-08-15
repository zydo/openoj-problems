/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    const counts = new Map();
    let windowSum = 0;
    let best = 0;
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        counts.set(value, (counts.get(value) || 0) + 1);
        windowSum += value;
        if (i >= k) {
            const old = nums[i - k];
            const c = counts.get(old) - 1;
            if (c === 0) {
                counts.delete(old);
            } else {
                counts.set(old, c);
            }
            windowSum -= old;
        }
        if (i >= k - 1 && counts.size === k && windowSum > best) {
            best = windowSum;
        }
    }
    return best;
};
