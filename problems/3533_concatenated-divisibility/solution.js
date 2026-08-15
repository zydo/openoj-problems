/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var concatenatedDivisibility = function (nums, k) {
    const n = nums.length;
    const lens = new Array(n);
    for (let i = 0; i < n; i++) {
        lens[i] = String(nums[i]).length;
    }
    const pow10 = new Array(8);
    pow10[0] = 1;
    for (let i = 1; i < 8; i++) pow10[i] = pow10[i - 1] * 10;

    const full = (1 << n) - 1;
    const dp = [];
    for (let mask = 0; mask <= full; mask++) dp.push(new Array(k).fill(false));
    dp[full][0] = true;
    for (let mask = full - 1; mask >= 0; mask--) {
        for (let rem = 0; rem < k; rem++) {
            for (let i = 0; i < n; i++) {
                if (((mask >> i) & 1) === 0) {
                    const nrem = (rem * pow10[lens[i]] + nums[i]) % k;
                    if (dp[mask | (1 << i)][nrem]) {
                        dp[mask][rem] = true;
                        break;
                    }
                }
            }
        }
    }

    if (!dp[0][0]) return [];

    const order = Array.from({ length: n }, (_, i) => i);
    order.sort((a, b) => nums[a] - nums[b] || a - b);
    const res = [];
    let mask = 0;
    let rem = 0;
    for (let step = 0; step < n; step++) {
        for (const i of order) {
            if (((mask >> i) & 1) === 0) {
                const nrem = (rem * pow10[lens[i]] + nums[i]) % k;
                if (dp[mask | (1 << i)][nrem]) {
                    res.push(nums[i]);
                    mask |= 1 << i;
                    rem = nrem;
                    break;
                }
            }
        }
    }
    return res;
};
