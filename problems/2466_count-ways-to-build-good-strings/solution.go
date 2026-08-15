func countGoodStrings(low int, high int, zero int, one int) int {
	const MOD = 1000000007
	dp := make([]int, high+1)
	dp[0] = 1
	for length := 1; length <= high; length++ {
		ways := 0
		if length >= zero {
			ways += dp[length-zero]
		}
		if length >= one {
			ways += dp[length-one]
		}
		dp[length] = ways % MOD
	}
	total := 0
	for length := low; length <= high; length++ {
		total = (total + dp[length]) % MOD
	}
	return total
}
