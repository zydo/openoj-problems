func decodeString(s string) string {
	type frame struct {
		prev  string
		times int
	}
	var stack []frame
	current := []byte{}
	repeat := 0
	for i := 0; i < len(s); i++ {
		ch := s[i]
		if ch >= '0' && ch <= '9' {
			repeat = repeat*10 + int(ch-'0')
		} else if ch == '[' {
			stack = append(stack, frame{string(current), repeat})
			current = current[:0]
			repeat = 0
		} else if ch == ']' {
			f := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			merged := make([]byte, 0, len(f.prev)+len(current)*f.times)
			merged = append(merged, f.prev...)
			for t := 0; t < f.times; t++ {
				merged = append(merged, current...)
			}
			current = merged
		} else {
			current = append(current, ch)
		}
	}
	return string(current)
}
