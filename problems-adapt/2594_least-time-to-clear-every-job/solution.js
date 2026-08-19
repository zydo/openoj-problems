/**
 * @param {number[]} factors
 * @param {number} jobs
 * @return {number}
 */
var leastTime = function (factors, jobs) {
    let minRank = Infinity;
    for (const r of factors) {
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
        // Within budget t, a rank-r mechanic finishes r*n^2 <= t jobs, so
        // its capacity is isqrt(t / r); sum capacities with early exit.
        let total = 0;
        for (const r of factors) {
            total += isqrt(Math.floor(t / r));
            if (total >= jobs) {
                return true;
            }
        }
        return total >= jobs;
    };
    // Feasibility is monotone in t (mechanics can idle), so binary search the
    // minimum feasible time. Upper bound: the best mechanic repairing every
    // car alone, min(factors) * jobs^2.
    let lo = 1,
        hi = minRank * jobs * jobs;
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
