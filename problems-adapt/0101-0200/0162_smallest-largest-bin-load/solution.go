func smallestLargestBinLoad(n int, piles []int) int {
	// A bin holds items from one pile only, so a pile with q items needs
	// ceil(q/x) bins; integer arithmetic avoids floats.
	binsNeeded := func(x int) int {
		total := 0
		for _, q := range piles {
			total += (q + x - 1) / x
		}
		return total
	}

	// Feasibility is monotone in the cap x, so binary-search the smallest
	// feasible one. hi = max(piles) is always feasible (one bin can
	// take an entire pile).
	lo := 1
	hi := piles[0]
	for _, q := range piles {
		if q > hi {
			hi = q
		}
	}
	// Invariant: lo possibly too small, hi known feasible; the sum check
	// uses <= n since leftover bins may receive nothing.
	for lo < hi {
		mid := lo + (hi-lo)/2
		if binsNeeded(mid) <= n {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
