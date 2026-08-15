import "sort"

func sumOfPower(nums []int) int {
	const MOD = 1000000007
	a := append([]int(nil), nums...)
	sort.Ints(a)
	var ans, s int64
	for _, x := range a {
		lx := int64(x)
		ans = (ans + (lx*lx%MOD)*((s+lx)%MOD)) % MOD
		s = (2*s + lx) % MOD
	}
	return int(ans)
}
