import "sort"

func findLongestChain(pairs [][]int) int {
	sort.Slice(pairs, func(i, j int) bool { return pairs[i][1] < pairs[j][1] })
	length := 0
	currentEnd := -1 << 62
	for _, pair := range pairs {
		if pair[0] > currentEnd {
			length++
			currentEnd = pair[1]
		}
	}
	return length
}
