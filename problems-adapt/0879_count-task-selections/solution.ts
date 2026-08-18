function countTaskSelections(n: number, minPayoff: number, crew: number[], payoff: number[]): number {
    const MOD = 1000000007;
    // dp[workers][cap] = number of subsets using at most `workers` workers and
    // at least `cap` payoff; cap is capped at minPayoff.
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(minPayoff + 1).fill(0));
    for (let workers = 0; workers <= n; workers++) {
        dp[workers][0] = 1;
    }
    for (let idx = 0; idx < crew.length; idx++) {
        const g = crew[idx];
        const p = payoff[idx];
        for (let workers = n; workers >= g; workers--) {
            for (let cap = minPayoff; cap >= 0; cap--) {
                const prev = cap - p > 0 ? cap - p : 0;
                dp[workers][cap] = (dp[workers][cap] + dp[workers - g][prev]) % MOD;
            }
        }
    }
    return dp[n][minPayoff];
}
