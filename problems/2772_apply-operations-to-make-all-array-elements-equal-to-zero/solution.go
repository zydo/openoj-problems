func checkArray(nums []int, k int) bool {
	n := len(nums)
	diff := make([]int64, n+1)
	running := int64(0)
	for i := 0; i < n; i++ {
		running += diff[i]
		cur := int64(nums[i]) - running
		if cur < 0 {
			return false
		}
		if cur == 0 {
			continue
		}
		if i+k > n {
			return false
		}
		running += cur
		diff[i+k] -= cur
	}
	return true
}
