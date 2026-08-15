func lastStoneWeightII(stones []int) int {
	total := 0
	for _, s := range stones {
		total += s
	}
	target := total / 2
	reachable := make([]bool, target+1)
	reachable[0] = true
	for _, value := range stones {
		for s := target; s >= value; s-- {
			if reachable[s-value] {
				reachable[s] = true
			}
		}
	}
	best := 0
	for s := target; s >= 0; s-- {
		if reachable[s] {
			best = s
			break
		}
	}
	return total - 2*best
}
