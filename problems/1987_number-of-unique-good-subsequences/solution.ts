function numberOfUniqueGoodSubsequences(binary: string): number {
    const MOD = 1000000007;
    let end0 = 0;
    let end1 = 0;
    let hasZero = false;
    for (const ch of binary) {
        if (ch === "0") {
            end0 = (end0 + end1) % MOD;
            hasZero = true;
        } else {
            end1 = (end1 + end0 + 1) % MOD;
        }
    }
    return (end0 + end1 + (hasZero ? 1 : 0)) % MOD;
}
