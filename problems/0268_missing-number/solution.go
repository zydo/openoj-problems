func missingNumber(nums []int) int {
	n := len(nums)
	total := 0
	for _, value := range nums {
		total += value
	}
	return n*(n+1)/2 - total
}
