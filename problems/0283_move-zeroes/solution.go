func moveZeroes(nums []int) []int {
	slow := 0
	for fast := range nums {
		if nums[fast] != 0 {
			nums[slow], nums[fast] = nums[fast], nums[slow]
			slow++
		}
	}
	return nums
}
