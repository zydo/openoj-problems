func dieSimulator(n int, rollMax []int) int {
	const MOD = 1000000007
	dp := make([][]int, 6)
	for j := range dp {
		dp[j] = make([]int, 16)
	}
	for j := 0; j < 6; j++ {
		dp[j][1] = 1
	}
	for step := 2; step <= n; step++ {
		nxt := make([][]int, 6)
		for j := range nxt {
			nxt[j] = make([]int, 16)
		}
		totals := make([]int, 6)
		grand := 0
		for j := 0; j < 6; j++ {
			for c := 0; c < 16; c++ {
				totals[j] += dp[j][c]
			}
			grand += totals[j]
		}
		for j := 0; j < 6; j++ {
			limit := rollMax[j]
			for c := 2; c <= limit; c++ {
				nxt[j][c] = dp[j][c-1]
			}
			nxt[j][1] = ((grand-totals[j])%MOD + MOD) % MOD
		}
		dp = nxt
	}
	answer := 0
	for j := 0; j < 6; j++ {
		for c := 0; c < 16; c++ {
			answer = (answer + dp[j][c]) % MOD
		}
	}
	return answer
}
