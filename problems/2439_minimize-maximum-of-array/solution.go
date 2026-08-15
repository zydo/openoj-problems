func minimizeArrayValue(nums []int) int {
	total := 0
	best := 0
	for i, value := range nums {
		total += value
		candidate := (total + i) / (i + 1)
		if candidate > best {
			best = candidate
		}
	}
	return best
}
