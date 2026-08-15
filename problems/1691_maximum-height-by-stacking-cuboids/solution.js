/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function (cuboids) {
    const boxes = cuboids
        .map((c) => c.slice().sort((a, b) => a - b))
        .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    const n = boxes.length;
    const dp = boxes.map((b) => b[2]);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (
                boxes[j][0] <= boxes[i][0] &&
                boxes[j][1] <= boxes[i][1] &&
                boxes[j][2] <= boxes[i][2]
            ) {
                if (dp[j] + boxes[i][2] > dp[i]) {
                    dp[i] = dp[j] + boxes[i][2];
                }
            }
        }
    }
    return Math.max(...dp);
};
