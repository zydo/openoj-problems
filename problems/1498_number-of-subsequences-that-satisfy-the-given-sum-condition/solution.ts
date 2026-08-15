function numSubseq(nums: number[], target: number): number {
    const MOD = 1000000007;
    const sorted = nums.slice().sort((a, b) => a - b);
    const n = sorted.length;
    const powers = new Array<number>(n).fill(1);
    for (let i = 1; i < n; i++) {
        powers[i] = (powers[i - 1] * 2) % MOD;
    }
    let total = 0;
    let lo = 0,
        hi = n - 1;
    while (lo <= hi) {
        if (sorted[lo] + sorted[hi] <= target) {
            total = (total + powers[hi - lo]) % MOD;
            lo++;
        } else {
            hi--;
        }
    }
    return total;
}
