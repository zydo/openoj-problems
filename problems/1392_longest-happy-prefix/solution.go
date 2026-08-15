func longestPrefix(s string) string {
	n := len(s)
	pi := make([]int, n)
	j := 0
	for i := 1; i < n; i++ {
		for j > 0 && s[i] != s[j] {
			j = pi[j-1]
		}
		if s[i] == s[j] {
			j++
		}
		pi[i] = j
	}
	if n == 0 {
		return ""
	}
	return s[:pi[n-1]]
}
