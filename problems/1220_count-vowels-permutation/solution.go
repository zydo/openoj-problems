func countVowelPermutation(n int) int {
	const MOD = 1000000007
	a, e, i, o, u := 1, 1, 1, 1, 1
	for t := 0; t < n-1; t++ {
		a, e, i, o, u = (e+i+u)%MOD, (a+i)%MOD, (e+o)%MOD, i, (i+o)%MOD
	}
	return (a + e + i + o + u) % MOD
}
