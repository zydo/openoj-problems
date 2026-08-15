func maxResult(nums []int, k int) int64 {
	n := len(nums)
	dp := make([]int64, n)
	dp[0] = int64(nums[0])
	window := []int{0}
	for i := 1; i < n; i++ {
		for window[0] < i-k {
			window = window[1:]
		}
		dp[i] = int64(nums[i]) + dp[window[0]]
		for len(window) > 0 && dp[window[len(window)-1]] <= dp[i] {
			window = window[:len(window)-1]
		}
		window = append(window, i)
	}
	return dp[n-1]
}
