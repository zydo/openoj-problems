import "sort"

func twoCitySchedCost(costs [][]int) int {
	ordered := make([][]int, len(costs))
	copy(ordered, costs)
	sort.Slice(ordered, func(a, b int) bool {
		return ordered[a][0]-ordered[a][1] < ordered[b][0]-ordered[b][1]
	})
	n := len(ordered) / 2
	total := 0
	for i, cost := range ordered {
		if i < n {
			total += cost[0]
		} else {
			total += cost[1]
		}
	}
	return total
}
