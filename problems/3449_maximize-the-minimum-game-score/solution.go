func maxScore(points []int, m int) int64 {
	n := len(points)

	feasible := func(target int64) bool {
		var moves, prev int64
		for i := 0; i < n; i++ {
			gp := int64(points[i])
			remain := (target+gp-1)/gp - prev
			if remain >= 1 {
				prev = remain - 1
				moves += 2*remain - 1
			} else if i != n-1 {
				prev = 0
				moves += 1
			}
			if moves > int64(m) {
				return false
			}
		}
		return moves <= int64(m)
	}

	var hi int64
	for _, p := range points {
		if v := int64(p) * int64(m); v > hi {
			hi = v
		}
	}
	lo := int64(0)
	for lo < hi {
		mid := lo + (hi-lo+1)/2
		if feasible(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}
	return lo
}
