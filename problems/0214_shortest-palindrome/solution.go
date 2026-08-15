func shortestPalindrome(s string) string {
	revBytes := []byte(s)
	for i, j := 0, len(revBytes)-1; i < j; i, j = i+1, j-1 {
		revBytes[i], revBytes[j] = revBytes[j], revBytes[i]
	}
	rev := string(revBytes)
	combined := s + "#" + rev
	n := len(combined)
	lps := make([]int, n)
	for i := 1; i < n; i++ {
		j := lps[i-1]
		for j > 0 && combined[i] != combined[j] {
			j = lps[j-1]
		}
		if combined[i] == combined[j] {
			j++
		}
		lps[i] = j
	}
	palLen := 0
	if n > 0 {
		palLen = lps[n-1]
	}
	return rev[:len(s)-palLen] + s
}
