/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
    const n = nums.length;
    const dp = new Array(n);
    dp[0] = nums[0];
    const window = [0];
    let head = 0;
    for (let i = 1; i < n; i++) {
        while (window[head] < i - k) {
            head++;
        }
        dp[i] = nums[i] + dp[window[head]];
        let tail = window.length;
        while (tail > head && dp[window[tail - 1]] <= dp[i]) {
            tail--;
        }
        window.length = tail;
        window.push(i);
    }
    return dp[n - 1];
};
