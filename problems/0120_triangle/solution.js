/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const dp = triangle[triangle.length - 1].slice();
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let i = 0; i < triangle[row].length; i++) {
            dp[i] = triangle[row][i] + Math.min(dp[i], dp[i + 1]);
        }
    }
    return dp[0];
};
