func smallestLargestGroupSum(nums []int, k int) int {
	groups := make([]int64, k)
	// huge start guarantees the first complete leaf always improves on best
	best := int64(1) << 62

	var backtrack func(i int, curMax int64)
	backtrack = func(i int, curMax int64) {
		// bound pruning: the running max only grows, so this branch can no
		// longer beat the best complete distribution found so far
		if curMax >= best {
			return
		}
		// all items placed: the running max is this leaf's cost
		if i == len(nums) {
			best = curMax
			return
		}
		tried := make(map[int64]bool)
		for j := 0; j < k; j++ {
			// symmetry: groups holding equal totals are interchangeable,
			// so try each distinct total only once
			if tried[groups[j]] {
				continue
			}
			tried[groups[j]] = true
			groups[j] += int64(nums[i])
			// running maximum of the per-group totals
			nm := curMax
			if groups[j] > nm {
				nm = groups[j]
			}
			backtrack(i+1, nm)
			groups[j] -= int64(nums[i])
		}
	}

	backtrack(0, 0)
	return int(best)
}
