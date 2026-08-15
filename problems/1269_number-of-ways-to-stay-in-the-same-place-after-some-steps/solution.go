func numWays(steps int, arrLen int) int {
	const MOD = 1000000007
	n := arrLen
	if steps+1 < n {
		n = steps + 1
	}
	dp := make([]int, n)
	ndp := make([]int, n)
	dp[0] = 1
	for s := 0; s < steps; s++ {
		for i := 0; i < n; i++ {
			total := dp[i]
			if i > 0 {
				total += dp[i-1]
			}
			if i+1 < n {
				total += dp[i+1]
			}
			ndp[i] = total % MOD
		}
		dp, ndp = ndp, dp
	}
	return dp[0]
}
