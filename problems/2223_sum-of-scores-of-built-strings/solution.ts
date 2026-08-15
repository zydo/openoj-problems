function sumScores(s: string): number {
    const n = s.length;
    if (n === 0) return 0;
    const z: number[] = new Array(n).fill(0);
    z[0] = n;
    let left = 0,
        right = 0;
    for (let i = 1; i < n; i++) {
        if (i < right) {
            z[i] = Math.min(right - i, z[i - left]);
        }
        while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
            z[i] += 1;
        }
        if (i + z[i] > right) {
            left = i;
            right = i + z[i];
        }
    }
    let total = 0;
    for (const v of z) total += v;
    return total;
}
