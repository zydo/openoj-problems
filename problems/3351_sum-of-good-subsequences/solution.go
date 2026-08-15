func sumOfGoodSubsequences(nums []int) int {
	const MOD = 1000000007
	// offset by 1 so that value 0 can look up value -1 at index 0
	cnt := make([]int64, 100003)
	sm := make([]int64, 100003)
	total := int64(0)
	for _, x := range nums {
		idx := x + 1
		cPrev := cnt[idx-1]
		cNext := cnt[idx+1]
		sPrev := sm[idx-1]
		sNext := sm[idx+1]
		newCnt := (1 + cPrev + cNext) % MOD
		newSum := (int64(x)*newCnt + sPrev + sNext) % MOD
		cnt[idx] = (cnt[idx] + newCnt) % MOD
		sm[idx] = (sm[idx] + newSum) % MOD
		total = (total + newSum) % MOD
	}
	return int(total)
}
