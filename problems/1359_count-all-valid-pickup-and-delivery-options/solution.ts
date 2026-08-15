function countOrders(n: number): number {
    const MOD = 1000000007;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = (result * (2 * i - 1) * i) % MOD;
    }
    return result;
}
