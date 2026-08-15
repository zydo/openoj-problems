func superEggDrop(k int, n int) int {
	dp := make([]int64, k+1)
	moves := 0
	for dp[k] < int64(n) {
		moves++
		for e := k; e >= 1; e-- {
			dp[e] = dp[e-1] + dp[e] + 1
		}
	}
	return moves
}
