function numberWays(hats: number[][]): number {
    const MOD = 1000000007;
    const n = hats.length;
    const full = (1 << n) - 1;
    const h2p: number[][] = Array.from({ length: 41 }, () => []);
    for (let p = 0; p < n; p++) {
        for (const h of hats[p]) {
            h2p[h].push(p);
        }
    }
    let dp: number[] = new Array(full + 1).fill(0);
    dp[0] = 1;
    for (let h = 1; h <= 40; h++) {
        const people = h2p[h];
        if (people.length === 0) {
            continue;
        }
        const ndp = dp.slice();
        for (let mask = 0; mask <= full; mask++) {
            const v = dp[mask];
            if (v === 0) {
                continue;
            }
            for (const p of people) {
                const bit = 1 << p;
                if ((mask & bit) === 0) {
                    const nm = mask | bit;
                    ndp[nm] = (ndp[nm] + v) % MOD;
                }
            }
        }
        dp = ndp;
    }
    return dp[full];
}
