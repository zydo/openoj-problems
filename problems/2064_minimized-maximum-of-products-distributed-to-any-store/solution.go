func minimizedMaximum(n int, quantities []int) int {
	storesNeeded := func(x int) int {
		total := 0
		for _, q := range quantities {
			total += (q + x - 1) / x
		}
		return total
	}

	lo := 1
	hi := quantities[0]
	for _, q := range quantities {
		if q > hi {
			hi = q
		}
	}
	for lo < hi {
		mid := lo + (hi-lo)/2
		if storesNeeded(mid) <= n {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
