func longestAdditiveSubseq(nums []int) int {
	n := len(nums)
	indexOf := make(map[int]int)
	for i, v := range nums {
		indexOf[v] = i
	}
	// dp[j][i] = longest additive subsequence ending with nums[j], nums[i]
	dp := make([][]int, n)
	for j := range dp {
		dp[j] = make([]int, n)
		for i := range dp[j] {
			dp[j][i] = 2
		}
	}
	best := 0
	for i := 0; i < n; i++ {
		for j := 0; j < i; j++ {
			need := nums[i] - nums[j]
			if need < nums[j] {
				if k, ok := indexOf[need]; ok {
					dp[j][i] = dp[k][j] + 1
					if dp[j][i] > best {
						best = dp[j][i]
					}
				}
			}
		}
	}
	if best >= 3 {
		return best
	}
	return 0
}
