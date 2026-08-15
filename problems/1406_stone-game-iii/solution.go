func stoneGameIII(stoneValue []int) string {
	n := len(stoneValue)
	dp := make([]int64, n+1)
	for i := n - 1; i >= 0; i-- {
		take := int64(0)
		best := int64(-1) << 62
		hi := i + 3
		if hi > n {
			hi = n
		}
		for j := i; j < hi; j++ {
			take += int64(stoneValue[j])
			cand := take - dp[j+1]
			if cand > best {
				best = cand
			}
		}
		dp[i] = best
	}
	if dp[0] > 0 {
		return "Alice"
	}
	if dp[0] < 0 {
		return "Bob"
	}
	return "Tie"
}
