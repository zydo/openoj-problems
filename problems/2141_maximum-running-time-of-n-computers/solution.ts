function maxRunTime(n: number, batteries: number[]): number {
    const feasible = (t: number): boolean => {
        let total = 0;
        for (const b of batteries) {
            total += Math.min(b, t);
        }
        return total >= n * t;
    };

    let sum = 0;
    for (const b of batteries) {
        sum += b;
    }
    let lo = 0;
    let hi = Math.floor(sum / n);
    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (feasible(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
}
