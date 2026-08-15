/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function (nums, numSlots) {
    const positions = 2 * numSlots;
    const size = 1 << positions;
    const dp = new Array(size).fill(-1);
    dp[0] = 0;
    let best = 0;
    for (let mask = 0; mask < size; mask++) {
        if (dp[mask] < 0) {
            continue;
        }
        let i = 0;
        for (let x = mask; x; x &= x - 1) {
            i++;
        }
        if (i === nums.length) {
            best = Math.max(best, dp[mask]);
            continue;
        }
        for (let p = 0; p < positions; p++) {
            if (mask & (1 << p)) {
                continue;
            }
            const nxt = dp[mask] + (nums[i] & ((p >> 1) + 1));
            const slotMask = mask | (1 << p);
            if (nxt > dp[slotMask]) {
                dp[slotMask] = nxt;
            }
        }
    }
    return best;
};
