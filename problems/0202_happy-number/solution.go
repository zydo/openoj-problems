func isHappy(n int) bool {
	step := func(m int) int {
		total := 0
		for m != 0 {
			digit := m % 10
			total += digit * digit
			m /= 10
		}
		return total
	}
	seen := make(map[int]bool)
	for n != 1 && !seen[n] {
		seen[n] = true
		n = step(n)
	}
	return n == 1
}
