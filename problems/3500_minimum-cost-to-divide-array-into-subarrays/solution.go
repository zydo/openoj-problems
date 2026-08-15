func minimumCost(nums []int, cost []int, k int) int64 {
	n := len(nums)
	prefNums := make([]int64, n+1)
	prefCost := make([]int64, n+1)
	for i := 0; i < n; i++ {
		prefNums[i+1] = prefNums[i] + int64(nums[i])
		prefCost[i+1] = prefCost[i] + int64(cost[i])
	}

	const INF = int64(1) << 62
	dp := make([]int64, n+1)
	for i := range dp {
		dp[i] = INF
	}
	dp[n] = 0
	totalCost := prefCost[n]
	for i := n - 1; i >= 0; i-- {
		best := INF
		for j := i; j < n; j++ {
			seg := prefNums[j+1] * (prefCost[j+1] - prefCost[i])
			seg += int64(k) * (totalCost - prefCost[i])
			cand := seg + dp[j+1]
			if cand < best {
				best = cand
			}
		}
		dp[i] = best
	}
	return dp[0]
}
