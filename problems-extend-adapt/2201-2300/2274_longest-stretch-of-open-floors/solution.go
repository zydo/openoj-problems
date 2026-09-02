import "sort"

func longestOpenStretch(bottom int, top int, blocked []int) int {
	sort.Ints(blocked)
	best := blocked[0] - bottom
	if gap := top - blocked[len(blocked)-1]; gap > best {
		best = gap
	}
	for i := 1; i < len(blocked); i++ {
		if gap := blocked[i] - blocked[i-1] - 1; gap > best {
			best = gap
		}
	}
	return best
}
