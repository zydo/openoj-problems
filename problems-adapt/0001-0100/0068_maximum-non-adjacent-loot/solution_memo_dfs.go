func maxNonAdjacentLoot(nums []int) int {
	n := len(nums)
	// Top-down mirror of the rolling DP: best(i) = max loot from position i
	// onward. memo[i] caches it (-1 = not computed yet); n <= 100 keeps the
	// recursion depth trivially safe.
	memo := make([]int, n)
	for i := range memo {
		memo[i] = -1
	}
	var best func(i int) int
	best = func(i int) int {
		// Past the last position there is nothing left to take.
		if i >= n {
			return 0
		}
		if memo[i] < 0 {
			// Take position i (so i+1 is off limits) or skip it.
			memo[i] = max(nums[i]+best(i+2), best(i+1))
		}
		return memo[i]
	}
	return best(0)
}
