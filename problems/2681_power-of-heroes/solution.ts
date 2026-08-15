function sumOfPower(nums: number[]): number {
    const MOD = 1000000007;
    const S = 32768; // 2^15
    const mulmod = (a: number, b: number): number => {
        a %= MOD;
        b %= MOD;
        const a1 = Math.floor(a / S);
        const a0 = a - a1 * S;
        return (((a1 * b) % MOD) * S + a0 * b) % MOD;
    };
    const arr: number[] = nums.slice().sort((a, b) => a - b);
    let ans = 0;
    let s = 0;
    for (const x of arr) {
        ans = (ans + mulmod(mulmod(x, x), (s + x) % MOD)) % MOD;
        s = (2 * s + x) % MOD;
    }
    return ans;
}
