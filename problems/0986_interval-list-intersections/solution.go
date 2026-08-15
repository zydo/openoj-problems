func intervalIntersection(firstList [][]int, secondList [][]int) [][]int {
	result := [][]int{}
	i, j := 0, 0
	for i < len(firstList) && j < len(secondList) {
		lo := firstList[i][0]
		if secondList[j][0] > lo {
			lo = secondList[j][0]
		}
		hi := firstList[i][1]
		if secondList[j][1] < hi {
			hi = secondList[j][1]
		}
		if lo <= hi {
			result = append(result, []int{lo, hi})
		}
		if firstList[i][1] < secondList[j][1] {
			i++
		} else {
			j++
		}
	}
	return result
}
