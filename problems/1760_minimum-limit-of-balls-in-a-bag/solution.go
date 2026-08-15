func minimumSize(nums []int, maxOperations int) int {
	needed := func(penalty int) int {
		total := 0
		for _, balls := range nums {
			total += (balls - 1) / penalty
		}
		return total
	}

	lo, hi := 1, 0
	for _, balls := range nums {
		if balls > hi {
			hi = balls
		}
	}
	for lo < hi {
		mid := (lo + hi) / 2
		if needed(mid) <= maxOperations {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
