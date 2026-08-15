function minDistance(word1: string, word2: string): number {
    const a = word1,
        b = word2;
    const la = a.length,
        lb = b.length;
    const dp: number[][] = Array.from({ length: la + 1 }, () =>
        new Array(lb + 1).fill(0),
    );
    for (let i = 1; i <= la; i++) {
        for (let j = 1; j <= lb; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return la + lb - 2 * dp[la][lb];
}
