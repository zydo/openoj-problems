import "sort"

func employeeFreeTime(schedule [][][]int) [][]int {
	type slot struct {
		start, end int
	}
	intervals := []slot{}
	for _, employee := range schedule {
		for _, interval := range employee {
			intervals = append(intervals, slot{interval[0], interval[1]})
		}
	}
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
		if started && interval.start > previousEnd {
			free = append(free, []int{previousEnd, interval.start})
		}
		if !started {
			previousEnd = interval.end
		} else if interval.end > previousEnd {
			previousEnd = interval.end
		}
		started = true
	}
	return free
}
