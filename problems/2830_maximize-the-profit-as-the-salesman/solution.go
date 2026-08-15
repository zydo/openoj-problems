func maximizeTheProfit(n int, offers [][]int) int {
	byEnd := make([][][2]int, n)
	for _, offer := range offers {
		e := offer[1]
		byEnd[e] = append(byEnd[e], [2]int{offer[0], offer[2]})
	}
	dp := make([]int64, n+1)
	for end := 0; end < n; end++ {
		dp[end+1] = dp[end]
		for _, sg := range byEnd[end] {
			cand := dp[sg[0]] + int64(sg[1])
			if cand > dp[end+1] {
				dp[end+1] = cand
			}
		}
	}
	return int(dp[n])
}
