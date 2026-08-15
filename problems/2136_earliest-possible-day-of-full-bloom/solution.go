import "sort"

func earliestFullBloom(plantTime []int, growTime []int) int {
	idx := make([]int, len(plantTime))
	for i := range idx {
		idx[i] = i
	}
	sort.SliceStable(idx, func(a, b int) bool {
		return growTime[idx[a]] > growTime[idx[b]]
	})
	best := 0
	prefix := 0
	for _, i := range idx {
		prefix += plantTime[i]
		if prefix+growTime[i] > best {
			best = prefix + growTime[i]
		}
	}
	return best
}
