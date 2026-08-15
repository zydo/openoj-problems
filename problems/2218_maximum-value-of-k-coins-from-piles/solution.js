/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
    let dp = new Array(k + 1).fill(0);
    for (const pile of piles) {
        const prefix = [0];
        for (const coin of pile) {
            prefix.push(prefix[prefix.length - 1] + coin);
        }
        const takeMax = Math.min(pile.length, k);
        const ndp = new Array(k + 1).fill(0);
        for (let j = 0; j <= k; j++) {
            let value = dp[j];
            const lim = Math.min(takeMax, j);
            for (let t = 1; t <= lim; t++) {
                const cand = dp[j - t] + prefix[t];
                if (cand > value) value = cand;
            }
            ndp[j] = value;
        }
        dp = ndp;
    }
    return dp[k];
};
