import "sort"

func maxValue(events [][]int, k int) int64 {
	sort.Slice(events, func(a, b int) bool { return events[a][1] < events[b][1] })
	n := len(events)
	ends := make([]int, n)
	for i, e := range events {
		ends[i] = e[1]
	}
	// prev[i]: best value using the first i sorted events with one fewer
	// allowed attendance.
	prev := make([]int64, n+1)
	rounds := k
	if rounds > n {
		rounds = n
	}
	for j := 0; j < rounds; j++ {
		cur := make([]int64, n+1)
		best := int64(0)
		for i := 1; i <= n; i++ {
			p := sort.SearchInts(ends, events[i-1][0])
			if take := prev[p] + int64(events[i-1][2]); take > best {
				best = take
			}
			cur[i] = best
		}
		prev = cur
	}
	return prev[n]
}
