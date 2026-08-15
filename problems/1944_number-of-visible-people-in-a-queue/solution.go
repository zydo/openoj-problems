func canSeePersonsCount(heights []int) []int {
	n := len(heights)
	answer := make([]int, n)
	stack := make([]int, 0, n)
	for i := n - 1; i >= 0; i-- {
		seen := 0
		for len(stack) > 0 && stack[len(stack)-1] < heights[i] {
			stack = stack[:len(stack)-1]
			seen++
		}
		if len(stack) > 0 {
			seen++
		}
		answer[i] = seen
		stack = append(stack, heights[i])
	}
	return answer
}
