function subarrayBitwiseORs(arr: number[]): number {
    const seen = new Set<number>();
    let current = new Set<number>();
    for (const x of arr) {
        const nxt = new Set<number>();
        for (const y of current) {
            nxt.add(x | y);
        }
        nxt.add(x);
        current = nxt;
        for (const v of current) {
            seen.add(v);
        }
    }
    return seen.size;
}
