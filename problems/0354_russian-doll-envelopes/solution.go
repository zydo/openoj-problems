import "sort"

func maxEnvelopes(envelopes [][]int) int {
	sort.Slice(envelopes, func(a, b int) bool {
		if envelopes[a][0] != envelopes[b][0] {
			return envelopes[a][0] < envelopes[b][0]
		}
		return envelopes[a][1] > envelopes[b][1]
	})
	tails := []int{}
	for _, e := range envelopes {
		x := e[1]
		i := sort.SearchInts(tails, x)
		if i == len(tails) {
			tails = append(tails, x)
		} else {
			tails[i] = x
		}
	}
	return len(tails)
}
