function findKthNumber(m: number, n: number, k: number): number {
    const countAtMost = (x: number): boolean => {
        let total = 0;
        for (let i = 1; i <= m; i++) {
            total += Math.min(Math.floor(x / i), n);
            if (total >= k) return true;
        }
        return total >= k;
    };
    let lo = 1,
        hi = m * n;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (countAtMost(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
