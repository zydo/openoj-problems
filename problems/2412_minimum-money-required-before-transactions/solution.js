/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function (transactions) {
    let totalLose = 0;
    let maxCashbackLosing = 0;
    let maxCostWinning = 0;
    for (const [cost, cashback] of transactions) {
        if (cashback < cost) {
            totalLose += cost - cashback;
            if (cashback > maxCashbackLosing) maxCashbackLosing = cashback;
        } else {
            if (cost > maxCostWinning) maxCostWinning = cost;
        }
    }
    return totalLose + Math.max(maxCashbackLosing, maxCostWinning);
};
