func preimageSizeFZF(k int) int {
	zeta := func(x int64) int64 {
		count := int64(0)
		p := int64(5)
		for p <= x {
			count += x / p
			p *= 5
		}
		return count
	}

	lo := int64(0)
	hi := int64(5)*int64(k+1) + 10
	for lo < hi {
		mid := lo + (hi-lo)/2
		if zeta(mid) < int64(k) {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	if zeta(lo) == int64(k) {
		return 5
	}
	return 0
}
