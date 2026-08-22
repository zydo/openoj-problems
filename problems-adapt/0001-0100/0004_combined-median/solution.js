/**
 * @param {number[]} first
 * @param {number[]} second
 * @return {number}
 */
var combinedMedian = function (first, second) {
    // Keep first as the shorter array: smaller search space, and the
    // partner cut j is guaranteed to land inside [0, n].
    if (first.length > second.length) {
        [first, second] = [second, first];
    }
    const m = first.length,
        n = second.length;
    const total = m + n;
    const half = Math.floor(total / 2);
    let lo = 0,
        hi = m;
    while (true) {
        // Binary-search the cut: i = elements first gives to the left
        // half; the cut in second is then forced by the half's size.
        const i = Math.floor((lo + hi) / 2);
        const j = half - i;
        // Sentinels make edge cuts well-defined: a cut at 0 or past the
        // end needs no special casing.
        const aLeft = i > 0 ? first[i - 1] : -Infinity;
        const aRight = i < m ? first[i] : Infinity;
        const bLeft = j > 0 ? second[j - 1] : -Infinity;
        const bRight = j < n ? second[j] : Infinity;
        // Both arrays are sorted, so comparing across the cut suffices:
        // everything on the left is <= everything on the right.
        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2 === 1) {
                // Odd total: the left half was made the smaller side.
                return Math.min(aRight, bRight);
            }
            return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
        }
        if (aLeft > bRight) {
            // first is contributing too many elements to the left half.
            hi = i - 1;
        } else {
            lo = i + 1;
        }
    }
};
