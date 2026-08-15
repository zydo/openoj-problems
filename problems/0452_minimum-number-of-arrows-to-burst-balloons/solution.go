import (
	"math"
	"sort"
)

func findMinArrowShots(points [][]int) int {
	ordered := make([][]int, len(points))
	copy(ordered, points)
	sort.Slice(ordered, func(i, j int) bool { return ordered[i][1] < ordered[j][1] })
	arrows := 0
	lastArrow := int64(math.MinInt64)
	for _, p := range ordered {
		if int64(p[0]) > lastArrow {
			arrows++
			lastArrow = int64(p[1])
		}
	}
	return arrows
}
