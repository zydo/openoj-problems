/**
 * @param {number[]} slots
 * @param {number} m
 * @return {number}
 */
var largestMinGap = function (slots, m) {
    slots = slots.slice().sort((a, b) => a - b);

    const feasible = (distance) => {
        // Greedy: the first marker sits at the leftmost slot (count = 1),
        // then each marker takes the first slot at least `distance` beyond
        // the last placed one. Earliest-possible placement is never worse,
        // so failure here means no placement works.
        let count = 1;
        let last = slots[0];
        for (let i = 1; i < slots.length; i++) {
            if (slots[i] - last >= distance) {
                count++;
                last = slots[i];
                if (count >= m) {
                    // All markers placed — exit early.
                    return true;
                }
            }
        }
        return count >= m;
    };

    // Feasibility is monotone in the spacing, so binary search the largest
    // feasible d over [1, span]; the upper-mid form keeps the search moving
    // when lo and hi become adjacent.
    let lo = 1;
    let hi = slots[slots.length - 1] - slots[0];
    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (feasible(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};
