/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    let minRank = Infinity;
    for (const r of ranks) {
        if (r < minRank) minRank = r;
    }
    const isqrt = (x) => {
        let r = Math.floor(Math.sqrt(x));
        while (r > 0 && r * r > x) {
            r--;
        }
        while ((r + 1) * (r + 1) <= x) {
            r++;
        }
        return r;
    };
    const feasible = (t) => {
        let total = 0;
        for (const r of ranks) {
            total += isqrt(Math.floor(t / r));
            if (total >= cars) {
                return true;
            }
        }
        return total >= cars;
    };
    let lo = 1,
        hi = minRank * cars * cars;
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
