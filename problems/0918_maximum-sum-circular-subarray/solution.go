func maxSubarraySumCircular(nums []int) int {
	total := 0
	for _, x := range nums {
		total += x
	}
	curMax, bestMax := nums[0], nums[0]
	curMin, bestMin := nums[0], nums[0]
	for _, x := range nums[1:] {
		if curMax > 0 {
			curMax = x + curMax
		} else {
			curMax = x
		}
		if curMax > bestMax {
			bestMax = curMax
		}
		if curMin < 0 {
			curMin = x + curMin
		} else {
			curMin = x
		}
		if curMin < bestMin {
			bestMin = curMin
		}
	}
	if bestMax < 0 {
		return bestMax
	}
	if total-bestMin > bestMax {
		return total - bestMin
	}
	return bestMax
}
