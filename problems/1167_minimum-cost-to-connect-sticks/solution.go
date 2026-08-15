import "sort"

func connectSticks(sticks []int) int {
	if len(sticks) <= 1 {
		return 0
	}
	// Two-queue technique: sorted input queue A, combined-results queue B.
	// Both are always non-decreasing, so the two smallest sticks overall are
	// always at the fronts of A and B.
	a := make([]int, len(sticks))
	copy(a, sticks)
	sort.Ints(a)
	var b []int
	total := 0
	take := func() int {
		if len(b) > 0 && (len(a) == 0 || b[0] < a[0]) {
			x := b[0]
			b = b[1:]
			return x
		}
		x := a[0]
		a = a[1:]
		return x
	}
	for len(a)+len(b) > 1 {
		combined := take() + take()
		total += combined
		b = append(b, combined)
	}
	return total
}
