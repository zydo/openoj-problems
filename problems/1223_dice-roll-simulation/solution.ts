function dieSimulator(n: number, rollMax: number[]): number {
    const MOD = 1000000007;
    let dp: number[][] = Array.from({ length: 6 }, () => new Array(16).fill(0));
    for (let j = 0; j < 6; j++) dp[j][1] = 1;
    for (let step = 2; step <= n; step++) {
        const nxt: number[][] = Array.from({ length: 6 }, () =>
            new Array(16).fill(0),
        );
        const totals = dp.map((row) => row.reduce((a, b) => a + b, 0));
        const grand = totals.reduce((a, b) => a + b, 0);
        for (let j = 0; j < 6; j++) {
            const limit = rollMax[j];
            for (let c = 2; c <= limit; c++) {
                nxt[j][c] = dp[j][c - 1];
            }
            nxt[j][1] = (((grand - totals[j]) % MOD) + MOD) % MOD;
        }
        dp = nxt;
    }
    let answer = 0;
    for (const row of dp) {
        for (const value of row) answer = (answer + value) % MOD;
    }
    return answer;
}
