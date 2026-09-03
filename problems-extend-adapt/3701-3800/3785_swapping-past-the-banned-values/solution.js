/**
 * @param {number[]} nums
 * @param {number[]} banned
 * @return {number}
 */
var dodgeSwaps = function (nums, banned) {
    // A swap repairs at most two bad positions, and two bad positions
    // sharing a value cannot repair each other, so the answer is at least
    // max(ceil(bad/2), worst same-value cluster). A value whose combined
    // count in nums and banned exceeds n has nowhere to hide and makes
    // the task impossible; otherwise both lower bounds are achievable,
    // and their max is the answer.
    const n = nums.length;
    const freq = new Map();
    for (const x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }
    for (const x of banned) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }
    for (const count of freq.values()) {
        if (count >= n + 1) {
            return -1;
        }
    }
    const bad = new Map();
    for (let i = 0; i < n; i++) {
        if (nums[i] === banned[i]) {
            bad.set(nums[i], (bad.get(nums[i]) || 0) + 1);
        }
    }
    let total = 0;
    let worst = 0;
    for (const count of bad.values()) {
        total += count;
        if (count > worst) {
            worst = count;
        }
    }
    return Math.max(Math.ceil(total / 2), worst);
};
