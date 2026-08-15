import "sort"

func palindromePairs(words []string) [][]int {
	index := make(map[string]int)
	for i, w := range words {
		index[w] = i
	}
	results := make(map[[2]int]bool)

	isPalindrome := func(s string) bool {
		a, b := 0, len(s)-1
		for a < b {
			if s[a] != s[b] {
				return false
			}
			a++
			b--
		}
		return true
	}

	for j, w := range words {
		length := len(w)
		for cut := 0; cut <= length; cut++ {
			prefix := w[:cut]
			suffix := w[cut:]
			if isPalindrome(prefix) {
				rev := []rune(suffix)
				for a, b := 0, len(rev)-1; a < b; a, b = a+1, b-1 {
					rev[a], rev[b] = rev[b], rev[a]
				}
				if idx, ok := index[string(rev)]; ok && idx != j {
					results[[2]int{idx, j}] = true
				}
			}
			if cut != length && isPalindrome(suffix) {
				rev := []rune(prefix)
				for a, b := 0, len(rev)-1; a < b; a, b = a+1, b-1 {
					rev[a], rev[b] = rev[b], rev[a]
				}
				if idx, ok := index[string(rev)]; ok && idx != j {
					results[[2]int{j, idx}] = true
				}
			}
		}
	}

	out := make([][]int, 0, len(results))
	for pair := range results {
		p := pair
		out = append(out, []int{p[0], p[1]})
	}
	sort.Slice(out, func(a, b int) bool {
		if out[a][0] != out[b][0] {
			return out[a][0] < out[b][0]
		}
		return out[a][1] < out[b][1]
	})
	return out
}
