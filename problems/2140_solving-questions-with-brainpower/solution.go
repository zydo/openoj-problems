func mostPoints(questions [][]int) int64 {
	n := len(questions)
	dp := make([]int64, n+1)
	for i := n - 1; i >= 0; i-- {
		points := int64(questions[i][0])
		nxt := i + questions[i][1] + 1
		take := points
		if nxt <= n {
			take += dp[nxt]
		}
		if dp[i+1] > take {
			take = dp[i+1]
		}
		dp[i] = take
	}
	return dp[0]
}
