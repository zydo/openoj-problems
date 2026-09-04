func shortestCommonSupersequence(s string, t string) string {
	n := len(s)
	m := len(t)
	// dp[i][j] = length of the LCS of s[i:] and t[j:].
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, m+1)
	}
	for i := n - 1; i >= 0; i-- {
		for j := m - 1; j >= 0; j-- {
			if s[i] == t[j] {
				dp[i][j] = dp[i+1][j+1] + 1
			} else {
				dp[i][j] = max(dp[i+1][j], dp[i][j+1])
			}
		}
	}

	var parts []byte
	i, j := 0, 0
	for i < n && j < m {
		if s[i] == t[j] {
			parts = append(parts, s[i])
			i += 1
			j += 1
		} else if dp[i+1][j] >= dp[i][j+1] {
			parts = append(parts, s[i])
			i += 1
		} else {
			parts = append(parts, t[j])
			j += 1
		}
	}
	parts = append(parts, s[i:]...)
	parts = append(parts, t[j:]...)
	return string(parts)
}
