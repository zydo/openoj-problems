func singleNumber(nums []int) int {
	result := 0
	for _, value := range nums {
		result ^= value
	}
	return result
}
