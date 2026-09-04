/**
 * @param {number[]} factors
 * @param {number[]} values
 * @param {number} threshold
 * @return {number[]}
 */
var countClearingProducts = function (factors, values, threshold) {
    // a pair works iff factor * value >= threshold; qualifying values are
    // exactly the strongest suffix of the sorted copy
    const sorted = values.slice().sort((a, b) => a - b);
    const m = sorted.length;
    return factors.map((factor) => {
        // minimum value strength that still qualifies for this factor
        const need = Math.ceil(threshold / factor);
        // first index with sorted[idx] >= need
        let lo = 0,
            hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (sorted[mid] < need) lo = mid + 1;
            else hi = mid;
        }
        // suffix [lo, m) is exactly the values that qualify
        return m - lo;
    });
};
