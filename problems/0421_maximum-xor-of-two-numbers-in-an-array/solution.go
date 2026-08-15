func findMaximumXOR(nums []int) int {
	best := 0
	mask := 0
	for bit := 30; bit >= 0; bit-- {
		mask |= 1 << uint(bit)
		prefixes := make(map[int]struct{}, len(nums))
		for _, value := range nums {
			prefixes[value&mask] = struct{}{}
		}
		candidate := best | (1 << uint(bit))
		found := false
		for prefix := range prefixes {
			if _, ok := prefixes[candidate^prefix]; ok {
				found = true
				break
			}
		}
		if found {
			best = candidate
		}
	}
	return best
}
