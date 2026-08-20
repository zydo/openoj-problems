func fewestRaises(heights []int) int {
	// Each operation is one horizontal layer of the final profile, and the
	// first heights[0] layers must all span index 0.
	ops := int64(heights[0])
	for i := 1; i < len(heights); i++ {
		// The profile can only rise where a new operation starts, so pay
		// each positive rise; descents are free because earlier layers
		// can simply stop before index i.
		if heights[i] > heights[i-1] {
			ops += int64(heights[i] - heights[i-1])
		}
	}
	return int(ops)
}
