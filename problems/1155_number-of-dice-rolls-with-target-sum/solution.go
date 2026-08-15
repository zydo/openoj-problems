func numRollsToTarget(n int, k int, target int) int {
	const MOD = 1000000007
	dp := make([]int, target+1)
	ndp := make([]int, target+1)
	dp[0] = 1
	for d := 0; d < n; d++ {
		for i := range ndp {
			ndp[i] = 0
		}
		for t := 1; t <= target; t++ {
			s := 0
			hi := k
			if t < hi {
				hi = t
			}
			for f := 1; f <= hi; f++ {
				s += dp[t-f]
			}
			ndp[t] = s % MOD
		}
		dp, ndp = ndp, dp
	}
	return dp[target]
}
