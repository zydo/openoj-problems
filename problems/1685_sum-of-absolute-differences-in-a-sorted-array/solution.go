func getSumAbsoluteDifferences(nums []int) []int {
	n := len(nums)
	total := 0
	for _, x := range nums {
		total += x
	}
	prefix := 0
	result := make([]int, n)
	for i := 0; i < n; i++ {
		x := nums[i]
		left := x*i - prefix
		suffix := total - prefix - x
		right := suffix - x*(n-i-1)
		result[i] = left + right
		prefix += x
	}
	return result
}
