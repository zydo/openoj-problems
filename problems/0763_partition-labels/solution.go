func partitionLabels(s string) []int {
	var last [26]int
	for i := range last {
		last[i] = -1
	}
	for i := 0; i < len(s); i++ {
		last[s[i]-'a'] = i
	}
	parts := []int{}
	start, end := 0, 0
	for i := 0; i < len(s); i++ {
		if last[s[i]-'a'] > end {
			end = last[s[i]-'a']
		}
		if i == end {
			parts = append(parts, end-start+1)
			start = i + 1
		}
	}
	return parts
}
