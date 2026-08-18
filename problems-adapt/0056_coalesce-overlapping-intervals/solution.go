import "sort"

func coalesce(intervals [][]int) [][]int {
	// Copy, then sort by start (end as tiebreaker): any interval
	// overlapping an earlier one must overlap or touch the most recent
	// coalesced interval, so a sweep tracking only the last coalesced
	// interval suffices. Sorting the copy leaves the input untouched.
	ordered := make([][]int, len(intervals))
	copy(ordered, intervals)
	sort.Slice(ordered, func(i, j int) bool {
		if ordered[i][0] != ordered[j][0] {
			return ordered[i][0] < ordered[j][0]
		}
		return ordered[i][1] < ordered[j][1]
	})
	coalesced := [][]int{}
	for _, interval := range ordered {
		start, end := interval[0], interval[1]
		// `<=` counts touching intervals as overlapping, as required.
		// The start is already covered, so only the right edge matters.
		if n := len(coalesced); n > 0 && start <= coalesced[n-1][1] {
			// Raise the right edge when larger; an interval fully
			// swallowed by the coalesce leaves it untouched.
			if end > coalesced[n-1][1] {
				coalesced[n-1][1] = end
			}
		} else {
			// No overlap with the last coalesced interval: new group.
			coalesced = append(coalesced, []int{start, end})
		}
	}
	return coalesced
}
