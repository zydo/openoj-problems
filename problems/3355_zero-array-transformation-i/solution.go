func isZeroArray(nums []int, queries [][]int) bool {
	n := len(nums)
	diff := make([]int64, n+1)
	for _, q := range queries {
		diff[q[0]] += 1
		diff[q[1]+1] -= 1
	}
	coverage := int64(0)
	for i := 0; i < n; i++ {
		coverage += diff[i]
		if coverage < int64(nums[i]) {
			return false
		}
	}
	return true
}
