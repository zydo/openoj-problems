func dailyTemperatures(temperatures []int) []int {
	n := len(temperatures)
	answer := make([]int, n)
	stack := make([]int, 0, n)
	for day, temp := range temperatures {
		for len(stack) > 0 && temperatures[stack[len(stack)-1]] < temp {
			previous := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			answer[previous] = day - previous
		}
		stack = append(stack, day)
	}
	return answer
}
