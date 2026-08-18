func slowestClearingRate(batches []int, h int) int {
	// Batch p costs ceil(p / k) hours; hours(k) only shrinks as k
	// grows, so feasibility is a threshold. Ceil via (p + k - 1) / k
	// with an int64 accumulator: the total can reach 10^4 * 10^9.
	hoursNeeded := func(k int) int64 {
		var total int64
		for _, batch := range batches {
			total += int64((batch + k - 1) / k)
		}
		return total
	}
	// Range [1, max(batches)]: the max rate empties any batch in a
	// single hour, and h >= len(batches) makes it always feasible.
	lo, hi := 1, 0
	for _, batch := range batches {
		if batch > hi {
			hi = batch
		}
	}
	for lo < hi {
		mid := lo + (hi-lo)/2
		// Lower-bound bisection: feasible means the answer is mid
		// or smaller; infeasible raises lo. Exiting, lo is the
		// smallest feasible rate.
		if hoursNeeded(mid) <= int64(h) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
