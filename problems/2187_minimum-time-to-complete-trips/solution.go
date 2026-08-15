func minimumTime(time []int, totalTrips int) int64 {
	tripsDone := func(t int64) int64 {
		var total int64
		for _, x := range time {
			total += t / int64(x)
		}
		return total
	}

	var mn int64 = 1 << 62
	for _, x := range time {
		if int64(x) < mn {
			mn = int64(x)
		}
	}
	lo, hi := int64(1), mn*int64(totalTrips)
	for lo < hi {
		mid := (lo + hi) / 2
		if tripsDone(mid) >= int64(totalTrips) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
