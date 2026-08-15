/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let hold = -1000000000,
        sold = 0,
        rest = 0;
    for (const price of prices) {
        const prevSold = sold;
        hold = Math.max(hold, rest - price);
        sold = hold + price;
        rest = Math.max(rest, prevSold);
    }
    return Math.max(sold, rest);
};
