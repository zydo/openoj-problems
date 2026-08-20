func minMinutesToFinishJobs(cycles []int, quota int) int64 {
	jobsDone := func(t int64) int64 {
		// Workers run independently: each finishes t / x jobs by minute t, so
		// the floor-sum is the exact job count — no simulation.
		var total int64
		for _, x := range cycles {
			total += t / int64(x)
		}
		return total
	}

	var mn int64 = 1 << 62
	for _, x := range cycles {
		if int64(x) < mn {
			mn = int64(x)
		}
	}
	// The completed-job total is non-decreasing in t, so binary search the
	// first feasible minute; the fastest worker alone bounds the answer.
	lo, hi := int64(1), mn*int64(quota)
	for lo < hi {
		mid := (lo + hi) / 2
		if jobsDone(mid) >= int64(quota) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
