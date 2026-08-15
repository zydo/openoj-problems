/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let prev2 = 0,
        prev1 = 0;
    for (const c of cost) {
        const cur = c + Math.min(prev1, prev2);
        prev2 = prev1;
        prev1 = cur;
    }
    return Math.min(prev1, prev2);
};
