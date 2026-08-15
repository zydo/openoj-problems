/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    let total = 0;
    for (const s of stones) {
        total += s;
    }
    const target = Math.floor(total / 2);
    const reachable = new Array(target + 1).fill(false);
    reachable[0] = true;
    for (const value of stones) {
        for (let s = target; s >= value; s--) {
            if (reachable[s - value]) {
                reachable[s] = true;
            }
        }
    }
    let best = 0;
    for (let s = target; s >= 0; s--) {
        if (reachable[s]) {
            best = s;
            break;
        }
    }
    return total - 2 * best;
};
