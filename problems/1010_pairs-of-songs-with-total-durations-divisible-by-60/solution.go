func numPairsDivisibleBy60(time []int) int {
	counts := make([]int, 60)
	total := 0
	for _, duration := range time {
		remainder := duration % 60
		total += counts[(60-remainder)%60]
		counts[remainder]++
	}
	return total
}
