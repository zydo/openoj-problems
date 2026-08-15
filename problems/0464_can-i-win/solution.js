/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= 0) {
        return true;
    }
    if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal) {
        return false;
    }
    const memo = new Map();

    const canWin = (state, remaining) => {
        if (memo.has(state)) {
            return memo.get(state);
        }
        for (let choice = 1; choice <= maxChoosableInteger; choice++) {
            const bit = 1 << (choice - 1);
            if (state & bit) {
                continue;
            }
            if (
                choice >= remaining ||
                !canWin(state | bit, remaining - choice)
            ) {
                memo.set(state, true);
                return true;
            }
        }
        memo.set(state, false);
        return false;
    };

    return canWin(0, desiredTotal);
};
