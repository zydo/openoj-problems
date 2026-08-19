import "sort"

func fewestSegments(segments [][]int, span int) int {
	// Jump-game greedy over segments sorted by start.
	ordered := make([][]int, len(segments))
	copy(ordered, segments)
	sort.Slice(ordered, func(a, b int) bool {
		if ordered[a][0] != ordered[b][0] {
			return ordered[a][0] < ordered[b][0]
		}
		return ordered[a][1] < ordered[b][1]
	})
	count := 0
	covered := 0
	farthest := 0
	i := 0
	n := len(ordered)
	for covered < span {
		// Cursor i never resets: every segment starting at or before `covered`
		// is examined once, tracking the farthest reach it enables.
		for i < n && ordered[i][0] <= covered {
			if ordered[i][1] > farthest {
				farthest = ordered[i][1]
			}
			i++
		}
		// No usable segment reaches past the current coverage: an unbridgeable gap.
		if farthest == covered {
			return -1
		}
		// Take one segment — the farthest-reaching — and jump the frontier.
		covered = farthest
		count++
	}
	return count
}
