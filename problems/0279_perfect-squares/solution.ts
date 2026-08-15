function numSquares(n: number): number {
    const squares: number[] = [];
    for (let i = 1; i * i <= n; i++) squares.push(i * i);
    const dp: number[] = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (const s of squares) {
            if (s > i) break;
            if (dp[i - s] + 1 < dp[i]) dp[i] = dp[i - s] + 1;
        }
    }
    return dp[n];
}
