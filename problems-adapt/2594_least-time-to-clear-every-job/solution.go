import "math"

func leastTime(factors []int, jobs int) int64 {
	minRank := int64(math.MaxInt64)
	for _, r := range factors {
		if int64(r) < minRank {
			minRank = int64(r)
		}
	}
	// Feasibility is monotone in t (mechanics can idle), so binary search the
	// minimum feasible time. Upper bound: the best mechanic repairing every
	// car alone, min(factors) * jobs^2.
	lo, hi := int64(1), minRank*int64(jobs)*int64(jobs)
	feasible := func(t int64) bool {
		// Within budget t, a rank-r mechanic finishes r*n^2 <= t jobs, so
		// its capacity is isqrt(t / r); sum capacities with early exit.
		var total int64
		for _, r := range factors {
			total += isqrt64(t / int64(r))
			if total >= int64(jobs) {
				return true
			}
		}
		return total >= int64(jobs)
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

func isqrt64(x int64) int64 {
	r := int64(math.Sqrt(float64(x)))
	for r > 0 && r*r > x {
		r--
	}
	for (r+1)*(r+1) <= x {
		r++
	}
	return r
}
