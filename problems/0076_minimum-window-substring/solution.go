func minWindow(s string, t string) string {
	if len(t) == 0 || len(t) > len(s) {
		return ""
	}
	need := make(map[byte]int)
	for i := 0; i < len(t); i++ {
		need[t[i]]++
	}
	missing := len(t)
	bestStart, bestLen := 0, -1
	left := 0
	for right := 0; right < len(s); right++ {
		ch := s[right]
		if need[ch] > 0 {
			missing--
		}
		need[ch]--
		if missing == 0 {
			for left < right && need[s[left]] < 0 {
				need[s[left]]++
				left++
			}
			if bestLen == -1 || right-left+1 < bestLen {
				bestStart = left
				bestLen = right - left + 1
			}
			need[s[left]]++
			missing++
			left++
		}
	}
	if bestLen == -1 {
		return ""
	}
	return s[bestStart : bestStart+bestLen]
}
