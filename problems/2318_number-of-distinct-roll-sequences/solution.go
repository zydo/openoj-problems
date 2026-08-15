func distinctSequences(n int) int {
	const MOD = 1000000007
	gcd := func(a, b int) int {
		for b != 0 {
			a, b = b, a%b
		}
		return a
	}
	if n == 1 {
		return 6
	}
	dp := make([][]int64, 7)
	for i := range dp {
		dp[i] = make([]int64, 7)
	}
	for a := 1; a <= 6; a++ {
		for b := 1; b <= 6; b++ {
			if a != b && gcd(a, b) == 1 {
				dp[a][b] = 1
			}
		}
	}
	for length := 3; length <= n; length++ {
		ndp := make([][]int64, 7)
		for i := range ndp {
			ndp[i] = make([]int64, 7)
		}
		for a := 1; a <= 6; a++ {
			for b := 1; b <= 6; b++ {
				cnt := dp[a][b]
				if cnt == 0 {
					continue
				}
				for c := 1; c <= 6; c++ {
					if c != a && c != b && gcd(c, b) == 1 {
						ndp[b][c] = (ndp[b][c] + cnt) % MOD
					}
				}
			}
		}
		dp = ndp
	}
	var total int64
	for a := 1; a <= 6; a++ {
		for b := 1; b <= 6; b++ {
			total = (total + dp[a][b]) % MOD
		}
	}
	return int(total)
}
