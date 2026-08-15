func maximumGood(statements [][]int) int {
	n := len(statements)
	best := 0
	for mask := 0; mask < (1 << n); mask++ {
		valid := true
		count := 0
		for i := 0; i < n && valid; i++ {
			if mask&(1<<i) == 0 {
				continue
			}
			count++
			for j := 0; j < n; j++ {
				if statements[i][j] == 2 {
					continue
				}
				isGood := mask&(1<<j) != 0
				if isGood != (statements[i][j] == 1) {
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
