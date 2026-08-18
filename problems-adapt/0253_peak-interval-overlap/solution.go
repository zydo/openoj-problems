import "sort"

func peakOverlap(intervals [][]int) int {
	if len(intervals) == 0 {
		return 0
	}
	starts := make([]int, len(intervals))
	ends := make([]int, len(intervals))
	for i, iv := range intervals {
		starts[i] = iv[0]
		ends[i] = iv[1]
	}
	sort.Ints(starts)
	sort.Ints(ends)
	// Equivalent sweep to the min-heap of end times: count intervals that
	// start before the earliest running interval has ended.
	active := 0
	j := 0
	for _, s := range starts {
		if s >= ends[j] {
			j++ // retire the interval that ended earliest
		} else {
			active++
		}
	}
	return active
}
