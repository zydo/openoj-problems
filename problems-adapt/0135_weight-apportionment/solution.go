func apportion(scores []int) int {
	n := len(scores)
	// A weight of one everywhere is the floor the rules allow.
	weights := make([]int, n)
	for i := range weights {
		weights[i] = 1
	}
	// Left-to-right: satisfy the left-hand rule with the smallest value
	// that clears the position on the left.
	for i := 1; i < n; i++ {
		if scores[i] > scores[i-1] {
			weights[i] = weights[i-1] + 1
		}
	}
	// Right-to-left: the mirror rule. It raises only — never lowers — so
	// this sweep cannot break what the first settled.
	for i := n - 2; i >= 0; i-- {
		if scores[i] > scores[i+1] {
			if weights[i+1]+1 > weights[i] {
				weights[i] = weights[i+1] + 1
			}
		}
	}
	total := int64(0)
	for _, value := range weights {
		total += int64(value)
	}
	return int(total)
}
