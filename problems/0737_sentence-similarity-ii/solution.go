func areSentencesSimilarTwo(sentence1 []string, sentence2 []string, similarPairs [][]string) bool {
	if len(sentence1) != len(sentence2) {
		return false
	}

	parent := map[string]string{}
	var find func(string) string
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

	for _, pair := range similarPairs {
		union(pair[0], pair[1])
	}

	for i := range sentence1 {
		if sentence1[i] != sentence2[i] && find(sentence1[i]) != find(sentence2[i]) {
			return false
		}
	}
	return true
}
