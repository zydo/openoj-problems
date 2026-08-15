func minMoves(nums []int, limit int) int {
	n := len(nums)
	diff := make([]int, 2*limit+2)
	for i := 0; i < n/2; i++ {
		a, b := nums[i], nums[n-1-i]
		lo, hi := a, b
		if lo > hi {
			lo, hi = hi, lo
		}
		diff[2] += 2
		diff[lo+1] -= 1
		diff[a+b] -= 1
		diff[a+b+1] += 1
		diff[hi+limit+1] += 1
	}
	best := 1 << 60
	cur := 0
	for target := 2; target <= 2*limit; target++ {
		cur += diff[target]
		if cur < best {
			best = cur
		}
	}
	return best
}
