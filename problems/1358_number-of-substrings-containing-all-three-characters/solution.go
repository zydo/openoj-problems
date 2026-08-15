func numberOfSubstrings(s string) int {
	last := []int{-1, -1, -1}
	count := 0
	for i := 0; i < len(s); i++ {
		idx := int(s[i]) - 'a'
		if idx >= 0 && idx <= 2 {
			last[idx] = i
		}
		m := last[0]
		if last[1] < m {
			m = last[1]
		}
		if last[2] < m {
			m = last[2]
		}
		count += m + 1
	}
	return count
}
