func calculate(s string) int {
	var stack []int64
	var num int64
	op := byte('+')
	last := len(s) - 1
	for i := 0; i <= last; i++ {
		ch := s[i]
		if ch >= '0' && ch <= '9' {
			num = num*10 + int64(ch-'0')
		}
		if ch == '+' || ch == '-' || ch == '*' || ch == '/' || i == last {
			switch op {
			case '+':
				stack = append(stack, num)
			case '-':
				stack = append(stack, -num)
			case '*':
				stack[len(stack)-1] *= num
			default:
				stack[len(stack)-1] /= num
			}
			op = ch
			num = 0
		}
	}
	var total int64
	for _, value := range stack {
		total += value
	}
	return int(total)
}
