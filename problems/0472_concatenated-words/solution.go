func findAllConcatenatedWordsInADict(words []string) []string {
	dictionary := make(map[string]bool, len(words))
	for _, word := range words {
		dictionary[word] = true
	}

	isConcatenated := func(word string) bool {
		n := len(word)
		dp := make([]bool, n+1)
		dp[0] = true
		for i := 1; i <= n; i++ {
			for j := 0; j < i; j++ {
				if j == 0 && i == n {
					continue // the word itself does not count as a part
				}
				if dp[j] && dictionary[word[j:i]] {
					dp[i] = true
					break
				}
			}
		}
		return dp[n]
	}

	result := []string{}
	for _, word := range words {
		if isConcatenated(word) {
			result = append(result, word)
		}
	}
	return result
}
