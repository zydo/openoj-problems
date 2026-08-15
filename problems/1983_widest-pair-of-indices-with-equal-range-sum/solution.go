func widestPairOfIndices(nums1 []int, nums2 []int) int {
	first := make(map[int]int, len(nums1)*2)
	first[0] = -1
	diff := 0
	best := 0
	for i := 0; i < len(nums1); i++ {
		diff += nums1[i] - nums2[i]
		if j, ok := first[diff]; ok {
			if i-j > best {
				best = i - j
			}
		} else {
			first[diff] = i
		}
	}
	return best
}
