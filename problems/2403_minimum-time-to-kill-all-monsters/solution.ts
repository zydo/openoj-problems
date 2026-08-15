function minimumTime(power: number[]): number {
    const n = power.length;
    const full = (1 << n) - 1;
    const INF = Infinity;
    const dp: number[] = new Array(full + 1).fill(INF);
    dp[0] = 0;
    for (let mask = 0; mask <= full; mask++) {
        if (dp[mask] === INF) continue;
        const gain = popcount(mask) + 1;
        for (let j = 0; j < n; j++) {
            if ((mask & (1 << j)) === 0) {
                const days = Math.ceil(power[j] / gain);
                const nxt = mask | (1 << j);
                if (dp[mask] + days < dp[nxt]) dp[nxt] = dp[mask] + days;
            }
        }
    }
    return dp[full];
}

function popcount(x: number): number {
    let c = 0;
    while (x > 0) {
        x &= x - 1;
        c++;
    }
    return c;
}
