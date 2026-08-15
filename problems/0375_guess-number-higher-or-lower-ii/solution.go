func getMoneyAmount(n int) int {
	size := n + 2
	dp := make([][]int, size)
	for i := range dp {
		dp[i] = make([]int, size)
	}
	for length := 2; length <= n; length++ {
		for i := 1; i <= n-length+1; i++ {
			j := i + length - 1
			best := int(^uint(0) >> 1)
			for guess := i; guess <= j; guess++ {
				lower := dp[i][guess-1]
				upper := dp[guess+1][j]
				cost := guess + max(lower, upper)
				if cost < best {
					best = cost
				}
			}
			dp[i][j] = best
		}
	}
	return dp[1][n]
}
