function sellingWood(m: number, n: number, prices: number[][]): number {
    const price: number[][] = Array.from({ length: m + 1 }, () =>
        new Array(n + 1).fill(0),
    );
    for (const [h, w, p] of prices) {
        if (price[h][w] < p) price[h][w] = p;
    }
    const dp: number[][] = Array.from({ length: m + 1 }, () =>
        new Array(n + 1).fill(0),
    );
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let best = price[i][j];
            const row = dp[i];
            for (let h = 1; h <= Math.floor(i / 2); h++) {
                const v = dp[h][j] + dp[i - h][j];
                if (v > best) best = v;
            }
            for (let w = 1; w <= Math.floor(j / 2); w++) {
                const v = row[w] + row[j - w];
                if (v > best) best = v;
            }
            dp[i][j] = best;
        }
    }
    return dp[m][n];
}
