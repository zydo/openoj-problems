function numWays(steps: number, arrLen: number): number {
    const MOD = 1000000007;
    const n = Math.min(arrLen, steps + 1);
    let dp = new Array<number>(n).fill(0);
    dp[0] = 1;
    for (let s = 0; s < steps; s++) {
        const ndp = new Array<number>(n).fill(0);
        for (let i = 0; i < n; i++) {
            let total = dp[i];
            if (i > 0) total += dp[i - 1];
            if (i + 1 < n) total += dp[i + 1];
            ndp[i] = total % MOD;
        }
        dp = ndp;
    }
    return dp[0];
}
