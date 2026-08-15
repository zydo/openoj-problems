func longestCommonSubsequence(text1 string, text2 string) int {
	m, n := len(text1), len(text2)
	prev := make([]int, n+1)
	curr := make([]int, n+1)
	for i := 1; i <= m; i++ {
		c := text1[i-1]
		for j := 1; j <= n; j++ {
			if c == text2[j-1] {
				curr[j] = prev[j-1] + 1
			} else {
				curr[j] = max(prev[j], curr[j-1])
			}
		}
		prev, curr = curr, prev
	}
	return prev[n]
}
