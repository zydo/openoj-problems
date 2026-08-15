function preimageSizeFZF(k: number): number {
    function zeta(x: number): number {
        let count = 0;
        let p = 5;
        while (p <= x) {
            count += Math.floor(x / p);
            p *= 5;
        }
        return count;
    }

    let lo = 0;
    let hi = 5 * (k + 1) + 10;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (zeta(mid) < k) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return zeta(lo) === k ? 5 : 0;
}
