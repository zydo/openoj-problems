func maxNonAdjacentLoot(nums []int) int {
	// Rolling two-variable DP: cur = best through position i-1, prev = best
	// through position i-2; both start at 0 ("nothing taken yet").
	prev, cur := 0, 0
	for _, x := range nums {
		// Skip this position (keep cur) or take it (prev + x); the tuple
		// assignment advances both values with no temporary array.
		prev, cur = cur, max(cur, prev+x)
	}
	return cur
}
