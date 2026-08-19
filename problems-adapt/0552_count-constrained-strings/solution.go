func countConstrainedStrings(n int) int {
	const MOD = 1000000007
	// dp[a][l] = strings built so far that spent `a` copies of 'x' (<2)
	// and end with `l` consecutive 'y's (<3)
	var dp, ndp [2][3]int
	dp[0][0] = 1
	for step := 0; step < n; step++ {
		for a := 0; a < 2; a++ {
			for l := 0; l < 3; l++ {
				ndp[a][l] = 0
			}
		}
		for a := 0; a < 2; a++ {
			for l := 0; l < 3; l++ {
				v := dp[a][l]
				if v == 0 {
					continue
				}
				ndp[a][0] = (ndp[a][0] + v) % MOD // append 'z'
				if a+1 < 2 {
					ndp[a+1][0] = (ndp[a+1][0] + v) % MOD // append 'x'
				}
				if l+1 < 3 {
					ndp[a][l+1] = (ndp[a][l+1] + v) % MOD // append 'y'
				}
			}
		}
		dp = ndp
	}
	total := 0
	for a := 0; a < 2; a++ {
		for l := 0; l < 3; l++ {
			total = (total + dp[a][l]) % MOD
		}
	}
	return total
}
