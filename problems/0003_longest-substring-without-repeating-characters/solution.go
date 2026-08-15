func lengthOfLongestSubstring(s string) int {
	last := make([]int, 128)
	for i := range last {
		last[i] = -1
	}
	start, best := 0, 0
	for i := 0; i < len(s); i++ {
		c := s[i]
		if last[c] >= start {
			start = last[c] + 1
		}
		last[c] = i
		if i-start+1 > best {
			best = i - start + 1
		}
	}
	return best
}
