function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    let prev: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
        const curr: number[] = new Array(n + 1).fill(0);
        const c = text1.charCodeAt(i - 1);
        for (let j = 1; j <= n; j++) {
            if (c === text2.charCodeAt(j - 1)) {
                curr[j] = prev[j - 1] + 1;
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        prev = curr;
    }
    return prev[n];
}
