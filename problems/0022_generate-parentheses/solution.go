func generateParenthesis(n int) []string {
	var result []string
	var current []byte
	var backtrack func(openCount, closeCount int)
	backtrack = func(openCount, closeCount int) {
		if len(current) == 2*n {
			result = append(result, string(current))
			return
		}
		if openCount < n {
			current = append(current, '(')
			backtrack(openCount+1, closeCount)
			current = current[:len(current)-1]
		}
		if closeCount < openCount {
			current = append(current, ')')
			backtrack(openCount, closeCount+1)
			current = current[:len(current)-1]
		}
	}
	backtrack(0, 0)
	return result
}
