/**
 * @param {number[]} piles
 * @param {number} maxSplits
 * @return {number}
 */
var minimumLargestPile = function (piles, maxSplits) {
    // A pile of v must end as ceil(v/penalty) pieces; each split creates
    // exactly one new pile, so it costs ceil(v/penalty) - 1 =
    // floor((v - 1) / penalty) splits — achievable with near-equal
    // pieces, all of size <= penalty.
    const needed = (penalty) => {
        let total = 0;
        for (const size of piles) {
            total += Math.floor((size - 1) / penalty);
        }
        return total;
    };

    // Feasibility is monotone in the penalty, so binary search the
    // smallest feasible value; max(piles) needs zero splits.
    let lo = 1;
    let hi = 0;
    for (const size of piles) {
        if (size > hi) hi = size;
    }
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (needed(mid) <= maxSplits) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
