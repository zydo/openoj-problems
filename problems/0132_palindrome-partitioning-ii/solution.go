func minCut(s string) int {
	n := len(s)
	cut := make([]int, n+1)
	for i := 0; i <= n; i++ {
		cut[i] = i - 1
	}
	for c := 0; c < n; c++ {
		for l, r := c, c; l >= 0 && r < n && s[l] == s[r]; l, r = l-1, r+1 {
			if cut[l]+1 < cut[r+1] {
				cut[r+1] = cut[l] + 1
			}
		}
		for l, r := c, c+1; l >= 0 && r < n && s[l] == s[r]; l, r = l-1, r+1 {
			if cut[l]+1 < cut[r+1] {
				cut[r+1] = cut[l] + 1
			}
		}
	}
	return cut[n]
}
