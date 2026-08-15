func minimumDeleteSum(s1 string, s2 string) int {
	a, b := []rune(s1), []rune(s2)
	la, lb := len(a), len(b)
	dp := make([][]int, la+1)
	for i := range dp {
		dp[i] = make([]int, lb+1)
	}
	for j := 1; j <= lb; j++ {
		dp[0][j] = dp[0][j-1] + int(b[j-1])
	}
	for i := 1; i <= la; i++ {
		dp[i][0] = dp[i-1][0] + int(a[i-1])
		for j := 1; j <= lb; j++ {
			if a[i-1] == b[j-1] {
				dp[i][j] = dp[i-1][j-1]
			} else {
				dp[i][j] = min(dp[i-1][j]+int(a[i-1]), dp[i][j-1]+int(b[j-1]))
			}
		}
	}
	return dp[la][lb]
}
