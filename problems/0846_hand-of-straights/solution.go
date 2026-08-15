import "sort"

func isNStraightHand(hand []int, groupSize int) bool {
	if len(hand)%groupSize != 0 {
		return false
	}
	counts := make(map[int]int)
	for _, v := range hand {
		counts[v]++
	}
	values := make([]int, 0, len(counts))
	for v := range counts {
		values = append(values, v)
	}
	sort.Ints(values)
	for _, value := range values {
		need := counts[value]
		if need > 0 {
			for nv := value; nv < value+groupSize; nv++ {
				if counts[nv] < need {
					return false
				}
				counts[nv] -= need
			}
		}
	}
	return true
}
