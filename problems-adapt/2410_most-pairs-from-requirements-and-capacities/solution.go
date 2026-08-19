import "sort"

func mostRequirementCapacityPairs(requirements []int, capacities []int) int {
	sort.Ints(requirements)
	sort.Ints(capacities)
	// Greedy: pair the weakest unmatched requirement with the weakest
	// unmatched capacity — optimal by an exchange argument.
	i, j, matches := 0, 0, 0
	for i < len(requirements) && j < len(capacities) {
		if requirements[i] <= capacities[j] {
			matches++
			i++
			j++
		} else {
			// Capacity too weak for the weakest remaining requirement; requirements
			// only get stronger, so it is useless forever — skip it.
			j++
		}
	}
	return matches
}
