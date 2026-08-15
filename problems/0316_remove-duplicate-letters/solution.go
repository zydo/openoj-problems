func removeDuplicateLetters(s string) string {
	var count [26]int
	for _, ch := range s {
		count[ch-'a']++
	}
	stack := []byte{}
	var inStack [26]bool
	for _, ch := range s {
		c := byte(ch - 'a')
		count[c]--
		if inStack[c] {
			continue
		}
		for len(stack) > 0 {
			top := stack[len(stack)-1] - 'a'
			if top > c && count[top] > 0 {
				inStack[top] = false
				stack = stack[:len(stack)-1]
			} else {
				break
			}
		}
		stack = append(stack, byte('a'+c))
		inStack[c] = true
	}
	return string(stack)
}
