/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
    const positions = cuts.slice();
    positions.push(0, n);
    positions.sort((a, b) => a - b);
    const size = positions.length;
    const dp = Array.from({ length: size }, () => new Array(size).fill(0));
    for (let length = 2; length < size; length++) {
        for (let i = 0; i + length < size; i++) {
            const j = i + length;
            let best = Infinity;
            for (let k = i + 1; k < j; k++) {
                if (dp[i][k] + dp[k][j] < best) best = dp[i][k] + dp[k][j];
            }
            dp[i][j] = best + (positions[j] - positions[i]);
        }
    }
    return dp[0][size - 1];
};
