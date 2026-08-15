func countTriplets(arr []int) int {
	count := map[int]int{0: 1}
	indexSum := map[int]int{0: 0}
	prefix := 0
	answer := 0
	for j, value := range arr {
		prefix ^= value
		if c, ok := count[prefix]; ok {
			answer += j*c - indexSum[prefix]
			count[prefix] = c + 1
			indexSum[prefix] += j + 1
		} else {
			count[prefix] = 1
			indexSum[prefix] = j + 1
		}
	}
	return answer
}
