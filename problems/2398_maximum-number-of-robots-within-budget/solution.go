func maximumRobots(chargeTimes []int, runningCosts []int, budget int64) int {
	n := len(chargeTimes)
	dq := make([]int, 0, n) // indices with decreasing chargeTimes
	head := 0               // front of the deque
	run := int64(0)
	left := 0
	best := 0
	for right := 0; right < n; right++ {
		for len(dq) > head && chargeTimes[dq[len(dq)-1]] <= chargeTimes[right] {
			dq = dq[:len(dq)-1]
		}
		dq = append(dq, right)
		run += int64(runningCosts[right])
		for len(dq) > head && int64(chargeTimes[dq[head]])+int64(right-left+1)*run > budget {
			if dq[head] == left {
				head++
			}
			run -= int64(runningCosts[left])
			left++
		}
		if b := right - left + 1; b > best {
			best = b
		}
	}
	return best
}
