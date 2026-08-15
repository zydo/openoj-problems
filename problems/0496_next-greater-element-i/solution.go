func nextGreaterElement(nums1 []int, nums2 []int) []int {
	nextGreater := make(map[int]int, len(nums2))
	stack := make([]int, 0, len(nums2))
	for _, value := range nums2 {
		for len(stack) > 0 && stack[len(stack)-1] < value {
			nextGreater[stack[len(stack)-1]] = value
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, value)
	}
	for _, value := range stack {
		nextGreater[value] = -1
	}
	result := make([]int, len(nums1))
	for i, value := range nums1 {
		result[i] = nextGreater[value]
	}
	return result
}
