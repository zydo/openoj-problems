func mostTruthful(statements [][]int) int {
	n := len(statements)
	best := 0
	// Enumerate every assignment: bit i set means person i is truthful. The
	// constraint is one-sided — truthful people must tell the truth, unreliable people
	// may say anything.
	for mask := 0; mask < (1 << n); mask++ {
		valid := true
		count := 0
		for i := 0; i < n && valid; i++ {
			if mask&(1<<i) == 0 {
				continue
			}
			count++
			for j := 0; j < n; j++ {
				// 2 = no statement; a "j is truthful" claim requires bit j set
				// and a "j is unreliable" claim requires it clear.
				if statements[i][j] == 2 {
					continue
				}
				isTruthful := mask&(1<<j) != 0
				if isTruthful != (statements[i][j] == 1) {
					valid = false
					break
				}
			}
		}
		if valid && count > best {
			best = count
		}
	}
	return best
}
