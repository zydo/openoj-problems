func maxSubArray(nums []int) int {
	best := nums[0]
	current := nums[0]
	for _, value := range nums[1:] {
		if current < 0 {
			current = value
		} else {
			current += value
		}
		if current > best {
			best = current
		}
	}
	return best
}
