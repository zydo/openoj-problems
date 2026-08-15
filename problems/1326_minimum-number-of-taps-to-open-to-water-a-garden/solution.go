import "sort"

func minTaps(n int, ranges []int) int {
	type interval struct{ start, end int }
	intervals := make([]interval, len(ranges))
	for i, r := range ranges {
		start := i - r
		if start < 0 {
			start = 0
		}
		end := i + r
		if end > n {
			end = n
		}
		intervals[i] = interval{start, end}
	}
	sort.Slice(intervals, func(a, b int) bool {
		if intervals[a].start != intervals[b].start {
			return intervals[a].start < intervals[b].start
		}
		return intervals[a].end < intervals[b].end
	})
	count := 0
	covered := 0
	i := 0
	total := len(intervals)
	for covered < n {
		reach := covered
		for i < total && intervals[i].start <= covered {
			if intervals[i].end > reach {
				reach = intervals[i].end
			}
			i++
		}
		if reach == covered {
			return -1
		}
		covered = reach
		count++
	}
	return count
}
