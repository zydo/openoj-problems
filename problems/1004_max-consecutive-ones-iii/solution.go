func longestOnes(nums []int, k int) int {
	left := 0
	zeros := 0
	best := 0
	for right, value := range nums {
		if value == 0 {
			zeros++
		}
		for zeros > k {
			if nums[left] == 0 {
				zeros--
			}
			left++
		}
		if right-left+1 > best {
			best = right - left + 1
		}
	}
	return best
}
