func pairSumInOrder(nums []int, target int) []int {
	left, right := 0, len(nums)-1
	for left < right {
		total := nums[left] + nums[right]
		switch {
		case total == target:
			// 1-based indices as the problem expects.
			return []int{left + 1, right + 1}
		case total < target:
			// Too small: pairing nums[left] with anything smaller than
			// nums[right] only lowers the sum — retire the left value.
			left++
		default:
			// Too large: retire the right value symmetrically.
			right--
		}
	}
	// Unreachable under the uniqueness promise; keeps the function total.
	return nil
}
