function minCapability(nums: number[], k: number): number {
    const feasible = (cap: number): boolean => {
        let count = 0;
        let i = 0;
        while (i < nums.length) {
            if (nums[i] <= cap) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= k;
    };
    let lo = nums[0];
    let hi = nums[0];
    for (const x of nums) {
        lo = Math.min(lo, x);
        hi = Math.max(hi, x);
    }
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (feasible(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}
