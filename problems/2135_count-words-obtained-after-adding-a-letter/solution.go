func wordCount(startWords []string, targetWords []string) int {
	mask := func(w string) int {
		m := 0
		for i := 0; i < len(w); i++ {
			m |= 1 << (w[i] - 'a')
		}
		return m
	}

	starts := make(map[int]bool)
	for _, w := range startWords {
		starts[mask(w)] = true
	}
	count := 0
	for _, t := range targetWords {
		m := mask(t)
		for bit := 0; bit < 26; bit++ {
			if m&(1<<bit) != 0 && starts[m^(1<<bit)] {
				count++
				break
			}
		}
	}
	return count
}
