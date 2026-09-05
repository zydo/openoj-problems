func reconcileDeletionCost(left string, right string) int {
	a, b := []rune(left), []rune(right)
	la, lb := len(a), len(b)
	// dp[i][j] = least discard cost for reconciling the prefixes a[:i], b[:j].
	dp := make([][]int, la+1)
	for i := range dp {
		dp[i] = make([]int, lb+1)
	}
	// Boundary states: an unmatched prefix must be discarded in full.
	for j := 1; j <= lb; j++ {
		dp[0][j] = dp[0][j-1] + int(b[j-1])
	}
	for i := 1; i <= la; i++ {
		dp[i][0] = dp[i-1][0] + int(a[i-1])
		for j := 1; j <= lb; j++ {
			if a[i-1] == b[j-1] {
				// Matching characters transfer the diagonal state unchanged.
				dp[i][j] = dp[i-1][j-1]
			} else {
				// Different characters force one weighted discard.
				dp[i][j] = min(dp[i-1][j]+int(a[i-1]), dp[i][j-1]+int(b[j-1]))
			}
		}
	}
	return dp[la][lb]
}
