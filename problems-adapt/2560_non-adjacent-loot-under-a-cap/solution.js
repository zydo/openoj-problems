/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minNonAdjacentLootCap = function (nums, k) {
    const feasible = (cap) => {
        // Greedy scan: take every position that fits under the cap and skip its
        // neighbour. Taking an eligible position is never worse than skipping it
        // — skipping forfeits a pick without unlocking a better one — so this
        // counts the maximum non-adjacent picks.
        let count = 0;
        let i = 0;
        while (i < nums.length) {
            if (nums[i] <= cap) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= k;
    };
    let lo = nums[0];
    let hi = nums[0];
    for (const x of nums) {
        lo = Math.min(lo, x);
        hi = Math.max(hi, x);
    }
    // "k non-adjacent positions all <= cap" is monotone in cap, so binary search
    // the smallest feasible cap over the value range [min, max] — raw values,
    // so nums needs no sorting. Lower-mid since we minimize.
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (feasible(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
