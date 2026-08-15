func shipWithinDays(weights []int, days int) int {
	feasible := func(cap int) bool {
		need := 1
		current := 0
		for _, w := range weights {
			if current+w > cap {
				need++
				if need > days {
					return false
				}
				current = w
			} else {
				current += w
			}
		}
		return true
	}

	lo := 0
	hi := 0
	for _, w := range weights {
		if w > lo {
			lo = w
		}
		hi += w
	}
	for lo < hi {
		mid := lo + (hi-lo)/2
		if feasible(mid) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
