/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
    const MOD = 1000000007;

    const kadane = (values) => {
        let best = 0;
        let current = 0;
        for (const value of values) {
            current = Math.max(current + value, 0);
            best = Math.max(best, current);
        }
        return best;
    };

    const maxPrefix = (values) => {
        let best = 0;
        let current = 0;
        for (const value of values) {
            current += value;
            best = Math.max(best, current);
        }
        return best;
    };

    const maxSuffix = (values) => {
        let best = 0;
        let current = 0;
        for (let i = values.length - 1; i >= 0; i--) {
            current += values[i];
            best = Math.max(best, current);
        }
        return best;
    };

    let total = 0;
    for (const value of arr) total += value;

    if (k === 1) return kadane(arr) % MOD;
    let best = kadane(arr.concat(arr));
    if (k > 2 && total > 0) {
        best = Math.max(
            best,
            maxSuffix(arr) + maxPrefix(arr) + (k - 2) * total,
        );
    }
    return best % MOD;
};
