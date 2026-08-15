function makeSubKSumEqual(arr: number[], k: number): number {
    const gcd = (a: number, b: number): number => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };
    const n = arr.length;
    const g = gcd(n, k);
    let total = 0;
    for (let r = 0; r < g; r++) {
        const group: number[] = [];
        for (let i = r; i < n; i += g) group.push(arr[i]);
        group.sort((a, b) => a - b);
        const median = group[Math.floor(group.length / 2)];
        for (const v of group) total += Math.abs(v - median);
    }
    return total;
}
