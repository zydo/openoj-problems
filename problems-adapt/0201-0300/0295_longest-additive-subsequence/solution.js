/**
 * @param {number[]} nums
 * @return {number}
 */
var longestAdditiveSubseq = function (nums) {
    const n = nums.length;
    const indexOf = new Map();
    for (let i = 0; i < n; i++) {
        indexOf.set(nums[i], i);
    }
    // dp[j][i] = longest additive subsequence ending with nums[j], nums[i]
    const dp = Array.from({ length: n }, () => new Array(n).fill(2));
    let best = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const need = nums[i] - nums[j];
            if (need < nums[j] && indexOf.has(need)) {
                const k = indexOf.get(need);
                dp[j][i] = dp[k][j] + 1;
                if (dp[j][i] > best) {
                    best = dp[j][i];
                }
            }
        }
    }
    return best >= 3 ? best : 0;
};
