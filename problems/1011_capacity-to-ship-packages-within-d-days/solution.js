/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    function feasible(cap) {
        let need = 1;
        let current = 0;
        for (const w of weights) {
            if (current + w > cap) {
                need += 1;
                if (need > days) {
                    return false;
                }
                current = w;
            } else {
                current += w;
            }
        }
        return true;
    }

    let lo = Math.max(...weights);
    let hi = weights.reduce((a, b) => a + b, 0);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (feasible(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
