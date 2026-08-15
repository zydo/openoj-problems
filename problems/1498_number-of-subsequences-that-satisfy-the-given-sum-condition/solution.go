import "sort"

func numSubseq(nums []int, target int) int {
	const MOD = 1000000007
	sort.Ints(nums)
	n := len(nums)
	powers := make([]int, n)
	powers[0] = 1
	for i := 1; i < n; i++ {
		powers[i] = powers[i-1] * 2 % MOD
	}
	total := 0
	lo, hi := 0, n-1
	for lo <= hi {
		if nums[lo]+nums[hi] <= target {
			total = (total + powers[hi-lo]) % MOD
			lo++
		} else {
			hi--
		}
	}
	return total
}
