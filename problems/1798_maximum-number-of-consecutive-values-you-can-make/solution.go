import "sort"

func getMaximumConsecutive(coins []int) int {
	sorted := append([]int(nil), coins...)
	sort.Ints(sorted)
	reachable := 0
	for _, coin := range sorted {
		if coin > reachable+1 {
			break
		}
		reachable += coin
	}
	return reachable + 1
}
