import "sort"

func longestNestedChain(pairs [][]int) int {
	// Width ascending, height descending on ties: a chain needs strictly
	// increasing widths, so at most one pair per width fits, and the
	// descending tie-break keeps equal widths from chaining among
	// themselves — the task reduces to LIS on heights.
	sort.Slice(pairs, func(a, b int) bool {
		if pairs[a][0] != pairs[b][0] {
			return pairs[a][0] < pairs[b][0]
		}
		return pairs[a][1] > pairs[b][1]
	})
	// Patience sorting: tails[i] = min height ending a chain of length i+1.
	tails := []int{}
	for _, e := range pairs {
		x := e[1]
		// SearchInts is a lower bound: STRICT increase (rejects equal
		// heights); extend the longest chain or replace the first >= tail
		// — safe, it only helps future extensions.
		i := sort.SearchInts(tails, x)
		if i == len(tails) {
			tails = append(tails, x)
		} else {
			tails[i] = x
		}
	}
	return len(tails)
}
