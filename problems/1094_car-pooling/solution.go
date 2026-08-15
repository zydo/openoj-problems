func carPooling(trips [][]int, capacity int) bool {
	diff := make([]int, 1001)
	for _, t := range trips {
		diff[t[1]] += t[0]
		diff[t[2]] -= t[0]
	}
	used := 0
	for _, delta := range diff {
		used += delta
		if used > capacity {
			return false
		}
	}
	return true
}
