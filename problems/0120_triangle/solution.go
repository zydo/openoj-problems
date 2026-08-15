func minimumTotal(triangle [][]int) int {
	n := len(triangle)
	dp := make([]int64, n)
	for i, v := range triangle[n-1] {
		dp[i] = int64(v)
	}
	for row := n - 2; row >= 0; row-- {
		for i := range triangle[row] {
			best := dp[i]
			if dp[i+1] < best {
				best = dp[i+1]
			}
			dp[i] = int64(triangle[row][i]) + best
		}
	}
	return int(dp[0])
}
