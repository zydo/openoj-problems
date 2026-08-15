function minMoves(nums: number[], limit: number): number {
    const n = nums.length;
    const diff: number[] = new Array(2 * limit + 2).fill(0);
    for (let i = 0; i < n >> 1; i++) {
        const a = nums[i],
            b = nums[n - 1 - i];
        const lo = Math.min(a, b),
            hi = Math.max(a, b);
        diff[2] += 2;
        diff[lo + 1] -= 1;
        diff[a + b] -= 1;
        diff[a + b + 1] += 1;
        diff[hi + limit + 1] += 1;
    }
    let best = Infinity;
    let cur = 0;
    for (let target = 2; target <= 2 * limit; target++) {
        cur += diff[target];
        if (cur < best) best = cur;
    }
    return best;
}
