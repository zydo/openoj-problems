/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let best = 0;
    let minPrice = prices[0];
    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > best) {
            best = price - minPrice;
        }
    }
    return best;
};
