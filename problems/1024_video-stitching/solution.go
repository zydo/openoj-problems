import "sort"

func videoStitching(clips [][]int, time int) int {
	ordered := make([][]int, len(clips))
	copy(ordered, clips)
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
	for covered < time {
		for i < n && ordered[i][0] <= covered {
			if ordered[i][1] > farthest {
				farthest = ordered[i][1]
			}
			i++
		}
		if farthest == covered {
			return -1
		}
		covered = farthest
		count++
	}
	return count
}
