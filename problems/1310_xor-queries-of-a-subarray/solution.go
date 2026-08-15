func xorQueries(arr []int, queries [][]int) []int {
	prefix := make([]int, len(arr)+1)
	for i, x := range arr {
		prefix[i+1] = prefix[i] ^ x
	}
	result := make([]int, len(queries))
	for qi, q := range queries {
		result[qi] = prefix[q[1]+1] ^ prefix[q[0]]
	}
	return result
}
