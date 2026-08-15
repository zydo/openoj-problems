func subarraySum(nums []int, k int) int {
	prefixCounts := make(map[int]int, len(nums)+1)
	prefixCounts[0] = 1
	running := 0
	total := 0
	for _, value := range nums {
		running += value
		total += prefixCounts[running-k]
		prefixCounts[running]++
	}
	return total
}
