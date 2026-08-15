/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (nums, cost) {
    const n = nums.length;
    const idx = Array.from({ length: n }, (_, i) => i);
    idx.sort((a, b) => nums[a] - nums[b]);
    let total = 0;
    for (const c of cost) total += c;
    const target = Math.floor((total + 1) / 2);
    let prefix = 0;
    let median = nums[idx[n - 1]];
    for (const i of idx) {
        prefix += cost[i];
        if (prefix >= target) {
            median = nums[i];
            break;
        }
    }
    let ans = 0;
    for (const i of idx) {
        ans += Math.abs(nums[i] - median) * cost[i];
    }
    return ans;
};
