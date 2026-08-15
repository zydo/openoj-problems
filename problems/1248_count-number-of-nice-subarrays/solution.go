func numberOfSubarrays(nums []int, k int) int {
	n := len(nums)
	counts := make([]int, n+1)
	counts[0] = 1
	odds := 0
	result := 0
	for _, x := range nums {
		odds += x & 1
		if odds-k >= 0 {
			result += counts[odds-k]
		}
		counts[odds]++
	}
	return result
}
