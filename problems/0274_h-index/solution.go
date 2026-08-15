func hIndex(citations []int) int {
	n := len(citations)
	count := make([]int, n+1)
	for _, c := range citations {
		if c > n {
			c = n
		}
		count[c]++
	}
	total := 0
	for h := n; h >= 0; h-- {
		total += count[h]
		if total >= h {
			return h
		}
	}
	return 0
}
