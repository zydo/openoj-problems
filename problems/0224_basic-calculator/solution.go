func calculate(s string) int {
	result := 0
	sign := 1
	num := 0
	stack := []int{}
	for _, ch := range s {
		switch {
		case ch >= '0' && ch <= '9':
			num = num*10 + int(ch-'0')
		case ch == '+':
			result += sign * num
			num = 0
			sign = 1
		case ch == '-':
			result += sign * num
			num = 0
			sign = -1
		case ch == '(':
			stack = append(stack, result, sign)
			result = 0
			sign = 1
		case ch == ')':
			result += sign * num
			num = 0
			result = result*stack[len(stack)-1] + stack[len(stack)-2]
			stack = stack[:len(stack)-2]
		}
		// spaces are ignored
	}
	return result + sign*num
}
