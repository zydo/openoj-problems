/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    const n = questions.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        const points = questions[i][0];
        const brainpower = questions[i][1];
        const nxt = i + brainpower + 1;
        const take = points + (nxt <= n ? dp[nxt] : 0);
        dp[i] = Math.max(dp[i + 1], take);
    }
    return dp[0];
};
