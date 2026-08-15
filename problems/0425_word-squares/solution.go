import "sort"

func wordSquares(words []string) [][]string {
	n := len(words[0])
	prefixMap := make(map[string][]string)
	for _, w := range words {
		for i := 0; i <= n; i++ {
			p := w[:i]
			prefixMap[p] = append(prefixMap[p], w)
		}
	}

	results := make([][]string, 0)
	square := make([]string, 0, n)

	var backtrack func()
	backtrack = func() {
		if len(square) == n {
			results = append(results, append([]string{}, square...))
			return
		}
		col := len(square)
		prefix := ""
		for r := 0; r < col; r++ {
			prefix += string(square[r][col])
		}
		for _, w := range prefixMap[prefix] {
			square = append(square, w)
			backtrack()
			square = square[:len(square)-1]
		}
	}
	backtrack()

	sort.Slice(results, func(a, b int) bool {
		for i := 0; i < n; i++ {
			if results[a][i] != results[b][i] {
				return results[a][i] < results[b][i]
			}
		}
		return false
	})
	return results
}
