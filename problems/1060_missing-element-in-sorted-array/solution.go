func missingElement(nums []int, k int) int {
	n := len(nums)
	missing := func(i int) int { return nums[i] - nums[0] - i }
	if missing(n-1) < k {
		return nums[n-1] + (k - missing(n-1))
	}
	lo, hi := 0, n-1
	for lo < hi {
		mid := lo + (hi-lo)/2
		if missing(mid) >= k {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return nums[lo-1] + (k - missing(lo-1))
}
