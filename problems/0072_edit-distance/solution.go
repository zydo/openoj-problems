func minDistance(word1 string, word2 string) int {
	m, n := len(word1), len(word2)
	prev := make([]int, n+1)
	curr := make([]int, n+1)
	for j := 0; j <= n; j++ {
		prev[j] = j
	}
	for i := 1; i <= m; i++ {
		curr[0] = i
		for j := 1; j <= n; j++ {
			if word1[i-1] == word2[j-1] {
				curr[j] = prev[j-1]
			} else {
				curr[j] = 1 + min(prev[j-1], min(prev[j], curr[j-1]))
			}
		}
		prev, curr = curr, prev
	}
	return prev[n]
}
