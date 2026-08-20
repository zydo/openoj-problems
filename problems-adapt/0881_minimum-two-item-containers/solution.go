import "sort"

func minimumTwoItemContainers(weights []int, capacity int) int {
	sorted := make([]int, len(weights))
	copy(sorted, weights)
	sort.Ints(sorted)
	i, j := 0, len(sorted)-1
	boats := 0
	for i <= j {
		// The heaviest boards either way; the lightest is their best
		// partner, since a heavier one only risks exceeding the capacity.
		// The i < j guard keeps the last person from pairing with themself.
		if i < j && sorted[i]+sorted[j] <= capacity {
			i++
		}
		j--
		boats++
	}
	return boats
}
