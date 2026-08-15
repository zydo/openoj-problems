func findRotateSteps(ring string, key string) int {
	n := len(ring)
	var positions [26][]int
	for i := 0; i < n; i++ {
		c := ring[i] - 'a'
		positions[c] = append(positions[c], i)
	}
	const inf = 1 << 30
	dp := make([]int, n)
	for i := range dp {
		dp[i] = inf
	}
	active := []int{0}
	dp[0] = 0
	for t := 0; t < len(key); t++ {
		ndp := make([]int, n)
		for i := range ndp {
			ndp[i] = inf
		}
		nactive := make([]int, 0, len(positions[key[t]-'a']))
		for _, j := range positions[key[t]-'a'] {
			best := inf
			for _, i := range active {
				diff := i - j
				if diff < 0 {
					diff = -diff
				}
				rot := diff
				if n-diff < rot {
					rot = n - diff
				}
				if dp[i]+rot < best {
					best = dp[i] + rot
				}
			}
			ndp[j] = best
			nactive = append(nactive, j)
		}
		dp = ndp
		active = nactive
	}
	ans := inf
	for _, i := range active {
		if dp[i] < ans {
			ans = dp[i]
		}
	}
	return ans + len(key)
}
