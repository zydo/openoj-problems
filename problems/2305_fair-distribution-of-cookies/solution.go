func distributeCookies(cookies []int, k int) int {
	children := make([]int64, k)
	best := int64(1) << 62

	var backtrack func(i int, curMax int64)
	backtrack = func(i int, curMax int64) {
		if curMax >= best {
			return
		}
		if i == len(cookies) {
			best = curMax
			return
		}
		tried := make(map[int64]bool)
		for j := 0; j < k; j++ {
			if tried[children[j]] {
				continue
			}
			tried[children[j]] = true
			children[j] += int64(cookies[i])
			nm := curMax
			if children[j] > nm {
				nm = children[j]
			}
			backtrack(i+1, nm)
			children[j] -= int64(cookies[i])
		}
	}

	backtrack(0, 0)
	return int(best)
}
