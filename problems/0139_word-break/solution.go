func wordBreak(s string, wordDict []string) bool {
	words := make(map[string]struct{}, len(wordDict))
	for _, word := range wordDict {
		words[word] = struct{}{}
	}
	n := len(s)
	reachable := make([]bool, n+1)
	reachable[0] = true
	for i := 1; i <= n; i++ {
		for j := 0; j < i; j++ {
			if reachable[j] {
				if _, ok := words[s[j:i]]; ok {
					reachable[i] = true
					break
				}
			}
		}
	}
	return reachable[n]
}
