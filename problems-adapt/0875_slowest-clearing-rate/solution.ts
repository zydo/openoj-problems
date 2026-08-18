function slowestClearingRate(batches: number[], h: number): number {
    // Batch p costs ceil(p / k) hours; hours(k) only shrinks as k
    // grows, so feasibility is a threshold.
    const hoursNeeded = (k: number): number => {
        let total = 0;
        for (const batch of batches) {
            total += Math.ceil(batch / k);
        }
        return total;
    };
    // Range [1, max(batches)]: the max rate empties any batch in a
    // single hour, and h >= batches.length makes it always feasible.
    let lo = 1;
    let hi = Math.max(...batches);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        // Lower-bound bisection: feasible means the answer is mid
        // or smaller; infeasible raises lo. Exiting, lo is the
        // smallest feasible rate.
        if (hoursNeeded(mid) <= h) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}
