/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
    const MOD = 1000000007;
    const sorted = nums.slice().sort((a, b) => a - b);
    const n = sorted.length;
    const pow2 = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }
    let total = 0;
    for (let i = 0; i < n; i++) {
        const d = pow2[i] - pow2[n - 1 - i];
        total = (((total + sorted[i] * d) % MOD) + MOD) % MOD;
    }
    return total;
};
