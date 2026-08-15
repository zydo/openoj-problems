function maxBalancedSubsequenceSum(nums: number[]): number {
    const n = nums.length;
    const vals: number[] = new Array(n);
    for (let i = 0; i < n; i++) vals[i] = nums[i] - i;
    const comp = Array.from(new Set(vals)).sort((a, b) => a - b);
    const m = comp.length;
    const idxOf = new Map<number, number>();
    for (let i = 0; i < m; i++) idxOf.set(comp[i], i + 1);

    const bit: number[] = new Array(m + 1).fill(0);

    function update(i: number, value: number): void {
        while (i <= m) {
            if (value > bit[i]) bit[i] = value;
            i += i & -i;
        }
    }

    function query(i: number): number {
        let best = 0;
        while (i > 0) {
            if (bit[i] > best) best = bit[i];
            i -= i & -i;
        }
        return best;
    }

    let ans: number | null = null;
    for (let i = 0; i < n; i++) {
        const j = idxOf.get(vals[i])!;
        const best = query(j);
        const dp = best <= 0 ? nums[i] : nums[i] + best;
        if (ans === null || dp > ans) ans = dp;
        update(j, dp);
    }
    return ans as number;
}
