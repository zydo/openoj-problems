func rangeXorQueries(nums []int, queries [][]int) []int {
	// prefix[t] = XOR of the first t elements (prefix[0] = 0).
	prefix := make([]int, len(nums)+1)
	for i, x := range nums {
		prefix[i+1] = prefix[i] ^ x
	}
	// Self-inverse XOR telescopes: elements before l appear in both operands
	// and annihilate, leaving exactly nums[l..r] — O(1) per query.
	result := make([]int, len(queries))
	for qi, q := range queries {
		result[qi] = prefix[q[1]+1] ^ prefix[q[0]]
	}
	return result
}
