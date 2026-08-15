/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % k !== 0) return false;
    const target = total / k;
    nums.sort((a, b) => b - a);
    if (nums[0] > target) return false;
    const n = nums.length;
    const full = (1 << n) - 1;
    const memo = new Map();

    const dfs = (mask, curr) => {
        if (mask === full) return true;
        if (curr === target) return dfs(mask, 0);
        const key = mask * (target + 1) + curr;
        if (memo.has(key)) return memo.get(key);
        for (let i = 0; i < n; i++) {
            if ((mask >> i) & 1) continue;
            if (curr + nums[i] <= target) {
                if (dfs(mask | (1 << i), curr + nums[i])) {
                    memo.set(key, true);
                    return true;
                }
            }
        }
        memo.set(key, false);
        return false;
    };

    return dfs(0, 0);
};
