func countBoundedSequences(n int, k int, target int) int {
	const MOD = 1000000007
	// dp[t]: ways for the terms chosen so far to reach sum t
	dp := make([]int, target+1)
	ndp := make([]int, target+1)
	// zero terms reach sum 0 in exactly one way
	dp[0] = 1
	for d := 0; d < n; d++ {
		// fresh table per term: the transition must read only the previous
		// term's distribution, else one term could count twice
		for i := range ndp {
			ndp[i] = 0
		}
		for t := 1; t <= target; t++ {
			s := 0
			// every term value f is a distinct outcome, so all values are
			// summed; hi = min(k, t) skips values that overshoot the target
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
	// targets no sequence reaches were never written, so read as 0
	return dp[target]
}
