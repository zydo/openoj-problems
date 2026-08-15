func maxProduct(nums []int) int {
	best := nums[0]
	curMax := nums[0]
	curMin := nums[0]
	for _, value := range nums[1:] {
		if value < 0 {
			curMax, curMin = curMin, curMax
		}
		if value > curMax*value {
			curMax = value
		} else {
			curMax = curMax * value
		}
		if value < curMin*value {
			curMin = value
		} else {
			curMin = curMin * value
		}
		if curMax > best {
			best = curMax
		}
	}
	return best
}
