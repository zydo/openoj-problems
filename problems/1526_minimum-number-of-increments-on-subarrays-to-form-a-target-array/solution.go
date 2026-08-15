func minNumberOperations(target []int) int {
	ops := int64(target[0])
	for i := 1; i < len(target); i++ {
		if target[i] > target[i-1] {
			ops += int64(target[i] - target[i-1])
		}
	}
	return int(ops)
}
