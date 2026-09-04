import "sort"

func largestMinGap(slots []int, m int) int {
	pos := make([]int, len(slots))
	copy(pos, slots)
	sort.Ints(pos)

	feasible := func(distance int) bool {
		// Greedy: the first marker sits at the leftmost slot (count = 1),
		// then each marker takes the first slot at least `distance` beyond
		// the last placed one. Earliest-possible placement is never worse,
		// so failure here means no placement works.
		count := 1
		last := pos[0]
		for _, p := range pos[1:] {
			if p-last >= distance {
				count++
				last = p
				if count >= m {
					// All markers placed — exit early.
					return true
				}
			}
		}
		return count >= m
	}

	// Feasibility is monotone in the spacing, so binary search the largest
	// feasible d over [1, span]; the upper-mid form keeps the search moving
	// when lo and hi become adjacent.
	lo, hi := 1, pos[len(pos)-1]-pos[0]
	for lo < hi {
		mid := lo + (hi-lo+1)/2
		if feasible(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}
	return lo
}
