func predictTheWinner(nums []int) bool {
	n := len(nums)
	dp := make([]int, n)
	copy(dp, nums)
	for length := 2; length <= n; length++ {
		for i := 0; i+length-1 < n; i++ {
			j := i + length - 1
			takeLeft := nums[i] - dp[i+1]
			takeRight := nums[j] - dp[i]
			if takeLeft > takeRight {
				dp[i] = takeLeft
			} else {
				dp[i] = takeRight
			}
		}
	}
	return dp[0] >= 0
}
