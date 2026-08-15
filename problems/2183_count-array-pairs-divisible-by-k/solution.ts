function countPairs(nums: number[], k: number): number {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const counts = new Map<number, number>();
    for (const num of nums) {
        const g = gcd(num, k);
        counts.set(g, (counts.get(g) || 0) + 1);
    }

    let total = 0;
    const gs = [...counts.keys()];
    for (let i = 0; i < gs.length; i++) {
        for (let j = i; j < gs.length; j++) {
            if ((gs[i] * gs[j]) % k !== 0) {
                continue;
            }
            if (i === j) {
                const c = counts.get(gs[i])!;
                total += (c * (c - 1)) / 2;
            } else {
                total += counts.get(gs[i])! * counts.get(gs[j])!;
            }
        }
    }
    return total;
}
