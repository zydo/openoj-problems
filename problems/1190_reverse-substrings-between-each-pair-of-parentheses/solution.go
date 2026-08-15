func reverseParentheses(s string) string {
	stack := [][]byte{{}}
	for i := 0; i < len(s); i++ {
		ch := s[i]
		switch ch {
		case '(':
			stack = append(stack, []byte{})
		case ')':
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			for l, r := 0, len(top)-1; l < r; l, r = l+1, r-1 {
				top[l], top[r] = top[r], top[l]
			}
			stack[len(stack)-1] = append(stack[len(stack)-1], top...)
		default:
			stack[len(stack)-1] = append(stack[len(stack)-1], ch)
		}
	}
	return string(stack[0])
}
