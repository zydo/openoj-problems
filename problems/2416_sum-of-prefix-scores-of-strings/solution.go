type trieNode struct {
	next map[byte]*trieNode
	cnt  int
}

func sumPrefixScores(words []string) []int {
	root := &trieNode{next: make(map[byte]*trieNode)}
	for _, word := range words {
		node := root
		for i := 0; i < len(word); i++ {
			ch := word[i]
			nxt := node.next[ch]
			if nxt == nil {
				nxt = &trieNode{next: make(map[byte]*trieNode)}
				node.next[ch] = nxt
			}
			node = nxt
			node.cnt++
		}
	}
	scores := make([]int, len(words))
	for w, word := range words {
		node := root
		total := 0
		for i := 0; i < len(word); i++ {
			node = node.next[word[i]]
			total += node.cnt
		}
		scores[w] = total
	}
	return scores
}
