func minOperations(nums []int) int {
	// Position 0 is frozen, so every later value is a multiple of the one
	// before it. Cap the value axis at 2 * max(nums): no optimal chain ever
	// needs a value above that (exchange argument in solutions.md).
	n := len(nums)
	if n == 1 {
		return 0
	}
	maxVal := nums[0]
	for _, v := range nums[1:] {
		if v > maxVal {
			maxVal = v
		}
	}
	cap := 2 * maxVal
	const INF = int(1e9)
	dp := make([]int, cap+1)
	ndp := make([]int, cap+1)
	for i := range dp {
		dp[i] = INF
	}
	dp[nums[0]] = 0
	for _, x := range nums[1:] {
		for i := range ndp {
			ndp[i] = INF
		}
		for u := 1; u <= cap; u++ {
			if dp[u] >= INF {
				continue
			}
			// First multiple of u reaching x, then every multiple after.
			start := ((x + u - 1) / u) * u
			for v := start; v <= cap; v += u {
				cand := dp[u] + (v - x)
				if cand < ndp[v] {
					ndp[v] = cand
				}
			}
		}
		dp, ndp = ndp, dp
	}
	ans := INF
	for _, v := range dp {
		if v < ans {
			ans = v
		}
	}
	return ans
}
