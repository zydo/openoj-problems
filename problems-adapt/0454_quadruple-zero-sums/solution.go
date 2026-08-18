func countQuadrupleZeroSums(first []int, second []int, third []int, fourth []int) int {
	// Meet in the middle: a+b+c+d = 0 iff a+b = -(c+d), so index the first
	// two arrays' pair sums with multiplicities (not a set).
	sums := make(map[int]int)
	for _, a := range first {
		for _, b := range second {
			sums[a+b]++
		}
	}
	total := 0
	// Each (c,d) pair adds the number of (a,b) pairs summing to its
	// negation; every zero tuple is counted once via its unique split.
	for _, c := range third {
		for _, d := range fourth {
			total += sums[-(c + d)]
		}
	}
	return total
}
