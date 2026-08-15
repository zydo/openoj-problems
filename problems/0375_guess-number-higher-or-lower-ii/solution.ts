function getMoneyAmount(n: number): number {
    const size = n + 2;
    const dp: number[][] = new Array(size);
    for (let i = 0; i < size; i++) dp[i] = new Array(size).fill(0);
    for (let length = 2; length <= n; length++) {
        for (let i = 1; i <= n - length + 1; i++) {
            const j = i + length - 1;
            let best = Infinity;
            for (let guess = i; guess <= j; guess++) {
                const cost =
                    guess + Math.max(dp[i][guess - 1], dp[guess + 1][j]);
                if (cost < best) best = cost;
            }
            dp[i][j] = best;
        }
    }
    return dp[1][n];
}
