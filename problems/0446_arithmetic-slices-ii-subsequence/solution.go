func numberOfArithmeticSlices(nums []int) int {
	n := len(nums)
	dp := make([]map[int64]int64, n)
	for i := range dp {
		dp[i] = make(map[int64]int64)
	}
	var total int64 = 0
	for i := 0; i < n; i++ {
		for j := 0; j < i; j++ {
			d := int64(nums[i]) - int64(nums[j])
			cnt := dp[j][d]
			total += cnt
			dp[i][d] += cnt + 1
		}
	}
	return int(total)
}
