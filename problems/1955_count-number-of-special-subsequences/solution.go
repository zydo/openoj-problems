func countSpecialSubsequences(nums []int) int {
	const MOD = 1000000007
	f0, f1, f2 := 0, 0, 0
	for _, x := range nums {
		if x == 0 {
			f0 = (f0*2 + 1) % MOD
		} else if x == 1 {
			f1 = (f1*2 + f0) % MOD
		} else {
			f2 = (f2*2 + f1) % MOD
		}
	}
	return f2
}
