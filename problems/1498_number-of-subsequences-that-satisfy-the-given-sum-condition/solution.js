/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
    const MOD = 1000000007;
    nums = nums.slice().sort((a, b) => a - b);
    const n = nums.length;
    const powers = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        powers[i] = (powers[i - 1] * 2) % MOD;
    }
    let total = 0;
    let lo = 0,
        hi = n - 1;
    while (lo <= hi) {
        if (nums[lo] + nums[hi] <= target) {
            total = (total + powers[hi - lo]) % MOD;
            lo++;
        } else {
            hi--;
        }
    }
    return total;
};
