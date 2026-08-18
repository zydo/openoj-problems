import (
	"math"
	"sort"
)

func minCoveringPositions(intervals [][]int) int {
	ordered := make([][]int, len(intervals))
	copy(ordered, intervals)
	sort.Slice(ordered, func(i, j int) bool { return ordered[i][1] < ordered[j][1] })
	// Position-cover greedy: sort by right endpoint and place a position at the
	// right end of the first uncovered interval — among the positions
	// covering it, the right endpoint reaches every interval that any
	// earlier position could.
	chosen := 0
	// Sentinel below any coordinate (coordinates span signed 32-bit).
	lastPosition := int64(math.MinInt64)
	for _, p := range ordered {
		// Strict >: intervals are closed, so start == lastPosition is already
		// covered; otherwise place a position at the earliest end remaining.
		if int64(p[0]) > lastPosition {
			chosen++
			lastPosition = int64(p[1])
		}
	}
	return chosen
}
