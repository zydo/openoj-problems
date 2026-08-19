import "sort"

func maxNonadjacentValueScore(values []int) int {
	// Each distinct value has weight v * count[v], so the optimization
	// selects nonconsecutive weighted labels using a two-state recurrence over
	// the sorted distinct values.
	count := map[int]int{}
	for _, v := range values {
		count[v]++
	}
	orderedValues := make([]int, 0, len(count))
	for k := range count {
		orderedValues = append(orderedValues, k)
	}
	sort.Ints(orderedValues)

	take, skip := 0, 0
	hasPrev := false
	prev := 0
	for _, value := range orderedValues {
		base := take
		if skip > take {
			base = skip
		}
		// Adjacent predecessor conflicts with its take; a gap (missing v-1)
		// makes taking v conflict with nothing, so both states carry in.
		if hasPrev && prev == value-1 {
			base = skip
		}
		newTake := base + value*count[value]
		newSkip := take
		if skip > take {
			newSkip = skip
		}
		take, skip = newTake, newSkip
		prev, hasPrev = value, true
	}
	if skip > take {
		return skip
	}
	return take
}
