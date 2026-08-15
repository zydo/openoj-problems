func coinChange(coins []int, amount int) int {
	inf := amount + 1
	dp := make([]int, amount+1)
	for i := range dp {
		dp[i] = inf
	}
	dp[0] = 0
	for a := 1; a <= amount; a++ {
		for _, c := range coins {
			if c <= a && dp[a-c]+1 < dp[a] {
				dp[a] = dp[a-c] + 1
			}
		}
	}
	if dp[amount] >= inf {
		return -1
	}
	return dp[amount]
}
