import "math"

func repairCars(ranks []int, cars int) int64 {
	minRank := int64(math.MaxInt64)
	for _, r := range ranks {
		if int64(r) < minRank {
			minRank = int64(r)
		}
	}
	lo, hi := int64(1), minRank*int64(cars)*int64(cars)
	feasible := func(t int64) bool {
		var total int64
		for _, r := range ranks {
			total += isqrt64(t / int64(r))
			if total >= int64(cars) {
				return true
			}
		}
		return total >= int64(cars)
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
