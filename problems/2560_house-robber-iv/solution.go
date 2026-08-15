func minCapability(nums []int, k int) int {
	lo, hi := nums[0], nums[0]
	for _, x := range nums {
		lo = min(lo, x)
		hi = max(hi, x)
	}
	for lo < hi {
		mid := lo + (hi-lo)/2
		if feasible(nums, mid, k) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}

func feasible(nums []int, cap int, k int) bool {
	count := 0
	i := 0
	for i < len(nums) {
		if nums[i] <= cap {
			count++
			i += 2
		} else {
			i++
		}
	}
	return count >= k
}
