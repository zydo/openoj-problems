function minTransfers(transactions: number[][]): number {
    const balance = new Map<number, number>();
    for (const [frm, to, amount] of transactions) {
        balance.set(frm, (balance.get(frm) || 0) - amount);
        balance.set(to, (balance.get(to) || 0) + amount);
    }
    const debts: number[] = [];
    balance.forEach(function (v: number): void {
        if (v !== 0) debts.push(v);
    });
    const n = debts.length;
    if (n === 0) return 0;

    const total = 1 << n;
    const sums: number[] = new Array(total).fill(0);
    const valid: boolean[] = new Array(total).fill(false);
    for (let mask = 1; mask < total; mask++) {
        const lsb = mask & -mask;
        const bit = Math.log2(lsb);
        sums[mask] = sums[mask ^ lsb] + debts[bit];
        valid[mask] = sums[mask] === 0;
    }

    const NEG = -1e9;
    const dp: number[] = new Array(total).fill(NEG);
    dp[0] = 0;
    for (let mask = 1; mask < total; mask++) {
        let sub = mask;
        while (sub) {
            if (valid[sub] && dp[mask ^ sub] !== NEG) {
                dp[mask] = Math.max(dp[mask], dp[mask ^ sub] + 1);
            }
            sub = (sub - 1) & mask;
        }
    }
    return n - dp[total - 1];
}
