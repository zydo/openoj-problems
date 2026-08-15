function minimumCost(nums: number[], cost: number[], k: number): number {
    const n = nums.length;
    const prefNums: number[] = new Array(n + 1).fill(0);
    const prefCost: number[] = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefNums[i + 1] = prefNums[i] + nums[i];
        prefCost[i + 1] = prefCost[i] + cost[i];
    }

    const INF = Infinity;
    const dp: number[] = new Array(n + 1).fill(INF);
    dp[n] = 0;
    const totalCost = prefCost[n];
    for (let i = n - 1; i >= 0; i--) {
        let best = INF;
        for (let j = i; j < n; j++) {
            let seg = prefNums[j + 1] * (prefCost[j + 1] - prefCost[i]);
            seg += k * (totalCost - prefCost[i]);
            const cand = seg + dp[j + 1];
            if (cand < best) {
                best = cand;
            }
        }
        dp[i] = best;
    }
    return dp[0];
}
