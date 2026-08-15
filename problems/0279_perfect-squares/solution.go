func numSquares(n int) int {
	squares := make([]int, 0)
	for i := 1; i*i <= n; i++ {
		squares = append(squares, i*i)
	}
	inf := n + 1
	dp := make([]int, n+1)
	for i := 1; i <= n; i++ {
		dp[i] = inf
	}
	for i := 1; i <= n; i++ {
		for _, s := range squares {
			if s > i {
				break
			}
			if dp[i-s]+1 < dp[i] {
				dp[i] = dp[i-s] + 1
			}
		}
	}
	return dp[n]
}
