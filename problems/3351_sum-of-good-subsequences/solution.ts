function sumOfGoodSubsequences(nums: number[]): number {
    const MOD = 1000000007;
    // offset by 1 so that value 0 can look up value -1 at index 0
    const cnt: number[] = new Array(100003).fill(0);
    const sm: number[] = new Array(100003).fill(0);
    let total = 0;
    for (const v of nums) {
        const idx = v + 1;
        const cPrev = cnt[idx - 1];
        const cNext = cnt[idx + 1];
        const sPrev = sm[idx - 1];
        const sNext = sm[idx + 1];
        const newCnt = (1 + cPrev + cNext) % MOD;
        const newSum = (v * newCnt + sPrev + sNext) % MOD;
        cnt[idx] = (cnt[idx] + newCnt) % MOD;
        sm[idx] = (sm[idx] + newSum) % MOD;
        total = (total + newSum) % MOD;
    }
    return total;
}
