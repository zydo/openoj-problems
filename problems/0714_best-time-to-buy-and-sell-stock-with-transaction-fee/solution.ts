function maxProfit(prices: number[], fee: number): number {
    let cash = 0,
        hold = -1e18;
    for (const price of prices) {
        const newCash = Math.max(cash, hold + price - fee);
        const newHold = Math.max(hold, cash - price);
        cash = newCash;
        hold = newHold;
    }
    return cash;
}
