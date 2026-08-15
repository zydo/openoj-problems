import "sort"

func findWords(board [][]string, words []string) []string {
	m, n := len(board), len(board[0])

	type node struct {
		children map[byte]*node
		word     string
	}
	newNode := func() *node {
		return &node{children: make(map[byte]*node)}
	}
	trie := newNode()
	for _, word := range words {
		cur := trie
		for k := 0; k < len(word); k++ {
			ch := word[k]
			if cur.children[ch] == nil {
				cur.children[ch] = newNode()
			}
			cur = cur.children[ch]
		}
		cur.word = word
	}

	grid := make([][]byte, m)
	for i := range board {
		grid[i] = make([]byte, n)
		for j := 0; j < n; j++ {
			grid[i][j] = board[i][j][0]
		}
	}

	found := make(map[string]bool)
	seen := make([][]bool, m)
	for i := range seen {
		seen[i] = make([]bool, n)
	}
	di := [4]int{1, -1, 0, 0}
	dj := [4]int{0, 0, 1, -1}
	var dfs func(i, j int, cur *node)
	dfs = func(i, j int, cur *node) {
		next, ok := cur.children[grid[i][j]]
		if !ok {
			return
		}
		if next.word != "" {
			found[next.word] = true
		}
		seen[i][j] = true
		for t := 0; t < 4; t++ {
			ni, nj := i+di[t], j+dj[t]
			if ni >= 0 && ni < m && nj >= 0 && nj < n && !seen[ni][nj] {
				dfs(ni, nj, next)
			}
		}
		seen[i][j] = false
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			dfs(i, j, trie)
		}
	}
	result := make([]string, 0, len(found))
	for w := range found {
		result = append(result, w)
	}
	sort.Strings(result)
	return result
}
