func removeKdigits(num string, k int) string {
	stack := make([]byte, 0, len(num))
	for i := 0; i < len(num); i++ {
		ch := num[i]
		for k > 0 && len(stack) > 0 && stack[len(stack)-1] > ch {
			stack = stack[:len(stack)-1]
			k--
		}
		stack = append(stack, ch)
	}
	if k > 0 {
		stack = stack[:len(stack)-k]
	}
	pos := 0
	for pos < len(stack) && stack[pos] == '0' {
		pos++
	}
	result := string(stack[pos:])
	if result == "" {
		return "0"
	}
	return result
}
