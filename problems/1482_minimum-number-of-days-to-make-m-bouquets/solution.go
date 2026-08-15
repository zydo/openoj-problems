func minDays(bloomDay []int, m int, k int) int {
	n := len(bloomDay)
	if int64(m)*int64(k) > int64(n) {
		return -1
	}
	feasible := func(day int) bool {
		bouquets := 0
		run := 0
		for _, d := range bloomDay {
			if d <= day {
				run++
				if run == k {
					bouquets++
					run = 0
				}
			} else {
				run = 0
			}
		}
		return bouquets >= m
	}
	lo, hi := bloomDay[0], bloomDay[0]
	for _, d := range bloomDay {
		if d < lo {
			lo = d
		}
		if d > hi {
			hi = d
		}
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
