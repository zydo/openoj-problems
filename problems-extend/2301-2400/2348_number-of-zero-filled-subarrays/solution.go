func zeroFilledSubarray(nums []int) int64 {
	total := int64(0)
	streak := int64(0)
	for _, num := range nums {
		if num == 0 {
			streak++
			total += streak
		} else {
			streak = 0
		}
	}
	return total
}
