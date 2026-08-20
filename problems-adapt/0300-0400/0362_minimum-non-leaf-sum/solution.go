func minimumNonLeafSum(leaves []int) int {
	n := len(leaves)
	// dp[i][j] = min sum of non-leaf nodes for subarray leaves[i..j]
	dp := make([][]int, n)
	maxi := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
		maxi[i] = make([]int, n)
	}
	// maxi[i][j] = max leaf value in leaves[i..j]
	for i := 0; i < n; i++ {
		maxi[i][i] = leaves[i]
	}
	for length := 2; length <= n; length++ {
		for i := 0; i+length-1 < n; i++ {
			j := i + length - 1
			maxi[i][j] = max(maxi[i][j-1], leaves[j])
		}
	}
	for length := 2; length <= n; length++ {
		for i := 0; i+length-1 < n; i++ {
			j := i + length - 1
			best := int(^uint(0) >> 1)
			for k := i; k < j; k++ {
				cost := maxi[i][k]*maxi[k+1][j] + dp[i][k] + dp[k+1][j]
				if cost < best {
					best = cost
				}
			}
			dp[i][j] = best
		}
	}
	return dp[0][n-1]
}
