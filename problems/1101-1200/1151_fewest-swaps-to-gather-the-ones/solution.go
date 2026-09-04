func fewestSwapsToGatherOnes(bits []int) int {
	// the grouped block must hold every 1, so its length is fixed at ones
	ones := 0
	for _, v := range bits {
		ones += v
	}
	if ones <= 1 {
		// zero or a single 1 (or all zeros) is trivially grouped
		return 0
	}
	// zeros in the first window: each zero inside costs exactly one swap
	zeros := 0
	for i := 0; i < ones; i++ {
		if bits[i] == 0 {
			zeros++
		}
	}
	best := zeros
	for i := ones; i < len(bits); i++ {
		// slide by one: entering element adds its zero-ness, leaving
		// element drops its, so the tally stays exact without rescanning
		zeros += (1 - bits[i]) - (1 - bits[i-ones])
		if zeros < best {
			best = zeros
		}
	}
	return best
}
