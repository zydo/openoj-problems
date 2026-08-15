func longestValidParentheses(s string) int {
	stack := make([]int, 0, len(s)+1)
	stack = append(stack, -1)
	best := 0
	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			stack = append(stack, i)
		} else {
			stack = stack[:len(stack)-1]
			if len(stack) == 0 {
				stack = append(stack, i)
			} else {
				if i-stack[len(stack)-1] > best {
					best = i - stack[len(stack)-1]
				}
			}
		}
	}
	return best
}
