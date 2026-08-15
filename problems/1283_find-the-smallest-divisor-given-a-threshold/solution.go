func smallestDivisor(nums []int, threshold int) int {
	total := func(divisor int) int {
		s := 0
		for _, x := range nums {
			s += (x + divisor - 1) / divisor
		}
		return s
	}
	hi := nums[0]
	for _, x := range nums {
		if x > hi {
			hi = x
		}
	}
	lo := 1
	for lo < hi {
		mid := lo + (hi-lo)/2
		if total(mid) <= threshold {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
