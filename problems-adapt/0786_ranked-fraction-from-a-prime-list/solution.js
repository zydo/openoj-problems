/**
 * @param {number[]} values
 * @param {number} rank
 * @return {number[]}
 */
var rankedPrimeFraction = function (values, rank) {
    const n = values.length;
    let lo = 0.0,
        hi = 1.0;
    let ans = [values[0], values[n - 1]];
    // Binary search on the fraction value; count fractions <= mid.
    for (let it = 0; it < 50; it++) {
        const mid = (lo + hi) / 2.0;
        let count = 0;
        let best = 0.0;
        let bestPair = [values[0], values[n - 1]];
        let j = 1;
        for (let i = 0; i < n - 1; i++) {
            while (j < n && values[i] > mid * values[j]) {
                j += 1;
            }
            count += n - j;
            if (j < n) {
                const val = values[i] / values[j];
                if (val > best) {
                    best = val;
                    bestPair = [values[i], values[j]];
                }
            }
        }
        if (count >= rank) {
            hi = mid;
            ans = bestPair;
        } else {
            lo = mid;
        }
    }
    return ans;
};
