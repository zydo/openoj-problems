func maximumCandies(candies []int, k int64) int {
	can := func(c int) bool {
		if c == 0 {
			return true
		}
		var cnt int64
		for _, p := range candies {
			cnt += int64(p / c)
			if cnt >= k {
				return true
			}
		}
		return cnt >= k
	}

	lo, hi := 0, 0
	for _, p := range candies {
		if p > hi {
			hi = p
		}
	}
	for lo < hi {
		mid := lo + (hi-lo+1)/2
		if can(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}
	return lo
}
