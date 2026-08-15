func countInterestingSubarrays(nums []int, modulo int, k int) int64 {
	count := make(map[int]int64)
	count[0] = 1
	pref := 0
	var ans int64
	for _, x := range nums {
		if x%modulo == k {
			pref++
		}
		need := ((pref-k)%modulo + modulo) % modulo
		ans += count[need]
		count[pref%modulo]++
	}
	return ans
}
