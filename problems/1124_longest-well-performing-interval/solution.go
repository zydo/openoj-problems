func longestWPI(hours []int) int {
	first := map[int]int{0: -1}
	prefix := 0
	best := 0
	for i, hoursDay := range hours {
		if hoursDay > 8 {
			prefix += 1
		} else {
			prefix -= 1
		}
		if prefix > 0 {
			best = i + 1
		} else if j, ok := first[prefix-1]; ok {
			if i-j > best {
				best = i - j
			}
		}
		if _, ok := first[prefix]; !ok {
			first[prefix] = i
		}
	}
	return best
}
