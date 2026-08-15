function hIndex(citations: number[]): number {
    const n = citations.length;
    const count: number[] = new Array(n + 1).fill(0);
    for (const c of citations) {
        count[Math.min(c, n)] += 1;
    }
    let total = 0;
    for (let h = n; h >= 0; h--) {
        total += count[h];
        if (total >= h) {
            return h;
        }
    }
    return 0;
}
