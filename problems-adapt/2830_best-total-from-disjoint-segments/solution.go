func maxDisjointTotal(n int, segments [][]int) int {
	// Non-overlapping segments make this weighted interval scheduling on a
	// line. Bucket segments by end position — the bucket array itself provides
	// ordering by end position, so no sorting is needed.
	byEnd := make([][][2]int, n)
	for _, offer := range segments {
		e := offer[1]
		byEnd[e] = append(byEnd[e], [2]int{offer[0], offer[2]})
	}
	// dp[e+1]: best value from positions 0..e. Either position e stays unclaimed
	// (carry dp[e] forward) or some segment [start, e, value] is claimed on top of
	// the optimum strictly before its start — reading dp[start] is what
	// keeps overlapping segments from being combined.
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
