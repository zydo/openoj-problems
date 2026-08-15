func xorAllNums(nums1 []int, nums2 []int) int {
	answer := 0
	if len(nums2)%2 == 1 {
		for _, value := range nums1 {
			answer ^= value
		}
	}
	if len(nums1)%2 == 1 {
		for _, value := range nums2 {
			answer ^= value
		}
	}
	return answer
}
