/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
    const storesNeeded = (x) => {
        let total = 0;
        for (const q of quantities) {
            total += Math.ceil(q / x);
        }
        return total;
    };

    let lo = 1;
    let hi = Math.max(...quantities);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (storesNeeded(mid) <= n) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
