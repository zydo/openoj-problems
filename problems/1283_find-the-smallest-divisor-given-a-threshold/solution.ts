function smallestDivisor(nums: number[], threshold: number): number {
    const total = (divisor: number): number => {
        let s = 0;
        for (const x of nums) {
            s += Math.ceil(x / divisor);
        }
        return s;
    };
    let lo = 1,
        hi = Math.max(...nums);
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (total(mid) <= threshold) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
