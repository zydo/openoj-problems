import "sort"

func sumSubseqWidths(nums []int) int {
	const MOD = 1000000007
	sort.Ints(nums)
	n := len(nums)
	pow2 := make([]int64, n)
	pow2[0] = 1
	for i := 1; i < n; i++ {
		pow2[i] = pow2[i-1] * 2 % MOD
	}
	total := int64(0)
	for i, x := range nums {
		d := pow2[i] - pow2[n-1-i]
		total = ((total+int64(x)*d)%MOD + MOD) % MOD
	}
	return int(total)
}
