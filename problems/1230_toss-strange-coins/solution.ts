function probabilityOfHeads(prob: number[], target: number): number {
    const dp: number[] = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (const p of prob) {
        for (let c = target; c > 0; c--) {
            dp[c] = dp[c] * (1 - p) + dp[c - 1] * p;
        }
        dp[0] *= 1 - p;
    }
    return dp[target];
}
