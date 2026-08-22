func pairSumInOrder(nums []int, target int) []int {
	n := len(nums)
	for i := 0; i+1 < n; i++ {
		complement := target - nums[i]
		// The sorted remainder nums[i+1..] is the only legal partner
		// range: a position cannot pair with itself.
		lo, hi := i+1, n-1
		for lo <= hi {
			mid := lo + (hi-lo)/2
			switch {
			case nums[mid] == complement:
				// 1-based indices, smaller position first.
				return []int{i + 1, mid + 1}
			case nums[mid] < complement:
				lo = mid + 1
			default:
				hi = mid - 1
			}
		}
	}
	// Unreachable under the uniqueness promise; keeps the function total.
	return nil
}
