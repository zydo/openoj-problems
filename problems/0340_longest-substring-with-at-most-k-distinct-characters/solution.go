func lengthOfLongestSubstringKDistinct(s string, k int) int {
	counts := make(map[byte]int)
	left := 0
	best := 0
	for right := 0; right < len(s); right++ {
		counts[s[right]]++
		for len(counts) > k {
			c := s[left]
			counts[c]--
			if counts[c] == 0 {
				delete(counts, c)
			}
			left++
		}
		if right-left+1 > best {
			best = right - left + 1
		}
	}
	return best
}
