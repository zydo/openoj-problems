func findMaxForm(strs []string, m int, n int) int {
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}
	for _, s := range strs {
		zeros := 0
		for k := 0; k < len(s); k++ {
			if s[k] == '0' {
				zeros++
			}
		}
		ones := len(s) - zeros
		for i := m; i >= zeros; i-- {
			for j := n; j >= ones; j-- {
				if cand := dp[i-zeros][j-ones] + 1; cand > dp[i][j] {
					dp[i][j] = cand
				}
			}
		}
	}
	return dp[m][n]
}
