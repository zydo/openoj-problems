func getLastMoment(n int, left []int, right []int) int {
	best := 0
	for _, position := range left {
		if position > best {
			best = position
		}
	}
	for _, position := range right {
		if n-position > best {
			best = n - position
		}
	}
	return best
}
