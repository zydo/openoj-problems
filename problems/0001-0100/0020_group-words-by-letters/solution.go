import "sort"

func groupByLetters(words []string) [][]string {
	// Sorted key -> position of its group in the groups slice.
	index := make(map[string]int)
	groups := [][]string{}
	for _, word := range words {
		keyBytes := []byte(word)
		// Sorting canonicalizes the character multiset: rearrangements produce
		// byte-identical keys and unrelated words can never collide on one.
		sort.Slice(keyBytes, func(i, j int) bool { return keyBytes[i] < keyBytes[j] })
		key := string(keyBytes)
		// Every word lands in exactly one bucket, alongside precisely its
		// rearrangements; a first-seen key opens a new group.
		if idx, ok := index[key]; ok {
			groups[idx] = append(groups[idx], word)
		} else {
			index[key] = len(groups)
			groups = append(groups, []string{word})
		}
	}
	return groups
}
