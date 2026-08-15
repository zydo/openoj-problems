func findMaximumNumber(k int64, x int) int64 {
	lo, hi := int64(0), int64(10000000000000000)
	for priceSum3007(hi, x) <= k {
		hi *= 2
	}
	for lo+1 < hi {
		mid := (lo + hi) / 2
		if priceSum3007(mid, x) <= k {
			lo = mid
		} else {
			hi = mid
		}
	}
	return lo
}

func priceSum3007(n int64, x int) int64 {
	var total int64
	p := x
	for (int64(1) << uint(p-1)) <= n {
		b := uint(p - 1)
		cycle := int64(1) << (b + 1)
		full := (n + 1) / cycle
		rem := (n + 1) % cycle
		half := int64(1) << b
		extra := rem - half
		if extra < 0 {
			extra = 0
		}
		total += full*half + extra
		p += x
	}
	return total
}
