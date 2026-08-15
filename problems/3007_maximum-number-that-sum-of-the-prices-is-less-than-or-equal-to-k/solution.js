/**
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
var findMaximumNumber = function (k, x) {
    const K = BigInt(k);

    // accumulated price of n: sum over bit positions x, 2x, ... of the count
    // of numbers in [1, n] with that bit set. Uses BigInt so comparisons with
    // k up to 1e15 (and search bounds up to 1e16+) stay exact.
    function priceSum(n) {
        let total = 0n;
        let p = x;
        while (1n << BigInt(p - 1) <= n) {
            const b = BigInt(p - 1);
            const cycle = 1n << (b + 1n);
            const np1 = n + 1n;
            const full = np1 / cycle;
            const rem = np1 % cycle;
            const half = 1n << b;
            let extra = rem - half;
            if (extra < 0n) extra = 0n;
            total += full * half + extra;
            p += x;
        }
        return total;
    }

    let lo = 0n;
    let hi = 10000000000000000n;
    while (priceSum(hi) <= K) {
        hi *= 2n;
    }
    while (lo + 1n < hi) {
        const mid = (lo + hi) / 2n;
        if (priceSum(mid) <= K) {
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return Number(lo);
};
