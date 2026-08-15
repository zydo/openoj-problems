func longestValidSubstring(word string, forbidden []string) int {
	banned := make(map[string]struct{}, len(forbidden))
	for _, s := range forbidden {
		banned[s] = struct{}{}
	}
	maxLen := 0
	for s := range banned {
		if len(s) > maxLen {
			maxLen = len(s)
		}
	}
	n := len(word)
	left := 0
	ans := 0
	for right := 0; right < n; right++ {
		start := right - maxLen
		if left-1 > start {
			start = left - 1
		}
		for j := right; j > start; j-- {
			if _, ok := banned[word[j:right+1]]; ok {
				left = j + 1
				break
			}
		}
		if right-left+1 > ans {
			ans = right - left + 1
		}
	}
	return ans
}
