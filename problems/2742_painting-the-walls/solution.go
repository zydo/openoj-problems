func paintWalls(cost []int, time []int) int {
	n := len(cost)
	const INF = int64(1) << 62
	dp := make([]int64, n+1)
	for j := range dp {
		dp[j] = INF
	}
	dp[0] = 0
	for i := 0; i < n; i++ {
		weight := time[i] + 1
		c := int64(cost[i])
		for j := n; j >= 1; j-- {
			src := 0
			if j >= weight {
				src = j - weight
			}
			cand := dp[src] + c
			if cand < dp[j] {
				dp[j] = cand
			}
		}
	}
	return int(dp[n])
}
