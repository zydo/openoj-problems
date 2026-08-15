func numberOfUniqueGoodSubsequences(binary string) int {
	const MOD = 1000000007
	end0 := 0
	end1 := 0
	hasZero := false
	for i := 0; i < len(binary); i++ {
		if binary[i] == '0' {
			end0 = (end0 + end1) % MOD
			hasZero = true
		} else {
			end1 = (end1 + end0 + 1) % MOD
		}
	}
	ans := (end0 + end1) % MOD
	if hasZero {
		ans = (ans + 1) % MOD
	}
	return ans
}
