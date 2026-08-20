func commonIntervalPieces(rangesA [][]int, rangesB [][]int) [][]int {
	result := [][]int{}
	i, j := 0, 0
	for i < len(rangesA) && j < len(rangesB) {
		// The overlap of the two current intervals is [max starts,
		// min ends]; lo <= hi means they intersect (closed intervals,
		// so touching endpoints still count).
		lo := rangesA[i][0]
		if rangesB[j][0] > lo {
			lo = rangesB[j][0]
		}
		hi := rangesA[i][1]
		if rangesB[j][1] < hi {
			hi = rangesB[j][1]
		}
		if lo <= hi {
			result = append(result, []int{lo, hi})
		}
		// Retire the interval that ends earlier: later intervals in the
		// other list start strictly after its end, so it is done forever.
		if rangesA[i][1] < rangesB[j][1] {
			i++
		} else {
			j++
		}
	}
	return result
}
