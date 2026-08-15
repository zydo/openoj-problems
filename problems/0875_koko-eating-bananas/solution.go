func minEatingSpeed(piles []int, h int) int {
	hoursNeeded := func(k int) int64 {
		var total int64
		for _, pile := range piles {
			total += int64((pile + k - 1) / k)
		}
		return total
	}
	lo, hi := 1, 0
	for _, pile := range piles {
		if pile > hi {
			hi = pile
		}
	}
	for lo < hi {
		mid := lo + (hi-lo)/2
		if hoursNeeded(mid) <= int64(h) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
