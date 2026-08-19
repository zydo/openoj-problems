func longestAffordableStretch(startCosts []int, usageCosts []int, budget int64) int {
	n := len(startCosts)
	dq := make([]int, 0, n) // indices with decreasing startCosts
	head := 0               // front of the deque
	run := int64(0)
	left := 0
	best := 0
	// window cost max(charge)+k*sum(run) is monotone, so two pointers work
	for right := 0; right < n; right++ {
		// back indices with charge <= the new one can never be the max
		for len(dq) > head && startCosts[dq[len(dq)-1]] <= startCosts[right] {
			dq = dq[:len(dq)-1]
		}
		dq = append(dq, right)
		run += int64(usageCosts[right])
		// over budget: shrink left, advancing head so the stale max drops off
		for len(dq) > head && int64(startCosts[dq[head]])+int64(right-left+1)*run > budget {
			if dq[head] == left {
				head++
			}
			run -= int64(usageCosts[left])
			left++
		}
		if b := right - left + 1; b > best {
			best = b
		}
	}
	return best
}
