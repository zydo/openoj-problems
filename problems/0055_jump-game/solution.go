func canJump(nums []int) bool {
	farthest := 0
	last := len(nums) - 1
	for index, reach := range nums {
		if index > farthest {
			return false
		}
		if index+reach > farthest {
			farthest = index + reach
		}
		if farthest >= last {
			return true
		}
	}
	return true
}
