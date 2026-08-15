func minSubArrayLen(target int, nums []int) int {
	n := len(nums)
	best := n + 1
	window := 0
	left := 0
	for right := 0; right < n; right++ {
		window += nums[right]
		for window >= target {
			if right-left+1 < best {
				best = right - left + 1
			}
			window -= nums[left]
			left++
		}
	}
	if best == n+1 {
		return 0
	}
	return best
}
