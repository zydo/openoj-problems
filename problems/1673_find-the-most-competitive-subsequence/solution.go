func mostCompetitive(nums []int, k int) []int {
	stack := make([]int, 0, k)
	n := len(nums)
	for i := 0; i < n; i++ {
		value := nums[i]
		remaining := n - i
		for len(stack) > 0 && stack[len(stack)-1] > value && len(stack)+remaining > k {
			stack = stack[:len(stack)-1]
		}
		if len(stack) < k {
			stack = append(stack, value)
		}
	}
	return stack
}
