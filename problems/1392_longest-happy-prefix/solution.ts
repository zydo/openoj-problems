function longestPrefix(s: string): string {
    const n = s.length;
    const pi: number[] = new Array(n).fill(0);
    let j = 0;
    for (let i = 1; i < n; i++) {
        while (j > 0 && s[i] !== s[j]) {
            j = pi[j - 1];
        }
        if (s[i] === s[j]) {
            j++;
        }
        pi[i] = j;
    }
    return n > 0 ? s.slice(0, pi[n - 1]) : "";
}
