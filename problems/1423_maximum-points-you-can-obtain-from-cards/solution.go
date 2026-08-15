func maxScore(cardPoints []int, k int) int {
	n := len(cardPoints)
	total := 0
	for _, value := range cardPoints {
		total += value
	}
	window := n - k
	current := 0
	for i := 0; i < window; i++ {
		current += cardPoints[i]
	}
	best := current
	for i := window; i < n; i++ {
		current += cardPoints[i] - cardPoints[i-window]
		if current < best {
			best = current
		}
	}
	return total - best
}
