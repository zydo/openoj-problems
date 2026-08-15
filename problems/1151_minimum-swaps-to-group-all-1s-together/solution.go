func minSwaps(data []int) int {
	ones := 0
	for _, v := range data {
		ones += v
	}
	if ones <= 1 {
		return 0
	}
	zeros := 0
	for i := 0; i < ones; i++ {
		if data[i] == 0 {
			zeros++
		}
	}
	best := zeros
	for i := ones; i < len(data); i++ {
		zeros += (1 - data[i]) - (1 - data[i-ones])
		if zeros < best {
			best = zeros
		}
	}
	return best
}
