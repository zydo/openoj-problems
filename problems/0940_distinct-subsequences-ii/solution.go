func distinctSubseqII(s string) int {
	const MOD = 1000000007
	n := len(s)
	dp := make([]int64, n+1)
	dp[0] = 1
	var last [26]int
	for i := range last {
		last[i] = -1
	}
	for i := 1; i <= n; i++ {
		c := int(s[i-1]) - 'a'
		dp[i] = dp[i-1] * 2 % MOD
		if last[c] >= 0 {
			dp[i] = (dp[i] - dp[last[c]] + MOD) % MOD
		}
		last[c] = i - 1
	}
	return int((dp[n] - 1 + MOD) % MOD)
}
