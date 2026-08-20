/**
 * @param {number[][]} deals
 * @return {number}
 */
var minimumStartingCash = function (deals) {
    let totalDrain = 0;
    let maxRebateLosing = 0;
    let maxPriceWinning = 0;
    for (const [price, rebate] of deals) {
        // losing deals (rebate < price) drain money permanently; profitable deals don't
        if (rebate < price) {
            // losing deals' total drain is fixed regardless of ordering
            totalDrain += price - rebate;
            // worst order: largest-rebate losing deal goes last, after every
            // other drain, yet its full price must still be covered
            if (rebate > maxRebateLosing) maxRebateLosing = rebate;
        } else {
            // profitable deals only matter via their largest upfront price, paid at
            // the lowest-funds point (right after the losing block)
            if (price > maxPriceWinning) maxPriceWinning = price;
        }
    }
    // answer = totalDrain + max(last losing deal's rebate, top profitable deal's price)
    return totalDrain + Math.max(maxRebateLosing, maxPriceWinning);
};
