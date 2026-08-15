func maxEqualRowsAfterFlips(matrix [][]int) int {
	counts := make(map[string]int)
	best := 0
	for _, row := range matrix {
		key := make([]byte, len(row))
		for i, value := range row {
			key[i] = byte('0' + (value ^ row[0]))
		}
		counts[string(key)]++
		if counts[string(key)] > best {
			best = counts[string(key)]
		}
	}
	return best
}
