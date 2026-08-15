/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
    const sorted = coins.slice().sort((a, b) => a - b);
    let reachable = 0;
    for (const coin of sorted) {
        if (coin > reachable + 1) {
            break;
        }
        reachable += coin;
    }
    return reachable + 1;
};
