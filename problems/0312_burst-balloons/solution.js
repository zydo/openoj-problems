/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    const padded = [1, ...nums, 1];
    const m = padded.length;
    const dp = Array.from({ length: m }, () => new Array(m).fill(0));
    for (let length = 1; length < m - 1; length++) {
        for (let left = 1; left < m - length; left++) {
            const right = left + length - 1;
            for (let k = left; k <= right; k++) {
                const coins =
                    padded[left - 1] * padded[k] * padded[right + 1] +
                    dp[left][k - 1] +
                    dp[k + 1][right];
                if (coins > dp[left][right]) {
                    dp[left][right] = coins;
                }
            }
        }
    }
    return dp[1][m - 2];
};
