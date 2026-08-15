/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    const n = nums.length;
    const dp = nums.slice();
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i + length - 1 < n; i++) {
            const j = i + length - 1;
            dp[i] = Math.max(nums[i] - dp[i + 1], nums[j] - dp[i]);
        }
    }
    return dp[0] >= 0;
};
