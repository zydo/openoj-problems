func numDistinct(s string, t string) int {
	m := len(t)
	dp := make([]int64, m+1)
	dp[0] = 1
	for i := 0; i < len(s); i++ {
		ch := s[i]
		for j := m; j > 0; j-- {
			if t[j-1] == ch {
				dp[j] += dp[j-1]
			}
		}
	}
	return int(dp[m])
}
