func leastInterval(tasks []string, n int) int {
	counts := make(map[string]int)
	for _, t := range tasks {
		counts[t]++
	}
	maxFreq := 0
	numMax := 0
	for _, v := range counts {
		if v > maxFreq {
			maxFreq = v
			numMax = 1
		} else if v == maxFreq {
			numMax++
		}
	}
	formula := (maxFreq-1)*(n+1) + numMax
	if len(tasks) > formula {
		return len(tasks)
	}
	return formula
}
