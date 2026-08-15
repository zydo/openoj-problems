func longestNiceSubarray(nums []int) int {
	best := 1
	left := 0
	windowOr := 0
	for right := 0; right < len(nums); right++ {
		value := nums[right]
		for windowOr&value != 0 {
			windowOr ^= nums[left]
			left++
		}
		windowOr |= value
		if right-left+1 > best {
			best = right - left + 1
		}
	}
	return best
}
