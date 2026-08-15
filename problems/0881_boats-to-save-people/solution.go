import "sort"

func numRescueBoats(people []int, limit int) int {
	sorted := make([]int, len(people))
	copy(sorted, people)
	sort.Ints(sorted)
	i, j := 0, len(sorted)-1
	boats := 0
	for i <= j {
		if i < j && sorted[i]+sorted[j] <= limit {
			i++
		}
		j--
		boats++
	}
	return boats
}
