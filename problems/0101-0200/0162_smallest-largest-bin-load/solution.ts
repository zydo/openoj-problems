function smallestLargestBinLoad(n: number, piles: number[]): number {
    // A bin holds items from one pile only, so a pile with q items needs
    // ceil(q/x) bins.
    const binsNeeded = (x: number): number => {
        let total = 0;
        for (const q of piles) {
            total += Math.ceil(q / x);
        }
        return total;
    };

    // Feasibility is monotone in the cap x, so binary-search the smallest
    // feasible one. hi = max(piles) is always feasible (one bin can
    // take an entire pile).
    let lo = 1;
    let hi = Math.max(...piles);
    // Invariant: lo possibly too small, hi known feasible; the sum check
    // uses <= n since leftover bins may receive nothing.
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (binsNeeded(mid) <= n) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}
