import "sort"

func countDominatedPoints(points [][]int) int {
	// x descending; y ASCENDING within equal x so that
	// equal-x points (which can never dominate each other) only ever
	// meet a running max from strictly larger-x groups.
	props := make([][]int, len(points))
	copy(props, points)
	sort.Slice(props, func(i, j int) bool {
		if props[i][0] != props[j][0] {
			return props[i][0] > props[j][0]
		}
		return props[i][1] < props[j][1]
	})
	dominated := 0
	// Every earlier point has x >= the current one's, so the
	// current one is dominated exactly when some seen y is strictly
	// greater -- one running maximum is enough.
	maxY := 0
	for _, p := range props {
		if p[1] < maxY {
			dominated++
		} else {
			// Raise the max only when not dominated, so later (smaller-x)
			// groups compare against it.
			maxY = p[1]
		}
	}
	return dominated
}
