/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    const n = prices.length;
    if (n < 2 || k === 0) return 0;
    if (k >= Math.floor(n / 2)) {
        // The limit can never bind: sum every upward move.
        let total = 0;
        for (let i = 1; i < n; i++)
            total += Math.max(prices[i] - prices[i - 1], 0);
        return total;
    }
    const buy = new Array(k + 1).fill(-Infinity);
    const sell = new Array(k + 1).fill(0);
    for (const price of prices) {
        for (let j = 1; j <= k; j++) {
            buy[j] = Math.max(buy[j], sell[j - 1] - price);
            sell[j] = Math.max(sell[j], buy[j] + price);
        }
    }
    return sell[k];
};
