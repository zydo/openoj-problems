function minOperations(nums: number[]): number {
    // Position 0 is frozen, so every later value is a multiple of the one
    // before it. Cap the value axis at 2 * max(nums): no optimal chain ever
    // needs a value above that (exchange argument in solutions.md).
    const n = nums.length;
    if (n === 1) {
        return 0;
    }
    const cap = 2 * Math.max(...nums);
    const INF = 1e9;
    let dp: number[] = new Array(cap + 1).fill(INF);
    dp[nums[0]] = 0;
    for (let i = 1; i < n; i++) {
        const x = nums[i];
        const ndp: number[] = new Array(cap + 1).fill(INF);
        for (let u = 1; u <= cap; u++) {
            if (dp[u] >= INF) {
                continue;
            }
            // First multiple of u reaching x, then every multiple after.
            const start = Math.ceil(x / u) * u;
            for (let v = start; v <= cap; v += u) {
                const cand = dp[u] + (v - x);
                if (cand < ndp[v]) {
                    ndp[v] = cand;
                }
            }
        }
        dp = ndp;
    }
    return Math.min(...dp);
}
