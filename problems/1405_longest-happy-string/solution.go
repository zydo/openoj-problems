import "sort"

func longestDiverseString(a int, b int, c int) string {
	counts := []int{a, b, c}
	letters := []byte{'a', 'b', 'c'}
	var result []byte
	for {
		idx := []int{0, 1, 2}
		sort.Slice(idx, func(x, y int) bool {
			if counts[idx[x]] != counts[idx[y]] {
				return counts[idx[x]] > counts[idx[y]]
			}
			return letters[idx[x]] < letters[idx[y]]
		})
		pick := idx[0]
		if counts[pick] == 0 {
			break
		}
		n := len(result)
		if n >= 2 && result[n-1] == letters[pick] && result[n-2] == letters[pick] {
			pick = idx[1]
			if counts[pick] == 0 {
				break
			}
		}
		result = append(result, letters[pick])
		counts[pick]--
	}
	return string(result)
}
