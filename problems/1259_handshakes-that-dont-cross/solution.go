func numberOfWays(numPeople int) int {
	const MOD = 1000000007
	m := numPeople / 2
	catalan := make([]int64, m+1)
	catalan[0] = 1
	for i := 1; i <= m; i++ {
		var total int64
		for j := 0; j < i; j++ {
			total = (total + catalan[j]*catalan[i-1-j]) % MOD
		}
		catalan[i] = total
	}
	return int(catalan[m])
}
