import "sort"

func kLeastGuardedRows(mat [][]int, k int) []int {
	// Weakness order == lexicographic order of (guards, index); rows are
	// all 1's then 0's, so the sum is the first-unmanned index too.
	type row struct {
		guards, index int
	}
	ranked := make([]row, 0, len(mat))
	for i, r := range mat {
		guards := 0
		for _, value := range r {
			guards += value
		}
		ranked = append(ranked, row{guards, i})
	}
	sort.Slice(ranked, func(a, b int) bool {
		if ranked[a].guards != ranked[b].guards {
			return ranked[a].guards < ranked[b].guards
		}
		return ranked[a].index < ranked[b].index
	})
	out := make([]int, 0, k)
	for i := 0; i < k; i++ {
		out = append(out, ranked[i].index)
	}
	return out
}
