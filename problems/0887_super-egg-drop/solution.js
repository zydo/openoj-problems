/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    const dp = new Array(k + 1).fill(0);
    let moves = 0;
    while (dp[k] < n) {
        moves++;
        for (let e = k; e >= 1; e--) {
            dp[e] = dp[e - 1] + dp[e] + 1;
        }
    }
    return moves;
};
