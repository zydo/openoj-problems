/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    const n = bloomDay.length;
    if (m * k > n) {
        return -1;
    }
    const feasible = (day) => {
        let bouquets = 0;
        let run = 0;
        for (const d of bloomDay) {
            if (d <= day) {
                run++;
                if (run === k) {
                    bouquets++;
                    run = 0;
                }
            } else {
                run = 0;
            }
        }
        return bouquets >= m;
    };
    let lo = Infinity;
    let hi = -Infinity;
    for (const d of bloomDay) {
        if (d < lo) {
            lo = d;
        }
        if (d > hi) {
            hi = d;
        }
    }
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
