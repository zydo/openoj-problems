/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
    const p = price.slice().sort((a, b) => a - b);
    const feasible = (x) => {
        let count = 1;
        let last = p[0];
        for (let i = 1; i < p.length; i++) {
            if (p[i] - last >= x) {
                count++;
                last = p[i];
            }
        }
        return count >= k;
    };
    let lo = 0,
        hi = p[p.length - 1] - p[0];
    while (lo < hi) {
        const mid = (lo + (hi - lo + 1) / 2) | 0;
        if (feasible(mid)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
};
