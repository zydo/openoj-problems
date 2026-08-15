function shortestPalindrome(s: string): string {
    const rev = s.split("").reverse().join("");
    const combined = s + "#" + rev;
    const n = combined.length;
    const lps: number[] = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        let j = lps[i - 1];
        while (j > 0 && combined[i] !== combined[j]) {
            j = lps[j - 1];
        }
        if (combined[i] === combined[j]) {
            j += 1;
        }
        lps[i] = j;
    }
    const palLen = n > 0 ? lps[n - 1] : 0;
    return rev.slice(0, s.length - palLen) + s;
}
