func uniqueLetterString(s string) int {
	positions := make([][]int, 26)
	for i := 0; i < 26; i++ {
		positions[i] = []int{}
	}
	for i := 0; i < len(s); i++ {
		c := int(s[i]) - 'A'
		positions[c] = append(positions[c], i)
	}
	n := len(s)
	total := 0
	for _, list := range positions {
		if len(list) == 0 {
			continue
		}
		pos := make([]int, 0, len(list)+2)
		pos = append(pos, -1)
		pos = append(pos, list...)
		pos = append(pos, n)
		for k := 1; k < len(pos)-1; k++ {
			total += (pos[k] - pos[k-1]) * (pos[k+1] - pos[k])
		}
	}
	return total
}
