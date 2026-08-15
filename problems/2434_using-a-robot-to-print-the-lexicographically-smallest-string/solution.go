func robotWithString(s string) string {
	n := len(s)
	suffixMin := make([]byte, n+1)
	suffixMin[n] = 127
	for i := n - 1; i >= 0; i-- {
		c := s[i]
		if suffixMin[i+1] < c {
			c = suffixMin[i+1]
		}
		suffixMin[i] = c
	}
	var stack []byte
	out := make([]byte, 0, n)
	for i := 0; i < n; i++ {
		for len(stack) > 0 && stack[len(stack)-1] <= suffixMin[i] {
			out = append(out, stack[len(stack)-1])
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, s[i])
	}
	for len(stack) > 0 {
		out = append(out, stack[len(stack)-1])
		stack = stack[:len(stack)-1]
	}
	return string(out)
}
