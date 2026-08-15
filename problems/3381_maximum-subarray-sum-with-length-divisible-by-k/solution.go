import "math"

func maxSubarraySum(nums []int, k int) int64 {
	n := len(nums)
	prefix := make([]int64, n+1)
	for i := 0; i < n; i++ {
		prefix[i+1] = prefix[i] + int64(nums[i])
	}
	minPref := make([]int64, k)
	for r := range minPref {
		minPref[r] = math.MaxInt64
	}
	best := int64(math.MinInt64)
	for i := 0; i <= n; i++ {
		r := i % k
		if minPref[r] != math.MaxInt64 {
			cand := prefix[i] - minPref[r]
			if cand > best {
				best = cand
			}
		}
		if prefix[i] < minPref[r] {
			minPref[r] = prefix[i]
		}
	}
	return best
}
