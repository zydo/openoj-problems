func countOrders(n int) int {
	const MOD = 1000000007
	result := 1
	for i := 2; i <= n; i++ {
		result = result * (2*i - 1) % MOD * i % MOD
	}
	return result
}
