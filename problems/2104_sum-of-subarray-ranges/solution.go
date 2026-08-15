func subArrayRanges(nums []int) int64 {
	n := len(nums)
	var total int64
	for i := 0; i < n; i++ {
		mn, mx := nums[i], nums[i]
		for j := i + 1; j < n; j++ {
			if nums[j] < mn {
				mn = nums[j]
			} else if nums[j] > mx {
				mx = nums[j]
			}
			total += int64(mx - mn)
		}
	}
	return total
}
