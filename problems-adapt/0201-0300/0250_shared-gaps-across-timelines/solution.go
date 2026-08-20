import "sort"

func sharedIdleGaps(timelines [][][]int) [][]int {
	type slot struct {
		start, end int
	}
	// A moment is free exactly when no timeline is busy, so only the
	// union matters: pool every interval, forgetting ownership.
	intervals := []slot{}
	for _, timeline := range timelines {
		for _, interval := range timeline {
			intervals = append(intervals, slot{interval[0], interval[1]})
		}
	}
	// Sorted by start (then end), the sweep meets busy blocks in order.
	sort.Slice(intervals, func(i, j int) bool {
		if intervals[i].start != intervals[j].start {
			return intervals[i].start < intervals[j].start
		}
		return intervals[i].end < intervals[j].end
	})
	free := [][]int{}
	started := false
	previousEnd := 0
	for _, interval := range intervals {
		// Starting strictly beyond the furthest end seen so far proves
		// nothing covers (previousEnd, start); strictness keeps
		// touching intervals continuous (no zero-length gaps).
		if started && interval.start > previousEnd {
			free = append(free, []int{previousEnd, interval.start})
		}
		// Otherwise merge into the busy block, keeping the running max
		// of ends so a long interval absorbs shorter ones inside it.
		if !started {
			previousEnd = interval.end
		} else if interval.end > previousEnd {
			previousEnd = interval.end
		}
		started = true
	}
	return free
}
