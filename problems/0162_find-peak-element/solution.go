func findPeakElement(nums []int) int {
	n := len(nums)
	for i := 0; i < n; i++ {
		leftOk := i == 0 || nums[i] > nums[i-1]
		rightOk := i == n-1 || nums[i] > nums[i+1]
		if leftOk && rightOk {
			return i
		}
	}
	return -1
}
