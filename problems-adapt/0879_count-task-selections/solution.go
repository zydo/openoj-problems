func countTaskSelections(n int, minPayoff int, crew []int, payoff []int) int {
	const MOD = 1000000007
	// dp[workers][cap] = number of subsets using at most `workers` workers and
	// at least `cap` payoff; cap is capped at minPayoff.
	dp := make([][]int64, n+1)
	for workers := range dp {
		dp[workers] = make([]int64, minPayoff+1)
		dp[workers][0] = 1
	}
	for idx := range crew {
		g, p := crew[idx], payoff[idx]
		for workers := n; workers >= g; workers-- {
			for cap := minPayoff; cap >= 0; cap-- {
				prev := cap - p
				if prev < 0 {
					prev = 0
				}
				dp[workers][cap] = (dp[workers][cap] + dp[workers-g][prev]) % MOD
			}
		}
	}
	return int(dp[n][minPayoff])
}
