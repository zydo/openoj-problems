func splitArray(nums []int, k int) int {
	feasible := func(limit int64) bool {
		pieces, current := int64(1), int64(0)
		for _, value := range nums {
			if current+int64(value) > limit {
				pieces++
				if pieces > int64(k) {
					return false
				}
				current = int64(value)
			} else {
				current += int64(value)
			}
		}
		return true
	}

	lo, hi := int64(-1)<<62, int64(0)
	for _, value := range nums {
		if int64(value) > lo {
			lo = int64(value)
		}
		hi += int64(value)
	}
	for lo < hi {
		mid := lo + (hi-lo)/2
		if feasible(mid) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return int(lo)
}
