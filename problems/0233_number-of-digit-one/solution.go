func countDigitOne(n int) int {
	if n <= 0 {
		return 0
	}
	count := int64(0)
	factor := int64(1)
	for factor <= int64(n) {
		higher := int64(n) / (factor * 10)
		current := (int64(n) / factor) % 10
		lower := int64(n) % factor
		if current == 0 {
			count += higher * factor
		} else if current == 1 {
			count += higher*factor + lower + 1
		} else {
			count += (higher + 1) * factor
		}
		factor *= 10
	}
	return int(count)
}
