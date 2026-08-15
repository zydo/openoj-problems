function findMaximumNumber(k: number, x: number): number {
    const K = BigInt(k);

    function priceSum(n: bigint): bigint {
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
}
