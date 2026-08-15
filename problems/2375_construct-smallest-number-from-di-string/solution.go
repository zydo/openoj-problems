func smallestNumber(pattern string) string {
	n := len(pattern)
	result := make([]byte, 0, n+1)
	stack := make([]byte, 0, n+1)
	for i := 0; i <= n; i++ {
		stack = append(stack, byte('1'+i))
		if i == n || pattern[i] == 'I' {
			for len(stack) > 0 {
				result = append(result, stack[len(stack)-1])
				stack = stack[:len(stack)-1]
			}
		}
	}
	return string(result)
}
