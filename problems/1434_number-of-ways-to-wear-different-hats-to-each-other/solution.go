func numberWays(hats [][]int) int {
	const MOD = 1000000007
	n := len(hats)
	full := (1 << n) - 1
	h2p := make([][]int, 41)
	for p := 0; p < n; p++ {
		for _, h := range hats[p] {
			h2p[h] = append(h2p[h], p)
		}
	}
	dp := make([]int64, full+1)
	dp[0] = 1
	for h := 1; h <= 40; h++ {
		people := h2p[h]
		if len(people) == 0 {
			continue
		}
		ndp := make([]int64, full+1)
		copy(ndp, dp)
		for mask := 0; mask <= full; mask++ {
			v := dp[mask]
			if v == 0 {
				continue
			}
			for _, p := range people {
				bit := 1 << p
				if mask&bit == 0 {
					nm := mask | bit
					ndp[nm] = (ndp[nm] + v) % MOD
				}
			}
		}
		dp = ndp
	}
	return int(dp[full])
}
