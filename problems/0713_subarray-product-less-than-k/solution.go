func numSubarrayProductLessThanK(nums []int, k int) int {
	if k <= 1 {
		return 0
	}
	count := 0
	product := 1
	left := 0
	for right, value := range nums {
		product *= value
		for product >= k {
			product /= nums[left]
			left++
		}
		count += right - left + 1
	}
	return count
}
