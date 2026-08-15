func characterReplacement(s string, k int) int {
	count := make([]int, 128)
	best, left, maxFreq := 0, 0, 0
	for right := 0; right < len(s); right++ {
		c := s[right]
		count[c]++
		if count[c] > maxFreq {
			maxFreq = count[c]
		}
		for (right-left+1)-maxFreq > k {
			count[s[left]]--
			left++
		}
		if right-left+1 > best {
			best = right - left + 1
		}
	}
	return best
}
