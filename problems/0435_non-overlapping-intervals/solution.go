import (
	"math"
	"sort"
)

func eraseOverlapIntervals(intervals [][]int) int {
	ordered := make([][]int, len(intervals))
	copy(ordered, intervals)
	sort.Slice(ordered, func(i, j int) bool { return ordered[i][1] < ordered[j][1] })
	removed := 0
	prevEnd := int64(math.MinInt64)
	for _, iv := range ordered {
		if int64(iv[0]) >= prevEnd {
			prevEnd = int64(iv[1])
		} else {
			removed++
		}
	}
	return removed
}
