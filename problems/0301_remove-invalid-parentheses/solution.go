import "sort"

func removeInvalidParentheses(s string) []string {
	isValid := func(str string) bool {
		count := 0
		for _, ch := range str {
			if ch == '(' {
				count++
			} else if ch == ')' {
				count--
				if count < 0 {
					return false
				}
			}
		}
		return count == 0
	}
	level := map[string]bool{s: true}
	for {
		valid := []string{}
		for item := range level {
			if isValid(item) {
				valid = append(valid, item)
			}
		}
		if len(valid) > 0 {
			sort.Strings(valid)
			return valid
		}
		next := map[string]bool{}
		for item := range level {
			for i := 0; i < len(item); i++ {
				ch := item[i]
				if ch == '(' || ch == ')' {
					next[item[:i]+item[i+1:]] = true
				}
			}
		}
		level = next
	}
}
