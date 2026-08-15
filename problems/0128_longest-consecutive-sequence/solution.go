func longestConsecutive(nums []int) int {
	values := make(map[int64]struct{}, len(nums))
	for _, value := range nums {
		values[int64(value)] = struct{}{}
	}
	best := 0
	for value := range values {
		if _, ok := values[value-1]; !ok {
			length := 1
			for {
				if _, ok := values[value+int64(length)]; !ok {
					break
				}
				length++
			}
			if length > best {
				best = length
			}
		}
	}
	return best
}
