func stepsUntilHigher(readings []int) []int {
	n := len(readings)
	answer := make([]int, n)
	// Stack of positions still waiting for a higher one; their readings
	// are non-increasing bottom to top. Unanswered positions keep answer 0.
	stack := make([]int, 0, n)
	for index, reading := range readings {
		// Strictly higher the current reading resolves each waiting index on top; equal
		// readings leave them waiting (strict < comparison).
		for len(stack) > 0 && readings[stack[len(stack)-1]] < reading {
			previous := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			answer[previous] = index - previous
		}
		stack = append(stack, index)
	}
	return answer
}
