function wordBreak(s: string, wordDict: string[]): boolean {
    const words = new Set(wordDict);
    const n = s.length;
    const reachable: boolean[] = new Array(n + 1).fill(false);
    reachable[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (reachable[j] && words.has(s.substring(j, i))) {
                reachable[i] = true;
                break;
            }
        }
    }
    return reachable[n];
}
