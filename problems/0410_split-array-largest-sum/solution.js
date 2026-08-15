/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    function feasible(limit) {
        let pieces = 1;
        let current = 0;
        for (const value of nums) {
            if (current + value > limit) {
                pieces++;
                if (pieces > k) {
                    return false;
                }
                current = value;
            } else {
                current += value;
            }
        }
        return true;
    }

    let lo = -Infinity;
    let hi = 0;
    for (const value of nums) {
        if (value > lo) {
            lo = value;
        }
        hi += value;
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
