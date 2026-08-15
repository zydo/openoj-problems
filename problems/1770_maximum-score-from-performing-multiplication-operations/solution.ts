function maximumScore(nums: number[], multipliers: number[]): number {
    const m = multipliers.length;
    const n = nums.length;
    const NEG_INF = -Infinity;
    let prev: number[] = new Array(m + 1).fill(0);
    for (let i = m - 1; i >= 0; i--) {
        const cur: number[] = new Array(m + 1).fill(NEG_INF);
        for (let l = 0; l <= i; l++) {
            const r = i - l;
            const takeLeft = prev[l + 1] + multipliers[i] * nums[l];
            const takeRight = prev[l] + multipliers[i] * nums[n - 1 - r];
            cur[l] = takeLeft >= takeRight ? takeLeft : takeRight;
        }
        prev = cur;
    }
    return prev[0];
}
