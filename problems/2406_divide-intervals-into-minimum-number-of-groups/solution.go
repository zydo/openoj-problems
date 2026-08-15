import "sort"

func minGroups(intervals [][]int) int {
	n := len(intervals)
	starts := make([]int, n)
	ends := make([]int, n)
	for i, interval := range intervals {
		starts[i] = interval[0]
		ends[i] = interval[1]
	}
	sort.Ints(starts)
	sort.Ints(ends)
	groups := 0
	active := 0
	i, j := 0, 0
	for i < n {
		if starts[i] <= ends[j] {
			active++
			if active > groups {
				groups = active
			}
			i++
		} else {
			active--
			j++
		}
	}
	return groups
}
