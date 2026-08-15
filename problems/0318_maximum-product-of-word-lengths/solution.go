func maxProduct(words []string) int {
	n := len(words)
	masks := make([]int32, n)
	lens := make([]int, n)
	for i, word := range words {
		var mask int32
		for _, ch := range word {
			mask |= 1 << (ch - 'a')
		}
		masks[i] = mask
		lens[i] = len(word)
	}
	best := 0
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if masks[i]&masks[j] == 0 && lens[i]*lens[j] > best {
				best = lens[i] * lens[j]
			}
		}
	}
	return best
}
