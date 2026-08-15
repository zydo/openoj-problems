func findTargetSumWays(nums []int, target int) int {
	dp := map[int]int{0: 1}
	for _, value := range nums {
		nxt := make(map[int]int, len(dp)*2)
		for total, count := range dp {
			nxt[total+value] += count
			nxt[total-value] += count
		}
		dp = nxt
	}
	return dp[target]
}
