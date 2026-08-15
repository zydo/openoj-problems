func minimumOperations(nums []int, target []int) int64 {
	prev := int64(0)
	total := int64(0)
	for i := range nums {
		cur := int64(nums[i]) - int64(target[i])
		if cur > prev {
			total += cur - prev
		}
		prev = cur
	}
	if prev < 0 {
		total += -prev
	}
	return total
}
