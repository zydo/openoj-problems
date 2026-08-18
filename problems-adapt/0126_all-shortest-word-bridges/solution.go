func allShortestBridges(startWord string, targetWord string, dictionary []string) [][]string {
	wordSet := make(map[string]bool)
	for _, w := range dictionary {
		wordSet[w] = true
	}
	if !wordSet[targetWord] {
		return [][]string{}
	}
	// Drop startWord so the search can never route back through it.
	delete(wordSet, startWord)

	// BFS over the implicit one-letter-difference graph: record each word's
	// shortest distance and a DAG of shortest-path edges.
	dist := map[string]int{startWord: 0}
	adjacency := make(map[string][]string)
	queue := []string{startWord}
	letters := "abcdefghijklmnopqrstuvwxyz"
	for head := 0; head < len(queue); head++ {
		word := queue[head]
		d := dist[word]
		chars := []byte(word)
		for i := 0; i < len(chars); i++ {
			orig := chars[i]
			// Try substituting each of the 25 other letters at position i.
			for _, c := range []byte(letters) {
				if c == orig {
					continue
				}
				chars[i] = c
				nxt := string(chars)
				if !wordSet[nxt] {
					continue
				}
				if nd, ok := dist[nxt]; !ok {
					// First discovery: nxt is one level below word.
					dist[nxt] = d + 1
					adjacency[word] = append(adjacency[word], nxt)
					queue = append(queue, nxt)
				} else if nd == d+1 {
					// Already exactly one level below: parallel shortest edge.
					adjacency[word] = append(adjacency[word], nxt)
				}
				// Same-level or backward edges never lie on a shortest bridge,
				// so they are simply not recorded.
			}
			chars[i] = orig
		}
	}

	result := [][]string{}
	path := []string{startWord}

	// DFS over the recorded DAG: every edge advances exactly one BFS level, so
	// so any walk from the start to the target is a shortest bridge.
	var dfs func(word string)
	dfs = func(word string) {
		if word == targetWord {
			cp := make([]string, len(path))
			copy(cp, path)
			result = append(result, cp)
			return
		}
		for _, nxt := range adjacency[word] {
			path = append(path, nxt)
			dfs(nxt)
			path = path[:len(path)-1]
		}
	}
	dfs(startWord)
	return result
}
