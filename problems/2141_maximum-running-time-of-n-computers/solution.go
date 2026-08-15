func maxRunTime(n int, batteries []int) int64 {
	n64 := int64(n)
	var sum int64
	for _, b := range batteries {
		sum += int64(b)
	}
	feasible := func(t int64) bool {
		var total int64
		for _, b := range batteries {
			bb := int64(b)
			if bb > t {
				bb = t
			}
			total += bb
		}
		return total >= n64*t
	}
	lo, hi := int64(0), sum/n64
	for lo < hi {
		mid := (lo + hi + 1) / 2
		if feasible(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}
	return lo
}
