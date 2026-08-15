import "sort"

func merge(intervals [][]int) [][]int {
	ordered := make([][]int, len(intervals))
	copy(ordered, intervals)
	sort.Slice(ordered, func(i, j int) bool {
		if ordered[i][0] != ordered[j][0] {
			return ordered[i][0] < ordered[j][0]
		}
		return ordered[i][1] < ordered[j][1]
	})
	merged := [][]int{}
	for _, interval := range ordered {
		start, end := interval[0], interval[1]
		if n := len(merged); n > 0 && start <= merged[n-1][1] {
			if end > merged[n-1][1] {
				merged[n-1][1] = end
			}
		} else {
			merged = append(merged, []int{start, end})
		}
	}
	return merged
}
