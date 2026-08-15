import "sort"

func numberOfWeakCharacters(properties [][]int) int {
	props := make([][]int, len(properties))
	copy(props, properties)
	sort.Slice(props, func(i, j int) bool {
		if props[i][0] != props[j][0] {
			return props[i][0] > props[j][0]
		}
		return props[i][1] < props[j][1]
	})
	weak := 0
	maxDefense := 0
	for _, p := range props {
		if p[1] < maxDefense {
			weak++
		} else {
			maxDefense = p[1]
		}
	}
	return weak
}
