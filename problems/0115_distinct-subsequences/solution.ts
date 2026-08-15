function numDistinct(s: string, t: string): number {
    const m = t.length;
    const dp: bigint[] = [BigInt(1)];
    for (let j = 1; j <= m; j++) dp.push(BigInt(0));
    for (const ch of s) {
        for (let j = m; j > 0; j--) {
            if (t[j - 1] === ch) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return Number(dp[m]);
}
