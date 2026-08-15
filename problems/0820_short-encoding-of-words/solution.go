func minimumLengthEncoding(words []string) int {
	keep := make(map[string]struct{})
	for _, w := range words {
		keep[w] = struct{}{}
	}
	for _, w := range words {
		for k := 1; k < len(w); k++ {
			delete(keep, w[k:])
		}
	}
	total := 0
	for w := range keep {
		total += len(w) + 1
	}
	return total
}
