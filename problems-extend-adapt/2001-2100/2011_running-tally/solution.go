func finalTally(tokens []string) int {
	value := 0
	for _, operation := range tokens {
		if operation[1] == '+' {
			value++
		} else {
			value--
		}
	}
	return value
}
