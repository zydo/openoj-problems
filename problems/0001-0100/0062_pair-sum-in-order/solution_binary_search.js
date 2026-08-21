/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var pairSumInOrder = function (nums, target) {
    const n = nums.length;
    for (let i = 0; i + 1 < n; i++) {
        const complement = target - nums[i];
        // The sorted remainder nums[i+1..] is the only legal partner
        // range: a position cannot pair with itself.
        let lo = i + 1,
            hi = n - 1;
        while (lo <= hi) {
            const mid = lo + Math.floor((hi - lo) / 2);
            if (nums[mid] === complement) {
                // 1-based indices, smaller position first.
                return [i + 1, mid + 1];
            }
            if (nums[mid] < complement) lo = mid + 1;
            // The complement sits left of mid.
            else hi = mid - 1;
        }
    }
    // Unreachable under the uniqueness promise; keeps the function total.
    return [];
};
