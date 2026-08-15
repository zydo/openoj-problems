function paintWalls(cost: number[], time: number[]): number {
    const n = cost.length;
    const INF = Infinity;
    const dp: number[] = new Array(n + 1).fill(INF);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        const weight = time[i] + 1;
        const c = cost[i];
        for (let j = n; j >= 1; j--) {
            const src = j >= weight ? j - weight : 0;
            const cand = dp[src] + c;
            if (cand < dp[j]) dp[j] = cand;
        }
    }
    return dp[n];
}
