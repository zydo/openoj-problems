/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    function can(c) {
        if (c === 0) return true;
        let cnt = 0;
        for (const p of candies) {
            cnt += Math.floor(p / c);
            if (cnt >= k) return true;
        }
        return cnt >= k;
    }

    let lo = 0,
        hi = 0;
    for (const p of candies) {
        if (p > hi) hi = p;
    }
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo + 1) / 2);
        if (can(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};
