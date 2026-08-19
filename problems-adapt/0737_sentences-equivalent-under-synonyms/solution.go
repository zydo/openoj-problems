func sentencesEquivalent(wordsA []string, wordsB []string, synonyms [][]string) bool {
	// Different lengths can never be similar.
	if len(wordsA) != len(wordsB) {
		return false
	}

	parent := map[string]string{}
	var find func(string) string
	// Unseen words register as their own singleton component; path compression
	// keeps the structure flat.
	find = func(x string) string {
		p, ok := parent[x]
		if !ok {
			parent[x] = x
			return x
		}
		if p == x {
			return x
		}
		parent[x] = parent[p]
		return find(parent[x])
	}
	union := func(a, b string) {
		ra, rb := find(a), find(b)
		if ra != rb {
			parent[ra] = rb
		}
	}

	// Symmetry + transitivity: similar exactly when identical or in the
	// same component, so unioning the pairs captures the whole relation.
	for _, pair := range synonyms {
		union(pair[0], pair[1])
	}

	for i := range wordsA {
		// Identical words pass; otherwise the roots must agree.
		if wordsA[i] != wordsB[i] && find(wordsA[i]) != find(wordsB[i]) {
			return false
		}
	}
	return true
}
